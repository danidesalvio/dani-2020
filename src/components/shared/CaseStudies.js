import React from 'react';
import { Container } from 'semantic-ui-react';
import aves from '../../images/aves-cropped.png';
import kass from '../../images/myway.png';
import homeValue from '../../images/homevalue-mockup.png';


const CaseStudies = () => (
  <>

    <Container>
      <div class="work-section">
        <h2>Recent Work</h2>
        <h4> I worked as a web designer and front end developer for Real Estate tech company. </h4>
        <h4>
          I wore a lot of hats at this company, but the two main things I focused on were to design and build customized client websites and improve internal products. Below are a few of the problems I solved during my time there.
        </h4>
      </div>
    </Container>

      <div className='project-grid'>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${homeValue})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design - Figma</h2>
              <a href='/agent_nav' className='btn-light'>View</a>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${aves})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design & Develop</h2>
              <a href='/template_design' className='btn-light'>View</a>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${kass})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Develop</h2>
              <a href='/client_design' className='btn-light'>View</a>
            </div>
          </div>
        </div>

      </div>
   
  </>
  
)

export default CaseStudies;