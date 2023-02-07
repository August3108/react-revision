import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Helloworld =()=>{

    const codeString = '(num) => num + 1';
    return (<>
    <SyntaxHighlighter language="jsx" style={docco} >
       {codeString}
    </SyntaxHighlighter>
    
    </>)
}
export default Helloworld;