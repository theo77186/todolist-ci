import { useState } from "react";

const InputForm = ({addCallback}) => {
    let [inputState, setInputState] = useState("");
    const onChange = (ev) => {
        setInputState(ev.target.value);
    };
    const onSubmit = (ev) => {
        if (inputState.length >= 3)
            addCallback(inputState);
        ev.preventDefault();
    }
    return <form onSubmit={onSubmit}>
        <input type="text" value={inputState} onChange={onChange} placeholder="enter note" />
        <span>&nbsp;</span>
        <input type="submit" disabled={inputState.length < 3} value="Add" />
    </form>
};

export default InputForm;
