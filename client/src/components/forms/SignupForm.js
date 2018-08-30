import React from 'react'
import {FormGroup,ControlLabel,HelpBlock,FormControl,Button,PageHeader} from 'react-bootstrap'


class SignupForm extends React.Component{
    state={
        data:{
            username:'',
            password:''
        },
        loading:false,
        errors:{}
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.data.username)
    }
    
    getValidationState() {
        // const length = this.state.value.length;
        // if (length > 10) return 'success';
        // else if (length > 5) return 'warning';
        // else if (length > 0) return 'error';
        // return null;
    }

    onSubmit=(e)=>{
        e.preventDefault()
        
    }

    render(){
        return(
        <form onSubmit={this.props.submit}>

        <PageHeader>Join our community</PageHeader>

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Username</ControlLabel>
        <FormControl
        type="text"
        name='username'
        value={this.state.value}
        placeholder="TheLegend27"
        onChange={this.onChange}
        />
        <ControlLabel>Password</ControlLabel>
        <FormControl
            type="text"
            name='password'
            value={this.state.value}
            placeholder="password"
            onChange={this.onChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        <Button bsSize='large'>Submit</Button>
        </FormGroup>


        </form>
        )
    }
}

export default SignupForm