import React from 'react'
import './about.scss'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import avatar from '../../images/avatar-web.svg'
import pdf from '../../pdf/cv.pdf'

import { useTranslation } from 'react-i18next'

const AboutSection = ({ open }) => {
  const { t, i18n } = useTranslation('common')

  const openCv = () => {
    window.open(pdf)
  }

  return (
      <Container className="About mt-5 mb-5 pt-5">
        <Row className="row-about" id="About">
          <Col
            xs={6}
            md={4}
            className="about-img d-flex justify-content-center p-5"
          >
            <Image src={avatar} alt="avatar" />
          </Col>
          <Col
            xs={6}
            md={4}
            className="about-infos d-flex flex-column align-items-center"
          >
            <h1>{t('about.title')}</h1>
            <p>
            {t('about.description')}
            </p>
            <Button
              onClick={openCv}
              className="button-about"
              variant="outline-primary"
            >
              {t('about.button')}
            </Button>
          </Col>
        </Row>
      </Container>
  )
}

export default AboutSection

// Créer une page pour télécharger le CV : se renseigner sur les PDF
