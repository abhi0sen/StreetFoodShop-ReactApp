import { useState } from "react";

const Count = function (props){
    // console.log("props", props);
    const [count, setCount] = useState(props.initialValue);
// const isEven = count%2 ===0;

    return (
        <div>

        <p>Functional based componenets</p>
        <p>Count: {count}</p>
        <button onClick={function(){
            setCount(count+1);
        }}>Increase</button>
        <button onClick={function(){
            setCount(count-1);
        }}>Decrease</button>
        <p>{count % 2===0}</p>
        

        <div>
            {count % 2 !== 0 && (
            <div style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"red"}}></div>
            )}
            {count % 2 === 0 && (
            <div style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"blue"}}></div>
            )}
        </div>
        </div>
    );
};

export default Count;