import React, {useState} from 'react'

import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';

import './generate.css'


const Generate = ({sid, story}) => {


    const img = `assets/image/${sid}.png`;   
    const soundSource = `assets/audio/${sid}.wav`;

    console.log(soundSource)

    const [loading, setLoading] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
          try {
            setLoading(true)
            const datatosend = {
                session_id : 0,
                story_id : parseInt(sid, 10),
                question : inputValue
            };
            console.log(datatosend);

            // Assuming you have a backend endpoint to handle the data
            const response = await axios.post('http://localhost:8000/story/question/',
              datatosend
            );
    
            console.log('Backend response:', response.data);
            var element = document.querySelector('.QA');

            if (element) {
              var newChild = document.createElement('div');
              newChild.classList.add('qa_new');
              
              var newQuestion = document.createElement('p');
              
              newQuestion.textContent = `Question : ${datatosend.question}`;      
              
              newChild.appendChild(newQuestion);


              var newAnswer = document.createElement('p');

              newAnswer.textContent = `Answer : ${response.data.response}`;      

              newChild.appendChild(newAnswer);

              element.appendChild(newChild);
            }
            
            
            setInputValue('');
            setLoading(false)
          } catch (error) {
            console.error('Error sending data to the backend:', error.message);
            setLoading(false)
          }
        }
      };

      const handleChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    <div className='story__generate section__padding'>
     <div className='story__generate-block1'>   
        <div className="story__generate-image">
            <img src={img} alt="cover" />
        </div>
        <div className="story__generate-content">
            <div className="story__generate-content_story">
            {story.map((line, index) => (
            <React.Fragment key={index}>
                <p>{line}</p>
                <br />
                <br />
            </React.Fragment>
            ))}
            </div>            
        </div>
    </div>
        <div className="story__generate-controls">
            <div className='story__generate-controls_audio'>
                <audio controls>
                    <source src={soundSource} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="story__generate-controls_ask">
                <div className='QA'></div>
                <div className="ask_loading">
                <input type="text" 
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder='Ask a Question' />
                {loading && (
                  <SpinnerCircular size={80} thickness={100} speed={100} color='#C0B7E8' secondaryColor='#8176AF'/>
                )}
                </div>
            </div>

        </div>

    </div>
  )
}

export default Generate