import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Helloworld =()=>{

    const text = `
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    `;


    return (<>
    
    <h1> Topic - hello world</h1>
    <br/>
    <h2>What is React ?</h2>
    <p>React is a simple , feature rich , components based , javascript library used for building 
       user interfdace. <br/> It is developed by Jordan Walke and maintained by meta</p>
    <h2>What are features of React</h2>
    <p>Features of react include</p>
    <ul>
        <li>Solid base architecture</li>
        <li>Extensible library</li>
        <li>components based library</li>
        <li>JSX based design</li>
        <li>It is easy to learn and faster to code</li>
    </ul>

    <SyntaxHighlighter language="javascript" style={dark}>
      {text}
    </SyntaxHighlighter>

    
    </>)
}

export default Helloworld;