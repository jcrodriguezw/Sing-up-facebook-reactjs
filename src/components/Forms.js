import React from 'react'
import Container_personal from './Container_personal'
import Container_gender from './Container_gender'
import Container_birthday from './Container_birthday'

const Forms = props => {
    return(
        <form className='registry_form'> 

            < Container_personal  
                valor_firstname={props.valor_firstname}                 
                valor_lastname={props.valor_lastname}                
                valor_email={props.valor_email}                
                valor_confirmemail={props.valor_confirmemail}                
                valor_password={props.valor_password}                
                valor_gender={props.valor_gender}               
                valor_birthday_month={props.valor_birthday_month}                
                valor_birthday_day={props.valor_birthday_day}                
                valor_birthday_year={props.valor_birthday_year}

                change_firstname={props.change_firstname}
                change_lastname={props.change_lastname}                
                change_email={props.change_email}
                change_confirmemail={props.change_confirmemail}
                change_password={props.change_password}
                change_gender={props.change_gender}
                change_birthday_month={props.change_birthday_month}
                change_birthday_day={props.change_birthday_day}
                change_birthday_year={props.change_birthday_year} 
            />

            <Container_gender 
                valor_gender={props.valor_gender} 
                change_gender={props.change_gender}
            />

            <Container_birthday 
                valor_birthday_month={props.valor_birthday_month} 
                change_birthday_month={props.change_birthday_month}
                valor_birthday_day={props.valor_birthday_day} 
                change_birthday_day={props.change_birthday_day}
                valor_birthday_year={props.valor_birthday_year} 
                change_birthday_year={props.change_birthday_year}
            />
        
    </form>
    )
}

export default Forms;