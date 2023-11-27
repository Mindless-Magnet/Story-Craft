import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './Landing_Page/landing_page';
import Story from './Story_page/story_page';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/story" element={<Story />} />          
        </Routes>
      </Router>
    );
  }
  
  export default App;