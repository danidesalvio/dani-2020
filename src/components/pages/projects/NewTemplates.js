import React from 'react';
import { Container } from 'semantic-ui-react';

const NewTemplates = () => (
    <>
    <div class="image-header work">
        <h1>New Website Templates</h1>
        <div class="img-overlay"></div>
    </div>
    
    <Container>
        <div class="video-wrapper"> 
            <div className='get-funky'></div>    
            <div class="left">

            </div>
            <div class="right">
                <h2>Problem Solved:</h2>
                <h5> The website templates that clients chose from were very outdated. Designers were asked to individually design and develop 2 complete website templates within 2 months. The product needed to be
                    100% customizable, easy to use by clients, and look modern.
                     I ended up creating 3 templates within the deadline. The final one I created, being the template that most agent's chose after launching the new designs. </h5>

                <h3>My process:</h3>
                <h5>1. Discussions with CEO regarding what is most important to see on homepages and the look he was going for.</h5>
                <h5>2. Research modern designs and then create individual high fidelity mockups.</h5>
                <h5>3. Once approved by CEO, develop the template completely including every page of the website.</h5>
                <h5>4. Test for any issues that arise due to screen size, change in browsers, or other.</h5>
                <h5>5. Work with remote developer's to push template live.</h5>
            </div>
        </div>
    </Container>

    </>
)

export default NewTemplates;