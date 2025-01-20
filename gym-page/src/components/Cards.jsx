import React from 'react'

const Cards = (props) => {
    return (
        <div className='card'>
            <div className="card-head">
                <h1>{props.heading}</h1>
            </div>
            <div className="list">
                <ul>
                    <li>
                        <span>Cardio</span>
                        <span><img src={props.tick} /></span>
                    </li>
                    <li>
                        <span>Swimming Pool</span>
                        <span><img src={props.tick} /></span>
                    </li>
                    <li>
                        <span>Jacuzzi</span>
                        <span><img src={props.tick} /></span>
                    </li>
                    <li>
                        <span>Personal Locker</span>
                        <span><img src={props.cross} /></span>
                    </li>
                    <li>
                        <span>Protein Bars</span>
                        <span><img src={props.cross} /></span>
                    </li>
                </ul>
            </div>
            <div className='card-sep'></div>
            <div className='price'>
                <h2>{props.price}</h2>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Cards
