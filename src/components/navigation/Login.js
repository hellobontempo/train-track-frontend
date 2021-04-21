import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../../actions/actions'


function Login (props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
  
    const handleInputChange = (e) =>{
        e.persist();
        setValues((values) => ({
            ...values, 
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       props.login(values)
    }

    
        return (
            <div className="formDiv">
            <div className="formDiv">
                <Form onSubmit={handleSubmit}>            
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        value={values.email}
                        onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="password"
                        placeholder="Enter password" 
                        value={values.password}
                        onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Control type="submit" value="Login"/>
                </Form>
            </div>
            </div>
        )
}

const mapStateToProps = ({alert}) => {
    return ( {alert: alert })
}

export default connect(mapStateToProps, {login})(Login)