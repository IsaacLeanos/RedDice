import React from 'react'
// import{Link}from'react-router-dom'
import{Grid,Row,Col}from'react-bootstrap'
import NavigationBar from './NavigationBar'
import SignupForm from './forms/SignupForm'

class Signup extends React.Component{
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

export default Signup