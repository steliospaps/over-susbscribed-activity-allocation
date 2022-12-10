import React from "react";

export default (props)=>(
  <div>
    <p>Use the link provided to you</p>
    <ul>
      <li><a href="/login/demo_token">demo admin</a></li>
    </ul>
    {props.children}
  </div>
)