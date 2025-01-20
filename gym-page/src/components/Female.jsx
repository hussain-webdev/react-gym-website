import React from 'react'

const Female = (props) => {
  return (
    <>
      <div className="section2">
        <div className='trainer'>
        <div className="img2-cont2">
            <img src={props.img} alt="" />
          </div>
          <div className="desc2">
            <h1>{props.name}</h1>
            <p>{props.desc}</p><span>{props.pdesc}</span>
            <div><button>More...</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Female
