import React from 'react';
import { Container, Image } from 'react-bootstrap';
// import wallpaper from '../../images/header.svg';
import wallpaper from "../../images/header-fusion.svg";

const Wallpaper =() => {
    return (
        <Container className="img-header">
            <Image src={wallpaper}/>
        </Container>
    )
}

export default Wallpaper;