import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'

function Card({ label,title,picture }){
    const CardLabel = styled.span`
        color: #5843e4;
        font-size: 22px;
        font-weight: bold;
    `
    const CardImage = styled.img`
        width: 80px;
        height: 80px;
        border-radius: 50%;
    `
    return(
        <div style={{display:'flex', flexDirection:'column', padding: 15}}>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt='freelance' />
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