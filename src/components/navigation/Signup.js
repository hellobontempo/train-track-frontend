import React from 'react'


class Signup extends React.Component {


    state = {
        name: "",
        email: "",
        password: "",

    }
    render(){
        return (
            <div className="formDiv">
                <form className="form">
                    <input 
                    className="form-control"
                    name="name" 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                    <input 
                    className="form-control"
                    name="email" 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
                    <input 
                    className="form-control"
                    name="password" 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                    <input 
                    className="form-control"
                    type="submit" 
                    value="Sign Up"/>
                </form>
            </div>
        )
    }
}


export default Signup