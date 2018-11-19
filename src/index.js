import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = { text: 'Component are cool'};
    const labelText = { text: 'Enter name:' }

    return (
        <div>
            <h1>Bongorno</h1>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);