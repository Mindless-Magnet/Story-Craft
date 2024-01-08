import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios';
import divider from '../../assets/divider.svg';
import './tryitout.css';

const MyForm = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    textInput: '',
    fileInput: null,
    perspective: 'first', // Default perspective
  });

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      textInput: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      fileInput: e.target.files[0],
    });
  };

  const handlePerspectiveChange = (e) => {
    setFormData({
      ...formData,
      perspective: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
        prompt: formData.textInput,
        person: formData.perspective,

    };

    try {
      setLoading(true)
      const response = await axios.post('http://localhost:8000/story/generate/', formDataToSend);
      navigate('/story', { state: { responseData: response.data } });
      

      setFormData({
        textInput: '',
        fileInput: null,
        perspective: 'first', // Reset perspective to default after submission
      });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call your function here
      handleSubmit(e);
    }
  };

  return (
    <div className='landing__tryitout-main section__padding' id='try'>
      <div className="landing__tryitout">
      
        <div className="landing__tryitout-heading">
          <h1>TRY STORY CRAFT</h1>
          <img src={divider} alt='divider' />
          <h1>Let's Build Your Story</h1>
        </div>
        {loading && (
        <SpinnerCircular size={100} thickness={100} speed={100} color='#C0B7E8' secondaryColor='#8176AF'/>
      )}
      {!loading && (
        <form className="landing__tryitout-Form" onSubmit={handleSubmit}>
          <div className="landing__tryitout-Form_perspective">
            <label>
              <input
              className='landing__tryitout-Form_perspective-first'
                type="radio"
                value="first"
                checked={formData.perspective === 'first'}
                onChange={handlePerspectiveChange}
              />
              First Person
            </label>
            <label>
              <input
              className='landing__tryitout-Form_perspective-third'
                type="radio"
                value="third"
                checked={formData.perspective === 'third'}
                onChange={handlePerspectiveChange}
              />
              Third Person
            </label>
          </div>
          <label className="landing__tryitout-Form_text-form-label">
            Start Your Story
            <input
              type="text"
              value={formData.textInput}
              onChange={handleTextChange}
              onKeyPress={handleKeyPress}
              className="landing__tryitout-Form_text-input"
            />
          </label>

          <h1>OR</h1>

          <label className="landing__tryitout-Form_image-form-label">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="landing__tryitout-Form_file-input"
            />
          </label>

          <button type="submit" className="landing__tryitout-Form_submit-button">
            <h4>SEND TO STORY CRAFT</h4>
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

export default MyForm;
