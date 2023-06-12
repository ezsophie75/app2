import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=> {
    console.log(props);
    return (
        <button style={{...props.style,backgroundColor:props.bgColor}}  type={props.type} className={style.Button} onClick={(evt)=>{
            if (undefined !== props.onclick && typeof props.onclick === 'function'){
            props.onclick();
            }
    }}>
        {props.children}
    </button>
    );
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button','reset','submit']).isRequired,
    onclick:PropTypes.func.isRequired,
    style:PropTypes.object
}
Button.defaultProps={
    type:'button',
    onclick:()=>{console.log('coucou')}
}
export default Button