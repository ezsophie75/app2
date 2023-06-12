import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=> {
    console.log(props);
    return (<button type={props.type} className={style.Button} onClick={(evt)=>{
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
    onclick:PropTypes.func.isRequired
}
Button.defaultProps={
    type:'button',
    onclick:()=>{console.log('coucou')}
}
export default Button