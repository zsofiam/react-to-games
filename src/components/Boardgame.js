import React from 'react';
import { Link } from "react-router-dom";

const Boardgame = (props) => {
    const getStyle =  {
        
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left',
            cursor: 'pointer'
    }
    
        const{name, gameId} = props.boardgame;
        return (
            <div className="card" style={getStyle}>
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