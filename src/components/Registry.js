import React from 'react'

import datos from './datos'
import Forms from './Forms'
import Lista from './Lista'



class Registry extends React.Component {

    constructor(){
        super();

        this.state={
            datos
        }

        this.save = this.save.bind(this)    
        this.change_firstname = this.change_firstname.bind(this) 
        this.change_lastname = this.change_lastname.bind(this) 
        this.change_email = this.change_email.bind(this) 
        this.change_confirmemail = this.change_confirmemail.bind(this) 
        this.change_password = this.change_password.bind(this)  
        this.change_gender = this.change_gender.bind(this)  
        this.change_birthday_month = this.change_birthday_month.bind(this)
        this.change_birthday_day = this.change_birthday_day.bind(this)
        this.change_birthday_year = this.change_birthday_year.bind(this)        
    }

    save(e) { 
        
        if(this.state.valor_firstname == null | this.state.valor_firstname == '' ) {            
            alert('The firstname is required')
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname == null | 
            this.state.valor_lastname == '' ) {            
            alert('The lastname is required')
            return false
        } 
        else if (
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email == null | 
            this.state.valor_email == '') {
            alert('The email address is required')   
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail == null | 
            this.state.valor_confirmemail == '' | this.state.valor_confirmemail !== this.state.valor_email) {
            alert('Please confirm the email address')
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail !== null && 
            this.state.valor_password == null | 
            this.state.valor_password == '') {
            alert('Please enter the password')    
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail !== null && 
            this.state.valor_password !== null && 
            this.state.valor_gender == null | 
            this.state.valor_gender == '' ) {
            alert('Enter a gender')        
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail !== null && 
            this.state.valor_password !== null && 
            this.state.valor_gender !== null && 
            this.state.valor_birthday_month == '' ) {
            alert('What is your birthday month')       
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail !== null && 
            this.state.valor_password !== null && 
            this.state.valor_gender !== null && 
            this.state.valor_birthday_month !== null && 
            this.state.valor_birthday_day == '') {
            alert('What is your birthday day')   
            return false
        } 
        else if(
            this.state.valor_firstname !== null && 
            this.state.valor_lastname !== null &&  
            this.state.valor_email !== null && 
            this.state.valor_confirmemail !== null && 
            this.state.valor_password !== null && 
            this.state.valor_gender !== null && 
            this.state.valor_birthday_month !== null && 
            this.state.valor_birthday_day !== null &&   
            this.state.valor_birthday_year == '') {
            alert('What is your birthday year') 
            return false
        }  
        else {
            alert('Bienvenido ' + this.state.valor_firstname + ' ' + this.state.valor_lastname)
        }


        return(
            this.setState({
                datos : this.state.datos.concat([
                    {firstname: this.state.valor_firstname,
                    lastname: this.state.valor_lastname,
                    email:this.state.valor_email,
                    confirmemail: this.state.valor_confirmemail,
                    password: this.state.valor_password,
                    gender: this.state.valor_gender,
                    birthday_month:this.state.valor_birthday_month,
                    birthday_day: this.state.valor_birthday_day,
                    birthday_year: this.state.valor_birthday_year
                    }
                ]), 
                valor_firstname:'',
                valor_lastname:'',
                valor_email:'',
                valor_confirmemail:'',
                valor_password:'',
                valor_gender:'',
                valor_birthday_month: '',
                valor_birthday_day:'',
                valor_birthday_year:''
                
             })
        )
        
    }
    
    change_firstname(e){
        return(
            this.setState({
                valor_firstname:e.target.value
            })
        )
    }
    change_lastname(e){
        return(
            this.setState({
                valor_lastname:e.target.value
            })
        )
    }
    change_email(e){
        return(
            this.setState({
                valor_email:e.target.value
            })
        )
    }
    change_confirmemail(e){
        return(
            this.setState({
                valor_confirmemail:e.target.value
            })
        )
    }
    change_password(e){
        return(
            this.setState({
                valor_password:e.target.value
            })
        )
    }
    change_gender(e) {
        return(
            this.setState({
                valor_gender: e.target.value
            })
        )
    }
    change_birthday_month(e) {
        return(
            this.setState({
                valor_birthday_month: e.target.value
                
            })
        )
    }
    change_birthday_day(e) {
        return(
            this.setState({
                valor_birthday_day: e.target.value
                
            })
        )
    }
    change_birthday_year(e) {
        return(
            this.setState({
                valor_birthday_year: e.target.value
            })
        )
    }


    render() {
        const usuarios = this.state.datos.map((datos,i) => <Lista key = {i} datos={datos}/>)
        return(
            <div className='registry_container'>
                <div className='registry_container_title'>
                    <h1> <strong> Create a New Account </strong> </h1>
                    <h2> It’s free and always will be. </h2>
                </div>

                <Forms 
                    valor_firstname={this.state.valor_firstname} 
                    valor_lastname={this.state.valor_lastname}                
                    valor_email={this.state.valor_email}                
                    valor_confirmemail={this.state.valor_confirmemail}                
                    valor_password={this.state.valor_password}                
                    valor_gender={this.state.valor_gender}               
                    valor_birthday_month={this.state.valor_birthday_month}                
                    valor_birthday_day={this.state.valor_birthday_day}                
                    valor_birthday_year={this.state.valor_birthday_year}

                    change_firstname={this.change_firstname}
                    change_lastname={this.change_lastname}                
                    change_email={this.change_email}
                    change_confirmemail={this.change_confirmemail}
                    change_password={this.change_password}
                    change_gender={this.change_gender}
                    change_birthday_month={this.change_birthday_month}
                    change_birthday_day={this.change_birthday_day}
                    change_birthday_year={this.change_birthday_year}                  
                />           

                <p> Why do I need to provide my birthday? </p>

                <button type='submit' onClick={this.save} > Create Account </button>

                <p> By clicking Create Account, you agree to our Terms and that you have read our Data Policy, 
                including our Cookie Use. You may receive SMS Notifications from Facebook and can opt out at any time. </p>
            </div>
        )
    }
}

export default Registry;