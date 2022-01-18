import { useState } from "react";
import { useEffect } from "react";
import CountComponent from "./countcClass";

const Count = function (props){
    // console.log("props", props);
    const [count, setCount] = useState(props.initialValue);
    const [show, setShow] = useState(false);

    /**effect hook */
    useEffect(function ()
    {
        console.log('update Happened - useeffect');
    });
// const isEven = count%2 ===0;

    return (
        <div style={{background: "#eee"}}>

        <p>Functional based componenets: {count}</p>
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
            <div id="red" style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"red"}}></div>
            )}
            {count % 2 === 0 && (
            <div style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"blue"}}></div>
            )}
        </div>
        <hr />

                <button onClick={function(){
                    setShow(!show);
                }}> 
                    Show Class Component
                </button>
                {
                    show && (
                        <div>
                            <CountComponent initialValue ={count} />
                        </div>
                    )}

        </div>
    );
};

export default Count;