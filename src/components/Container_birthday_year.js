import React from 'react'
import yearslist from './yearslist'

const Container_birthday_year = props => {
    return(
        <select className='birthday_select' value={props.valor_birthday_year} onChange={props.change_birthday_year} >
            <option selected> Year</option>
            {yearslist.map((yearslist,i) => <option key={i}>{yearslist} </option>)}     
        </select>
    )
}

export default Container_birthday_year;