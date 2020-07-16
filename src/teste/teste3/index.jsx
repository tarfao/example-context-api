import React from 'react'
import MyContext from '../../context';

export default props => {
    return (
        <MyContext.Consumer>
            {prop => {
                const changeValue = () => {
                    const { updateValue } = prop;
                    if(prop.state.msg === 'Olá mundo!'){
                        updateValue('msg','Hello World!');
                    } else {
                        updateValue('msg','Olá mundo!');
                    }
                }
                return (
                    <>
                        <div>{prop.state.msg}</div>
                        <button onClick={changeValue}>Change children {prop.state.msg} 2 and 1</button>
                    </>
                )
            }}
        </MyContext.Consumer>
    )
}