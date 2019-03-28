import React from "react";
import logo from "../logo.svg";

/* function */
const Logo = () => <img src={logo} className="App-logo" alt="logo" />;
export default Logo;
/* alternative class
 export default class Logo extends Component {
   render() {
     return <img src={logo} className="App-logo" alt="logo" />;
   }
 }*/
