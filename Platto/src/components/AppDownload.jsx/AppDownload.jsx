import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
   <div className="app-download" id='app-download'>
      <p>
        Enjoy a better food experience<br /> Get Platto Now
      </p>

      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  )
}

export default AppDownload