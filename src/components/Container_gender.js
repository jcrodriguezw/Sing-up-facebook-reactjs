import React from 'react'

const Container_gender = props => {
    return(
        <div className='container_gender'>
            <label> Gender :  </label>
            <select value={props.valor_gender} onChange={props.change_gender}>
                <option  selected> Gender </option>
                <option> Male </option>
                <option> Female </option>   
            </select>
        </div>
    )
}

export default Container_gender;