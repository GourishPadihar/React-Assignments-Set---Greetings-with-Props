// write code for Welcome component here
import React from "react";

function greeting(props){
  const name=props.name;
return(
<>
  <h1>Hey {}!</h1>
  <h2>Welcome to Newton School.</h2>
  </>
);
}
export greeting;
