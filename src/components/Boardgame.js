import React from 'react';
import { Link } from "react-router-dom";
import './Boardgame.css';


const Boardgame = (props) => {
    const getStyle =  {
        
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left',
            cursor: 'pointer'
    }
    
        const{name, gameId, image} = props.boardgame;
        return (
            <div className="card" style={getStyle}>
                <img src={`${image}`} alt="Boardgame"></img>
                <p>
                <Link to={`/boardgame/${gameId}`}>
                {' '}
                {name}
                {}
                </Link>
                </p>
            </div>
        )
}

export default Boardgame;