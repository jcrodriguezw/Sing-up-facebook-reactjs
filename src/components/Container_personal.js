import React from 'react'

const Container_person = props => {
    return(
        <div>           
            <div>
                <label> FirstName :  </label>
                <input type='text' value={props.valor_firstname} onChange={props.change_firstname} />
            </div>
            <div>
                <label> LastName :  </label>
                <input type='text'value={props.valor_lastname} onChange={props.change_lastname}/>
            </div>
            <div>
                <label> Email :  </label>
                <input type='email'value={props.valor_email} onChange={props.change_email}/>
            </div>
            <div>
                <label> Confirm Email :  </label>
                <input type='email' value={props.valor_confirmemail} onChange={props.change_confirmemail}/>
            </div>
            <div>
                <label> New Password :  </label>
                <input type='password'value={props.valor_password} onChange={props.change_password}/>
            </div>
        </div>
    )
}
export default Container_person