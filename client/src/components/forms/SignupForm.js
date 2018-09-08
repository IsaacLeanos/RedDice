import React from 'react'
import {FormGroup,ControlLabel,HelpBlock,FormControl,Button,PageHeader} from 'react-bootstrap'
import timezones from '../../data/timezones'
import{map}from'lodash'
import{Redirect}from'react-router-dom'


class SignupForm extends React.Component{
    state={
        data:{
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            timezone:''
        },
        loading:false,
        errors:{}
    }

    onChange=(e)=>{
        this.setState({data:{...this.state.data,[e.target.name]:e.target.value}})  
    }

    // getValidationState=()=>{
    //     let length=
    // }
   
    //v a l i d a t i o n

    onSubmit=(e)=>{
        e.preventDefault()
        let errors=this.validate()
        this.setState({errors:errors})
        if(Object.keys(errors).length===0){
            this.setState({loading:true})
            this.props.submit(this.state.data).then(()=>{
                // this.props.history.push('/')
                console.log('good to go')
            })
        }else{
            console.log('errors')
        }
    }

    validate=()=>{
        const{username,email,password,confirmPassword}=this.state.data
        let errors={}
        if(username.length<6) errors.username='username must have at least 6 characters'
        if(email.length<6) errors.email='must include a valid email'
        if(password.length<2&&password!==confirmPassword) errors.password='password must be at least 2 characters and match confirmPassword field'
        if(confirmPassword!==password) errors.confirmPassword='password must match confirmPassword field'
        return errors    
    }

    getValidationState(controlId) {
        if(controlId==='username'){

            const length = this.state.data.username.length;
            if (length > 10) return 'success';
            else if (length > 5) return 'warning';
            else if (length > 0) return 'error';
            return null;

        }else if(controlId==='email'){
            // if(!Validator.isEmail(data.email))

            const length = this.state.data.email.length;
            if (length > 10) return 'success';
            else if (length > 5) return 'warning';
            else if (length > 0) return 'error';
            return null;

        }
      }
      
    render(){
        const options=map(timezones,(val,key)=>
            <option key={val} val={val}>{key}</option>  //try without lodash
        )
        const{errors,loading}=this.state
        return(
        <form onSubmit={this.onSubmit}>

        <PageHeader>Join our community</PageHeader>

        <FormGroup controlId="username" validationState={this.getValidationState('username')}>
        <ControlLabel>Username</ControlLabel>
        <FormControl
        type="text"
        name='username'
        value={this.state.data.username}
        onChange={this.onChange}
        />
        <FormControl.Feedback />
        {errors.username&&<HelpBlock>{errors.username}</HelpBlock>}
        </FormGroup>

        <FormGroup controlId="email" validationState={this.getValidationState('email')}>
        <ControlLabel>Email</ControlLabel>
        <FormControl
        type="text"
        name='email'
        value={this.state.data.email}
        placeholder="mail@mail.com"
        onChange={this.onChange}
        />
        <FormControl.Feedback />
        {errors.email&&<HelpBlock>{errors.email}</HelpBlock>}
        </FormGroup>


        <FormGroup controlId="formBasicText">
        <ControlLabel>Password</ControlLabel>
        <FormControl
            type="text"
            name='password'
            value={this.state.data.password}
            placeholder="password"
            onChange={this.onChange}
        />
        <FormControl.Feedback />
        {errors.password&&<HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>

        <FormGroup controlId="formBasicText">
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
            type="text"
            name='confirmPassword'
            value={this.state.data.confirmPaswword}
            placeholder="password"
            onChange={this.onChange}
        />
        <FormControl.Feedback />
        {errors.confirmPassword&&<HelpBlock>{errors.confirmPassword}</HelpBlock>}
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Timezone</ControlLabel>
        <FormControl componentClass="select" placeholder="select" name="timezone" onChange={this.onChange}
        value={this.state.data.timezone}>
            <option value="" disabled >Choose your timezone</option>
            {options}
        </FormControl>
        </FormGroup>

        <Button type='submit' bsStyle='primary'>Submit</Button>

        </form>
        )
    }
}

export default SignupForm

