import React from "react";

import { Tryitout, Features, Tech, Header} from './containers'
import { Brand, CTA, Navbar} from './components'
import './landing_page.css'
const Landing = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <CTA/>
      <Brand />
      <Tech/>
      <Features/>
      <Tryitout/>
    </div>
  )
}

export default Landing;