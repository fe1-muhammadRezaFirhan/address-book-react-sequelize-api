import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";


class Update extends React.Component {
    state = {
        isLoading: false,
        userDetail: {}
    }

    async componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const { params } = this.props.match 
        axios
            .get("http://localhost:3001/" + params.id)
            .then((res) => {
                const { data } = res;
                console.log(res)
                this.setState({ userDetail: data })
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => this.setState({ isLoading: true}))
    }

    async handleChange(e) {
        this.setState({ value: e.target.value })
        console.log(e)
    }

    async handleSubmit(e) {
        const { params } = this.props.match 
        axios
            .put("http://localhost:3001/"+ params.id, this.state.userDetail)
            .then((res) => {
                this.props.history.replace('/')
            })
            .catch((err) => {
                console.log(err)
            })
        e.preventDefault();
    }

    render() {
        const { isLoading, userDetail} = this.state
        // return (
        //     <div>
        //         {userDetail.map((item) => {
                        return (
                            <div class="d-flex justify-content-center">
                            <div class="container">
                                <form class="needs-validation" onSubmit={(e) => this.handleSubmit(e)}>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom01">First name</label>
                                            <input value={userDetail.first_name}
                                                    type="text"
                                                    onChange={(e) =>
                                                    this.setState({
                                                        userDetail: { ...userDetail, first_name: e.target.value },
                                                    })} 
                                                class="form-control" id="validationCustom01" required/>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom02">Last name</label>
                                            <input value={userDetail.last_name}
                                                    type="text"
                                                    onChange={(e) =>
                                                    this.setState({
                                                        userDetail: { ...userDetail, last_name: e.target.value },
                                                    })} 
                                                class="form-control" id="validationCustom01" required/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom03">Phone</label>
                                            <input value={userDetail.phone}
                                                    type="text"
                                                    onChange={(e) =>
                                                    this.setState({
                                                        userDetail: { ...userDetail, phone: e.target.value },
                                                    })} 
                                                class="form-control" id="validationCustom01" required/>
                                            <div class="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom03">email</label>
                                            <input value={userDetail.email}
                                                    type="text" 
                                                    onChange={(e) =>
                                                    this.setState({
                                                        userDetail: { ...userDetail, email: e.target.value },
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
        //             })}
        //     </div>
                
            
        // )
    }
}

export default withRouter(Update);