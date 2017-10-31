import React from 'react'
import dayslist from './dayslist'

const Container_birthday_day = props => {
    return(
        <select className='birthday_select' value={props.valor_birthday_day} onChange={props.change_birthday_day} >
            <option selected> day</option>
            {dayslist.map((dayslist,i) => <option key={i}> {dayslist} </option>)}

        </select>
    )
}

export default Container_birthday_day;