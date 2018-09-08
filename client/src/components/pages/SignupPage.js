import React from 'react'
// import{Link}from'react-router-dom'
import{Grid,Row,Col}from'react-bootstrap'
import NavigationBar from '../navigation/NavigationBar'
import SignupForm from '../forms/SignupForm'
import{connect}from'react-redux'
import{signupRequest}from'../../actions/users'

class SignupPage extends React.Component{

    submit=(data)=>{
        this.props.signupRequest(data)
    }

    render(){
        return(
            <div>
        <NavigationBar/>
        <Grid>
        <Row style={{border:'1px solid red'}} className={'show-grid'}>
            <Col style={{border:'1px solid blue'}} md={4} mdOffset={4}>
            <SignupForm submit={this.submit}/>
            </Col>
        </Row>
        </Grid>
        </div>
        )
    }
}

export default connect(null,{signupRequest})(SignupPage)