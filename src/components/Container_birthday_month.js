import React from 'react'
import monthlist from './monthlist'

const Container_birthday_month = props => {
    return(
        <div className='container_birthday_month'>
            <label> Birthday : </label>
            <select className='birthday_select' valor_birthday_month={props.valor_birthday_month} change_birthday_month={props.change_birthday_month} >
                <option  selected> Month </option>
                {monthlist.map((monthlist,i) => <option key={i}>{monthlist} </option>)}
            </select>
        </div>
    )
}

export default Container_birthday_month;