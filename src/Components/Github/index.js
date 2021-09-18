import React from 'react';
import { Container, Row, Image, Col} from 'react-bootstrap';
import './github.scss';
import avatar from '../../images/github-avatar.jpg';

const GithubSection = () => {
    return (
        <Container className="d-flex justify-content-end Github-section">
            <Row style={{width: "10rem"}} className="git-row mt-3 position-absolute">
                <Col xs={8} sm={8} lg={8} className="git-infos">
                <div className="git-title">Marianne PN</div>
                <a href="https://github.com/MariannePiquetNowak" className="git-link">Github</a>
                </Col>
                
                <Col xs={4} sm={4} lg={4} className="git-img">
                    <Image src={avatar} roundedCircle style={{ width: "3em"}}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GithubSection;