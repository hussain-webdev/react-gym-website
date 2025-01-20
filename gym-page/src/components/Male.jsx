import React from 'react'

const Male = (props) => {
  return (
    <>
      <div className="section1" id='about'>
        <div className='trainer'>
          <div className="img-cont1">
            <img src={props.img} alt="" />
          </div>
          <div className="desc1">
            <h1>{props.name}</h1>
            <p>{props.desc}</p><span>{props.pdesc}</span>
            <div><button>More...</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Male
