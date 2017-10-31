import React from 'react'

const Lista = props => {
    return(
        <p> {props.datos.firstname} {props.datos.lastname} {props.datos.email} {props.datos.confirmemail} {props.datos.password} {props.datos.gender} {props.datos.birthday_month} {props.datos.birthday_day} {props.datos.birthday_year} </p>
    )
}

export default Lista;