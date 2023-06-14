import { MemeSVGViewer } from "orsys-tjs-meme";
import {useSelector} from 'react-redux';
export const MemeSvgViewer = (props) => {
  const storeProps = useSelector(storeState => (
    {
      meme: storeState.current,
      image: storeState.ressources.images.find(img => img.id === storeState.current.imageId)
    }
  ))


  return (
    <MemeSVGViewer
      {...props}
      {...storeProps}
    />)
}