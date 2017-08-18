/*eslint-env*/ /*globals*/
"use strict";

import React from "React";
import ReactDOM from "ReactDOM";
import { Store } from "vey";

window.store = new Store();

function main() {
  return <h2>Number :: {Math.random()}</h2>;
}

ReactDOM.render(main(), document.getElementById("root"));
