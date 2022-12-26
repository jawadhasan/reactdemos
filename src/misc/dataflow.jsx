import React from "react";
import { useState } from "react";

import {Button } from "../data-flow/button";
import {Display} from "../data-flow/display"

export default function DataFlow() {

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

    return (
      <div>        
        <h5>DataFlow</h5>
        <Button onClickFunction={incrementCounter} />      
        <Display message={counter} />
      </div>
    );
  }