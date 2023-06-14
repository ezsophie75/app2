import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import {useSelector} from 'react-redux'
import {
  Link
} from 'react-router-dom'

export const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {
      props.memes.map((m, i) =>  <div key={'thumbnail-i'+ i }>
      <Link to={'/meme/' + m.id}>
       <MemeSVGViewer
        meme={m}
        image={props.images.find(im => im.id=== m.imageId)} basePath='' />
        <br/>
        {m.titre}
        </Link> 
    </div>)
  }
  </div>
  )}

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
}
export default MemeThumbnail


export  function MemeThumbnailStoreConnected() {
  const memes=useSelector(s=>s.ressources.memes)
  const images=useSelector(s=>s.ressources.images)
  return (
    <MemeThumbnail memes={memes} images={images}/>
  )
}
