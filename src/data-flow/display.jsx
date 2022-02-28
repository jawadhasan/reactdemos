import React from "react";

export function Display(props) {
  return (
    <div className="text-success">
      {props.message}
    </div>
  );
}