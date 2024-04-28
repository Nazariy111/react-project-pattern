import React, { useState } from 'react'
import { useId } from 'react';
import { RiPaintFill } from "react-icons/ri";

const initialValues = {
    queryword: "word",
    color: "green"
};

const ControledFormBar = ({ onAdd }) => {
    
    const [values, setValues] = useState(initialValues);

    const querywordId = useId();
    const colorId = useId();

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(values);
        setValues(initialValues);
    }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={ querywordId}>INPUT LABEL</label>
                    <br />
                    <input
                        type="text"
                        name="queryword"
                        id={querywordId}
                        onChange={handleChange}
                        value={values.queryword} />
                </div>
                <p>you are typing: {values.queryword }</p>
                <br />
                
                <div>
                    <label htmlFor={colorId}>choose one</label>
                    <br />
                    <select
                        name="color"
                        id={colorId}
                        onChange={handleChange}
                        value={values.color}>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <RiPaintFill size="40" color={ values.color} />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default ControledFormBar;