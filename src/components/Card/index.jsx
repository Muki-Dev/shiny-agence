import React from 'react';
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'

function Card({ label,title,picture }){
    return(
        <div style={{display:'flex', flexDirection:'column', padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt='freelance' width={80} height={80} />
            <span>{title}</span>
        </div>
    )
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired

}

export default Card;