import React from 'react';
import './brand.css'

import img2 from '../../assets/img2.png'
import rightarrow from '../../assets/component1.png'

const Brand = () => {
  return (
    <div className='landing__Brand section__padding' id='wsc'>
      <div className="landing__Brand-Introduction">
        <div className='landing__Brand-Introduction_heading'>
          <h1>INTRODUCTION</h1>
          <h1>TO STORY CRAFT</h1>
          <img src={rightarrow} alt="rightarrow" />
        </div>
        <div className='landing__Brand-Introduction_content'>
          <p> Story Craft is a story generation app made for children. We use various Generative AI tools to make this possible. We generate stories based on your text or image prompts. We also generate images related to the story. We also make sure that all our stories are child friendly and includes morals for the child's growth.  
          </p>
        </div>
      </div>
      <div className="landing__Brand-About">
        <div className="landing__Brand-About_image">
          <img src={img2} alt="brandimage" />
        </div>
        <div className="landing__Brand-About_content">
          <h1>ABOUT</h1>
          <h1>STORY CRAFT</h1>
          <p>Story Craft's mission is to bring your stories and hero's to life. You can tell us your hero's name and image so that we can bring them to life for you. You can talk to them and ask them anything you feel like.
          </p>
          <p>Our app employs GPT-3.5 for crafting compelling stories, Stability AI for generating images, Cocqui for text-to-speech functionality, and Salesforce for image captioning. This synergy of technologies aims to provide a straightforward yet immersive storytelling experience for children, combining advanced narrative generation, visual elements, voice synthesis, and contextual image understanding. This integration ensures a seamless and enriching platform, fostering both creativity and learning.</p>
          <a href="#try"><button type='button'>TRY IT OUT</button></a>
        </div>
      </div>
      <div className="landing__Brand-Why">
        <div className='landing__Brand-Why_heading'>
          <h1>WHY USE</h1>
          <h1>STORY CRAFT?</h1>
          <img src={rightarrow} alt="rightarrow" />
        </div>
        <div className='landing__Brand-Why_content'>
          <p>In a world saturated with mindless scrolling and content overload, Story Craft stands out as a beacon of meaningful engagement for kids. Rather than succumbing to endless streams of digital noise, our app offers a purposeful escape into a realm of captivating storytelling. With GPT-3.5 crafting enriching narratives, Stability AI providing visually stimulating images, Cocqui lending natural voices, and Salesforce adding insightful image captions, Story Craft becomes a curated space for imaginative exploration. It empowers kids to shift from passive consumption to active participation, sparking creativity and instilling valuable lessons in a way that resonates beyond the screen. Choose Story Craft for a mindful and transformative digital experience.
          </p>
        </div>
      </div>
    </div>
  )     
}

export default Brand;