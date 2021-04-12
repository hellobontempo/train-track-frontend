import React from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { userSignUp } from '../../actions/actions'


class Signup extends React.Component {


    state = {
        name: "",
        email: "",
        password: "",

    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div className="formDiv">
            <div className="formDiv">
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                         <Form.Text className="text-muted">
                        User whatever name you like.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="password"
                        placeholder="Enter password" 
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                        Make it a good one.
                        </Form.Text>
                    </Form.Group>
                    <Form.Control type="submit" value="Sign up"/>
                </Form>
            </div>
            </div>
        )
    }
}


export default connect(null, {userSignUp})(Signup)