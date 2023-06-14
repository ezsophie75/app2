import React, { useState, useEffect } from 'react'
import FlexV3Grow from './Components/layout/FlexV3Grow/FlexV3Grow'
import Header from './Components/ui/Header/Header'
import NavBar from './Components/ui/NavBar/NavBar'
import FlexH1Grow from './Components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm, { MemeFormStoredConnected } from './Components/MemeForm/MemeForm'
import Footer from './Components/ui/Footer/Footer'
import datas from './db.json'
import store from './store/store'
import { MemeSvgViewer } from './Components/ui/MemeSvgViewer/MemeSvgViewer'
const appInitialState = {
  images: [],
  memes: [],
  current: emptyMeme
}

const App = () => {
  
  useEffect(() => {
//store.dispatch(fetchAllRessources())
  }, [])
  console.log(datas);
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar></NavBar>
        <FlexH1Grow>
          <MemeSvgViewer
            basePath=''/>
          <MemeFormStoredConnected></MemeFormStoredConnected>
        </FlexH1Grow>
        <Footer></Footer>
      </FlexV3Grow>
    </div>
  )
}

export default App