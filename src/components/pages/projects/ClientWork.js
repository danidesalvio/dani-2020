import React from 'react';
import { Container } from 'semantic-ui-react';

const ClientWork = () => (
    <>
    <div class="image-header work">
        <h1>"Baller" Client Websites</h1>
        <div class="img-overlay"></div>
    </div>
    
    <Container>
        <div class="video-wrapper"> 
            <div className='get-funky'></div>    
            <div class="left">

            </div>
            <div class="right">
                <h2>Problem Solved:</h2>
                <h5> Fully custom designed websites for high level clients. A lot of creating new site assets and designs. </h5>

                <h3>My process:</h3>
                <h5>1. Have a design call with client discussing their wants and needs.</h5>
                <h5>2. Design three different options of high fidelity mockups within one week of design call.</h5>
                <h5>3. Develop a trusting relationship with client and get design approved.</h5>
                <h5>4. Code out custom website within 30 days and deliver final product to client.</h5>
            </div>
        </div>
    </Container>

    </>
)

export default ClientWork;