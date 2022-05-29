import React from "react";
import { render } from "react-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import './App.scss';
import icon from './icon.svg';

function ExchangeRates() {
    const { loading, error, data } = useQuery(gql`
        {
            rates(currency: "EUR") {
                currency
                rate
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
            <div className="Card" key={currency}>
                <div className="left">
                    <img src={icon} className="icon" alt="drink"/>
                    <div className="data">
                        <h6>
                            {currency} {rate}
                        </h6>
                    </div>
                </div>
                <div className="remove" onClick={() => onRemove(rate)}>
                    {}
                    &#10006;
                </div>
            </div>

    ));
}

export default ExchangeRates;
