import React, { FunctionComponent, useMemo, useState } from "react";
interface Props{

}
let myArr = new Array(30000000).fill(0).map((ele,i)=>{
    return {
        index: i,
        magicNumber : i==29000000
    }
})
function TestUseMemo(): JSX.Element {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(myArr);

    let magicNumber = useMemo(()=>{
        return number.find(ele=>{
            return ele.magicNumber
        })
    },[number]) 
    const handleCounter =(e:React.MouseEvent)=>{
        setCount(c=>c+1);
    }
    return (  
        <div>
            <div>
                My magic number is {magicNumber?.index}
            </div>
            <button onClick={handleCounter}>Increament {count}</button>
        </div>
    );
}

export default TestUseMemo;