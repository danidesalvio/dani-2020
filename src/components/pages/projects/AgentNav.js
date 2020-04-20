import React from 'react';
import { Container } from 'semantic-ui-react';

const AgentNav = () => (
    <>
    <div class="image-header work">
        <h1>Real Estate Agent Navigation</h1>
        <div class="img-overlay"></div>
    </div>
    
    <Container>
        <div class="video-wrapper"> 
            <div className='get-funky'></div>    
            <div class="left">

            </div>
            <div class="right">
                <h2>Problem Solved:</h2>
                <h5> Huge demand by clients for customized navigations that included all of their information in order for ease of contacting and rememberance.</h5>

                <h3>My process:</h3>
                <h5>1. Asking our clients and CEO what the most important information to display is.</h5>
                <h5>2. Figure out a way to display information in the small space of a navigation.</h5>
                <h5>3. Design and develop the solution, and test if agents are satisfied.</h5>
            </div>
        </div>
    </Container>

    </>
)

export default AgentNav;