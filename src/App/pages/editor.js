import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { MemeSvgViewer } from '../Components/ui/MemeSvgViewer/MemeSvgViewer'
import FlexH1Grow from '../Components/layout/FlexH1Grow/FlexH1Grow'
import { MemeFormStoredConnected } from '../Components/MemeForm/MemeForm'
import { update } from '../store/currentSlice'

export default function Editor() {
    const params=useParams()
    const d = useDispatch()
    const memes=useSelector(s=>s.ressources.memes)
    useEffect(()=> {
        if (undefined!==params.id) {
            const toViewMeme=memes.find(m=>m.id===Number(params.id))
            if (undefined===toViewMeme){}
            else {  d(update(toViewMeme))}
        }
    }, [params, memes, d])
  return (
    <FlexH1Grow>
    <MemeSvgViewer
      basePath=''/>
    <MemeFormStoredConnected></MemeFormStoredConnected>
  </FlexH1Grow>
  )
}
