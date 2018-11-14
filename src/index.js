import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = { text: 'Component are cool'};
    const labelText = { text: 'Enter name:' }

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText.text}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);