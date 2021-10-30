import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";


class Detail extends React.Component {
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

    render() {
        const { isLoading, userDetail} = this.state
        if (isLoading) {
            return (
                <div>
                    <div class="d-flex justify-content-center">
                        <div class="jumbotron">
                            <h1 class="display-4">{userDetail.first_name +' ' + userDetail.last_name}</h1>
                            <p class="lead">Phone: {userDetail.phone} | {userDetail.email}</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="/" role="button">BACK</a>
                            </p>
                        </div>
                    </div>
                </div>   
            )
        } else {
            return <p>Loading</p>
        }
            
    }
}

export default withRouter(Detail);