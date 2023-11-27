import React from "react";

import { Header } from './Components'
import {Generate} from './Container'


import { useLocation } from 'react-router-dom'



const Story = () => {

  const location = useLocation();

    const responseData = location.state?.responseData;
    console.log('Data from location state:', responseData);

    const sid = responseData?.sid || 'Default SID';
    const title = responseData?.title || 'Default Title';
    const story = responseData?.story || 'Default Story';

    const storyLines = story.split('\\n\\n');
    console.log(storyLines)


  return (
    <div className="App">
      <div className="gradient_bg">
        <Header title={title}/>
      </div>
      <Generate sid={sid} story={storyLines}/>
    </div>
  )
}

export default Story