import { configureStore,combineReducers } from "@reduxjs/toolkit";
import currentReducer, { saveCurrent } from './currentSlice'
import ressourcesReducer, { fetchAllRessources } from './ressourcesSlice'
import { emptyMeme } from "orsys-tjs-meme";
import MemeFormStories from "../Components/MemeForm/MemeForm.stories";

const store= configureStore({
    reducer:combineReducers ({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})
store.dispatch(fetchAllRessources())
//store.dispatch(saveCurrent(emptyMeme))
export default store