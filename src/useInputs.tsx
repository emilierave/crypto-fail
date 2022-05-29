import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

interface ResponseData {
    markets: Array<
        {
            marketSymbol: string,
            Input: {
                lastPrice: string;
            }
        }
        >
}

export interface InputData {
    name: string;
    price?: string;
}

export const useInputs = () => {
    const [Inputs, setInputs] = useState(['BTC', 'LTC', 'XMR']);

    const [InputsDataList, setInputsDataList] = useState<InputData[]>([]);

    const query = gql`
        query price($symbols: [String!]!) {
            markets(filter: { baseSymbol: {_in: $symbols } quoteSymbol: { _in: ["EUR"] } marketStatus: { _eq: Active } }) {
                marketSymbol
                Input {
                    lastPrice
                }
            }
        }
    `;

    const { loading } = useQuery<ResponseData>(
        query,
        {
            variables: { symbols: Inputs },
            onCompleted: ({ markets }) => {
                const InputsData = Inputs.map((Input) => {
                    const market = markets.find(market => market.marketSymbol.includes(Input));
                    return { name: Input, price: market?.Input.lastPrice };
                }, {} as Record<string, null | InputData>);
                setInputsDataList(InputsData);
            },
        });
    const addInput = (Input: string) => {
        if (Inputs.includes(Input)) return;
        setInputs(state => ([...state, Input]));
    }
    const removeInput = (InputIndex: number) => {
        const newInputs = [...Inputs];
        const newInputData = [...InputsDataList];

        newInputs.splice(InputIndex, 1);
        newInputData.splice(InputIndex, 1);

        setInputs(newInputs);
        setInputsDataList(newInputData);
    }

    return {
        addInput,
        removeInput,
        InputsDataList,
    }
}
export default useInputs;
//this is the one of input form, this is the one i need