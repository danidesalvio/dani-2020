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
        <h4>The past 2.5 years I worked as a web designer and front end developer for Real Estate tech company. </h4>
        <h4>
          I wore a lot of hats at this company, but the two main things I focused on were to design and build customized client websites and improve internal products.
          I created and built three templates within 2 months, that thousands of clients have chosen to use as their base websites. I trained new designers hired on, as well
          as taught the parent company's design team new coding skills and good practices - which led to increased productivity. 
        </h4>
        
      </div>
    </Container>

      <div className='project-grid'>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${homeValue})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design - Figma</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${aves})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Design & Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

        <div className='project'>
          <div className='project-img' style={{backgroundImage: `url(${kass})`}}></div>
          
          <div className='hover-state'>
            <div className='project-info'>
              <h2>Develop</h2>
              <button className='btn-light'>View</button>
            </div>
          </div>
        </div>

      </div>

      <p class="disclaimer">* Websites shown above are editable by clients and may not reflect original design or site build.</p>
    
   
  </>
  
)

export default CaseStudies;