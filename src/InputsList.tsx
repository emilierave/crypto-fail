import React from 'react';
import {InputData} from './useInputs';


interface InputsListProps {
    InputsData: InputData[];
    onRemove: (index: number) => any;
}

export const InputsList = ({ onRemove, InputsData }: InputsListProps) => {
    return (

            <div className="futureTable">
                {}
                {
                    InputsData.map((InputData, index) => (
                        <div className="InputCard" key={InputData.name}>
                            <div className="left">
                                <img src="./icon.svg" alt="drink"/>
                                <div className="data">
                                    <h6>
                                        {InputData.name}
                                    </h6>
                                    <p>
                                        {}
                                        {InputData.price ? `${Number(InputData.price).toFixed(2)} \u20AC` : '-'}
                                    </p>
                                </div>
                            </div>
                            <div className="remove" onClick={() => onRemove(index)}>
                                {}
                                &#10006;
                            </div>
                        </div>
                    ))
                }
            </div>

    )
}
export default InputsList;
