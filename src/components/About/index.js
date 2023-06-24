import React, { useState } from "react";
function About() {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState(false)
  const [color2, setColor2] = useState(false)
  const [none, setNone] = useState(false)
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <button onClick={() => {
            setCount(count +1)
            setColor(true)
            setColor2(false)
          }} style={{
            color: "#fff",
            background: color ? 'red' : '#000',
            padding: '10px 20px',
            borderRadius: '10px',

          }}>+</button>
          <h1>{count}</h1>
          <button onClick={() => {
            setCount(count === 1 ? count: count-1)
            setColor2(true)
            setColor(false)
          }} style={{
            color:"#fff",
            background: color2 ? 'red' : '#000',
            padding: '10px 20px',
            borderRadius: '10px',
          }}>-</button>
          <button onClick={() => {
            setCount(0)
            setColor2(false)
            setColor(false)
            }}>reset</button>


          <button className="btn" onClick={() => {
            setNone(none === false ? true : false)
          }}>{none ? 'none' : 'click'}</button>

          <div style={{
            transform: none ? true : 'scale(0)',
            transition: '0.3s',
            background: 'red',
            width: '200px',
            height: '200px',
          }}></div>

        </div>
      </div>
    </div>
  );
}

export default About;
