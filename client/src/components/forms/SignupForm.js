import React from 'react'
import {FormGroup,ControlLabel,HelpBlock,FormControl,Button,PageHeader} from 'react-bootstrap'
import timezones from '../../data/timezones'
import{map}from'lodash'


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
        console.log(this.state.data.username)
    }
    
    getValidationState(){
        const length=this.state.data.password.length
        if (length>6) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    //v a l i d a t i o n

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.submit(this.state.data)
    }

    render(){
        const options=map(timezones,(val,key)=>
            <option key={val} val={val}>{key}</option>
        )
        
        return(
        <form onSubmit={this.onSubmit}>

        <PageHeader>Join our community</PageHeader>

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Username</ControlLabel>
        <FormControl
        type="text"
        name='username'
        value={this.state.data.username}
        placeholder="TheLegend27"
        onChange={this.onChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Email</ControlLabel>
        <FormControl
        type="text"
        name='email'
        value={this.state.data.email}
        placeholder="mail@mail.com"
        onChange={this.onChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>


        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Password</ControlLabel>
        <FormControl
            type="text"
            name='password'
            value={this.state.data.password}
            placeholder="password"
            onChange={this.onChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
            type="text"
            name='confirmPassword'
            value={this.state.data.confirmPaswword}
            placeholder="password"
            onChange={this.onChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Timezone</ControlLabel>
        <FormControl componentClass="select" placeholder="select" name="timezone" onChange={this.onChange}
        value={this.state.data.timezone}>
            <option value="" disabled >Choose your timezone</option>
            {options}
        </FormControl>
        </FormGroup>

        <Button bsStyle='primary'>Submit</Button>

        </form>
        )
    }
}

export default SignupForm