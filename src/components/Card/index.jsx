import React from 'react';
import PropTypes from 'prop-types'

function Card({ label,title,picture }){
    return(
        <div style={{display:'flex', flexDirection:'column', padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt='freelance' width={80} height={80} />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string

}

export default Card;