import React, { useState, useEffect } from 'react'
import FlexV3Grow from './Components/layout/FlexV3Grow/FlexV3Grow'
import Header from './Components/ui/Header/Header'
import NavBar from './Components/ui/NavBar/NavBar'
import FlexH1Grow from './Components/layout/FlexH1Grow/FlexH1Grow'
import  { MemeFormStoredConnected } from './Components/MemeForm/MemeForm'
import Footer from './Components/ui/Footer/Footer'
import datas from './db.json'
import { MemeSvgViewer } from './Components/ui/MemeSvgViewer/MemeSvgViewer'
import {
  Routes,
  Route,
  useParams,
  useLocation
} from 'react-router-dom'
import Editor from './pages/editor' 
import MemeThumbnail, { MemeThumbnailStoreConnected } from './Components/ui/MemeThumbnail/MemeThumbnail'

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
        <Routes>
          <Route path='/' element={<div><h1>Bonjour à tous</h1></div>}/>
          <Route path='/thumbnail' element ={<MemeThumbnailStoreConnected/>}/>
          <Route path='/meme' element ={<Editor/> } />
          <Route path='/meme/:id' element ={<Editor/> } />
        </Routes>
        <Footer></Footer>
      </FlexV3Grow>
    </div>
  )
}

export default App