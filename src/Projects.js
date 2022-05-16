import React, { Suspense } from 'react'
import './App.scss'
import '../src/Components/Project/project.scss'
import Layout from './Components/Layout/layout'
import Wallpaper from './Components/Wallpaper'
import wallpaper from './images/header-fusion.svg'
import Project from './Components/Project'
import ScrollButton from './Components/ScrollTop'
import { useTranslation } from 'react-i18next'

// Images
import binocular from './images/binoculars-leak.svg'
import aqlm from './images/aqlm-leak.svg'
import superu from './images/super-u.svg'
import greenValley from './images/green-valley.svg'
import cvWeb from './images/cv.svg'
import flag_fr from './images/flag_fr.png'
import flag_uk from './images/flag_uk.png'

import { Container } from 'react-bootstrap'

const reverse = 'flex-row-reverse'

const Projects = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Layout>
          <Wallpaper src={wallpaper} />
          <Container className="Project-list">
            <Project
              src={binocular}
              reverse={reverse}
              title={t('project.project_1.title')}
              text={t('project.project_1.text')}
              link="https://www.deviantart.com/sckyzo-pat/gallery/80213653/aqlm-3-5-visuels"
              linkName={t('project.project_1.btn')}
              techno="Adobe Illustrator"
            />
            <Project
              src={aqlm}
              reverse={null}
              title={t('project.project_2.title')}
              text={t('project.project_2.text')}
              link="https://leak.aqlm.fr"
              linkName={t('project.project_2.btn')}
              techno="Symfony, Bootstrap, Javascript"
            />
            <Project
              src={greenValley}
              reverse={reverse}
              title={t('project.project_3.title')}
              text={t('project.project_3.text')}
              link="https://www.facebook.com/people/Green-Valley-Disc-Golf/100067576636965/"
              linkName={t('project.project_3.btn')}
              techno="Adobe Illustrator, Adobe Photoshop"
            />
            <Project
              src={superu}
              reverse={null}
              title={t('project.project_4.title')}
              text={t('project.project_4.text')}
              link="https://www.deviantart.com/sckyzo-pat/gallery/79343165/super-u-print"
              linkName={t('project.project_4.btn')}
              techno="Adobe Illustrator, Adobe InDesign"
            />
            <Project
              src={cvWeb}
              reverse={reverse}
              title={t('project.project_5.title')}
              text={t('project.project_5.text')}
              link="https://curriculumvitae-mariannepn.yj.fr"
              linkName={t('project.project_5.btn')}
              techno="Javascript, React.js, Redux"
            />
          </Container>
          <div className="btn-lang">
            <button onClick={() => i18n.changeLanguage('fr')}>
              <img src={flag_fr} alt="lang_fr" />
            </button>
            <button onClick={() => i18n.changeLanguage('en')}>
              <img src={flag_uk} alt="lang_fr" />
            </button>
          </div>
        </Layout>
        <ScrollButton />
      </div>
    </Suspense>
  )
}

export default Projects
