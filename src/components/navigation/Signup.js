import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { newUser } from '../../actions/actions'
import AlertMessage from '../littleHelpers/AlertMessage';


function Signup (props) {
    const [showMessage, setMessage] = useState(false);
    const [values, setValues] = useState({
        name: '',
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
        setMessage(true);
        const newUser = {
            user: values}
       props.newUser(newUser)
    }

    
        return (
            <div className="formDiv">
                {showMessage && <AlertMessage message={props.alert.message} variant={props.alert.variant}/> }
            <div className="formDiv">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange} />
                         <Form.Text className="text-muted">
                        Use whatever name you like.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        value={values.email}
                        onChange={handleInputChange} />
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
                        value={values.password}
                        onChange={handleInputChange} />
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

const mapStateToProps = ({alert}) => {
    console.log(alert)
    return ( {alert: alert })
}

export default connect(mapStateToProps, {newUser})(Signup)