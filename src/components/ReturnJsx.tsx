import React, { FunctionComponent, useState } from "react";

interface Props {
  name: string
}

const ReturnJsx: FunctionComponent<Props> = ():JSX.Element => {
  const [value, setValue] = useState(0);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValue(+e.target.value);
  };
  console.log("Helo")
  const returnJSXArray = (): JSX.Element[] => {
    let ar = new Array(value).fill(0);

    return ar.map((ele, key) => {
      return (
        <div
          key={key}
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          I am the component
        </div>
      );
    });
  };
  return (
    <>
      <input placeholder="Input" type="number" onChange={changeHandler} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>{returnJSXArray()}</div>
    </>
  );
};

export default React.memo(ReturnJsx);
