import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './MemeForm.module.css';
import { emptyMeme } from 'orsys-tjs-meme';
import Button from '../ui/Button/Button';
export const initialStateMemeForm = emptyMeme
const MemeForm = (props) => {
  const [state, setstate] = useState(initialStateMemeForm)
  useEffect(() => {
    //cmp didmount
    console.log(`composant MemeForm monté`);
    return () => {
      //cleanup
      console.log(`composant MemeForm demonté`);
    };
    
  }, [])
  useEffect(() => {
    setstate(props.current)
  }, [props])
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt) => {
        evt.preventDefault();
        props.onMemeChange(state);
      }} onReset={(evt) => {
        props.onMemeChange(emptyMeme);
      }}>
        <label htmlFor="titre">
          <h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre"
          value={state.titre}
          onChange={(evt) => {
            setstate({ ...state, titre: evt.target.value })
          }} />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image"
          value={state.imageId}
          onChange={(evt) => {
            setstate({ ...state, imageId: Number(evt.target.value) })
          }}
        >
          <option value="-1">No image</option>
          {props.images.map((e, i) => {
            return <option key={`select-image-${i}`} value={e.id}>{e.titre}</option>
          }
          )}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text"
          value={state.text}
          onChange={(evt) => {
            setstate({ ...state, text: evt.target.value })
          }}
        />
        <br />
        <label htmlFor="x">
          <h2 className={style.smallNumber}>x :</h2>
        </label>
        <input className={style.smallNumber} name="x" id="x" type="number"
          value={state.x}
          onChange={(evt) => {
            setstate({ ...state, x: Number(evt.target.value) })
          }}
        />
        <label htmlFor="y">
          <h2 className={style.smallNumber}>y :</h2>
        </label>
        <input className={style.smallNumber} name="y" id="y" type="number"
          value={state.y}
          onChange={(evt) => {
            setstate({ ...state, y: Number(evt.target.value) })
          }}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={style.smallNumber}>color :</h2>
        </label>
        <input name="color" id="color" type="color"
          value={state.color}
          onChange={(evt) => {
            setstate({ ...state, color: evt.target.value })
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={style.smallNumber}>font-size :</h2>
        </label>
        <input className={style.smallNumber} name="fontSize" id="fontSize" type="number" min="0"
          value={state.fontSize}
          onChange={(evt) => {
            setstate({ ...state, fontSize: Number(evt.target.value) })
          }}
        />px<br />
        <label htmlFor="fontWeight">
          <h2 className={style.smallNumber}>font-weight :</h2>
        </label>
        <input className={style.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900"
          value={state.fontWeight}
          onChange={(evt) => {
            setstate({ ...state, fontWeight: evt.target.value })
          }}
        />
        <br />
        <input name="underine" id="underline" type="checkbox"
          checked={state.underline}
          onChange={(evt) => {
            setstate({ ...state, underline: evt.target.checked })
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={style.smallNumber}>underline</h2>
        </label
        >&nbsp;
        <h2 className={style.smallNumber}>/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 className={style.smallNumber}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox"
          checked={state.italic}
          onChange={(evt) => {
            setstate({ ...state, italic: evt.target.checked })
          }}
        />
        <hr />
        <Button type='reset' className="error">Annul</Button>
        <Button type='submit' className="primary">submit</Button>
        <br />
      </form>
    </div>
  );
};

MemeForm.propTypes = {
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
  current: PropTypes.shape({
    id: PropTypes.number,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    underline: PropTypes.bool.isRequired,
    italic: PropTypes.bool.isRequired
  }).isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;
