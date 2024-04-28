import React from 'react'
import { useId } from 'react';

const FormBar = ({onAdd}) => {

    const querywordId = useId();
    const colorId = useId();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log("query:", event.target.elements.queryword.value);
        console.log("color:", form.elements.color.value);
        onAdd({
            queryword: event.target.elements.queryword.value,
            color: form.elements.color.value
        });
        form.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={ querywordId}>INPUT LABEL</label>
                    <br />
                    <input type="text" name="queryword" id={ querywordId} />
                </div>

                <br />
                
                <div>
                    <label htmlFor={colorId}>choose one</label>
                    <br />
                    <select name="color" id={colorId}>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FormBar