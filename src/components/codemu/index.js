import React, { useState } from 'react'

function Codemu() {
  const [inCart, setInCart] = useState(false);
  let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusamus mollitia itaque fugit, pariatur eius cupiditate minus? Ipsa architecto sapiente distinctio modi amet doloremque suscipit perferendis earum at mollitia provident officiis eaque similique laboriosam nulla tempora, illum nisi, error minus`
  const res = text.slice(0, 15);
  const [state, setState] = useState(false)
  return (
    <div id='Codemu'>
      <div className="container">
        <div className="Codemu">
          <h1>codemu</h1>
          <span>{inCart ? 'в корзине' : 'не в корзине'}</span>
          <button onClick={() => setInCart(!inCart)}>btn</button>
          <p onClick={() => {setState(!state)}}>{state ? res : text}{state ? '...read' : 'close'}</p>
        </div>
      </div>
    </div>
  )
}

export default Codemu
