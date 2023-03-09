import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';

const postData = [
    {id: 1, text: '1 post'},
    {id: 2, text: '2 post'},
    {id: 3, text: '3 post'},
    {id: 4, text: '4 post'},
    {id: 5, text: '5 post'},
]
let messagesData = {
    dialogsData: [{id: 0, name: "Dima"},
        {id: 1, name: "Eugene"},
    ],
    messagesData: [
        {id: 0, name: "Dima", messages: ["Hi", "it's me"]},
        {id: 1, name: "Eugene", messages: ["Hi", "what's up?"]},
    ]
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App postData={postData} messagesData={messagesData}></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
