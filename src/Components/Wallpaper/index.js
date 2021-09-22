import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Wallpaper = (props) => {
    return (
        <Container className="img-header">
            <Image src={props.src}/>
        </Container>
    )
}

export default Wallpaper;