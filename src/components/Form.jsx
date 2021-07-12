import React, { useState } from 'react';

const Form = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormSubmitted(true);
    }
    const NameValid = input => {
        if(input.length == 0){
            return false;
        }
        return true;
    }
    const EmailValid = input => {
        if(input.length < 5){
            return false;
        }
        return true;
    }
    const PasswordValid = input => {
        if(input.length < 8){
            return false;
        }
        return true;
    }
    const ConfirmMatch = input => {
        if(input != Password){
            return false;
        }
        return true;
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" name="FirstName" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                    {NameValid(FirstName) ? "" : <p className="text-danger">First name must be at least 2 characters.</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" name="LastName" className="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                    {NameValid(LastName) ? "" : <p className="text-danger">Last name must be at least 2 characters.</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    {EmailValid(Email) ? "" : <p className="text-danger">Email must be at least 5 characters.</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                    {PasswordValid(Password) ? "" : <p className="text-danger">Password must be at least 8 characters.</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="text" name="Confirm" className="form-control" value={Confirm} onChange={(e) => setConfirm(e.target.value)}/>
                    {ConfirmMatch(Confirm) ? "" : <p className="text-danger">Passwords must match.</p>}
                </div>
                <input disabled={!NameValid(FirstName) || !NameValid(LastName) || !EmailValid(Email) || !PasswordValid(Password) || !ConfirmMatch(Confirm)} type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            <hr />
            {
                formSubmitted ? 
                <>
                <h3>Your Form Data</h3>
                <h4>First Name: {FirstName}</h4>
                <h4>Last Name: {LastName}</h4>
                <h4>Email: {Email}</h4>
                <h4>Password: {Password}</h4>
                <h4>Confirm Password: {Confirm}</h4>
                </>: ""
            }
        </div>
    )
}

export default Form;