import React from 'react'
import Container_birthday_month from './Container_birthday_month'
import Container_birthday_day from './Container_birthday_day'
import Container_birthday_year from './Container_birthday_year'

const Container_birthday = props => {
    return(
        <div  className='birthday'>
            <Container_birthday_month 
                valor_birthday_month={props.valor_birthday_month} 
                change_birthday_month={props.change_birthday_month}
            />

            <Container_birthday_day 
                valor_birthday_day={props.valor_birthday_day} 
                change_birthday_day={props.change_birthday_day}
            />

            < Container_birthday_year 
                valor_birthday_year={props.valor_birthday_year} 
                change_birthday_year={props.change_birthday_year}
            />
    </div>
    )
}
export default Container_birthday;