import React from "react";

export function Button(props) { 

  return (

    <button className="btn btn-info" onClick={props.onClickFunction}>
     +1
    </button>
  );
}