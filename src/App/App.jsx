import React, { useState, useEffect } from 'react'
import FlexV3Grow from './Components/layout/FlexV3Grow/FlexV3Grow'
import Header from './Components/ui/Header/Header'
import NavBar from './Components/ui/NavBar/NavBar'
import FlexH1Grow from './Components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm from './Components/MemeForm/MemeForm'
import Footer from './Components/ui/Footer/Footer'
import datas from './db.json'
const appInitialState = {
  images: [],
  memes: [],
  current: emptyMeme
}

const App = () => {
  const [state, setState] = useState(appInitialState)
  useEffect(() => {
    setState({ ...state, ...datas });

  }, [])
  console.log(datas);
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar></NavBar>
        <FlexH1Grow>
          <MemeSVGViewer
            meme={state.current}
            image={state.images.find(img => {
              return img.id === state.current.imageId
            })}
            basePath=''>
          </MemeSVGViewer>
          <MemeForm onMemeChange={(meme)=>{
            setState({...state,current:meme})
          }}
          images={datas.images} 
          current={state.current} ></MemeForm>
        </FlexH1Grow>
        <Footer></Footer>
      </FlexV3Grow>
    </div>
  )
}

export default App