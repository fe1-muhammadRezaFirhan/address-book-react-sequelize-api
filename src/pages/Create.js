import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Create extends React.Component {
    state = {
        newContact: {}
    }

    async componentDidMount() {

    }

    async handleChange(e) {
        this.setState({ value: e.target.value })
    }

    async handleSubmit(e) {
        axios
            .post("http://localhost:3001/", this.state.newContact)
            .then((res) => {
                this.props.history.replace('/')
            })
            .catch((err) => {
                console.log(err)
            })
        e.preventDefault();
    }

    render() {
        const { newContact } = this.state
        return (
            <div class="d-flex justify-content-center">
                <div class="container">
                    <form class="needs-validation" onSubmit={(e) => this.handleSubmit(e)}>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom01">First name</label>
                                <input value={newContact.first_name}
                                        type="text"
                                        onChange={(e) =>
                                        this.setState({
                                            newContact: { ...newContact, first_name: e.target.value },
                                        })} 
                                     class="form-control" id="validationCustom01" required/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom02">Last name</label>
                                <input value={newContact.last_name}
                                        type="text"
                                        onChange={(e) =>
                                        this.setState({
                                            newContact: { ...newContact, last_name: e.target.value },
                                        })} 
                                     class="form-control" id="validationCustom01" required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">Phone</label>
                                <input value={newContact.phone}
                                        type="text"
                                        onChange={(e) =>
                                        this.setState({
                                            newContact: { ...newContact, phone: e.target.value },
                                        })} 
                                     class="form-control" id="validationCustom01" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">email</label>
                                <input value={newContact.email}
                                        type="text" 
                                        onChange={(e) =>
                                        this.setState({
                                            newContact: { ...newContact, email: e.target.value },
                                        })} 
                                     class="form-control" id="validationCustom01" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-outline-primary" type="submit">Submit</button>
                    </form>
                </div>      
            </div>
        )
    }
}

export default withRouter(Create);