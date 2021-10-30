import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header'


function App1() {
    let history = useHistory;
    const [userList, setUserList] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    

    const fetchData = async () => {
        axios
            .get('http://localhost:3001')
            .then((res) => {
                const { data } = res;
                setUserList(data);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setIsReady(true));
    }

    const deleteItem = async (id) => {
        axios
            .delete('http://localhost:3001/' + id)
            .then((res) => {
                fetchData();
            })
            .catch((err) => {
                console.log(err)
            })
            
    }

    if (isReady) {
        return (
            <div>
                <div class="d-flex justify-content-center">
                    <div class="jumbotron">
                        <h1 class="d-flex justify-content-center display-4">Your Contact List!</h1>
                        <p class="lead">This is a simple Contact List, you can use this to add new contact, view it, update the contact info, and also you can delete it as well.</p>
                        
                        <p>To create a new contact just hit the button below</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="/create" role="button">Create</a>
                        </p>
                    </div>
                </div>
                {/* create */}

                {/* <div class="d-flex justify-content-lg-center p-2" >
                    <form class="was-validated" onSubmit={(e) => this.handleSubmit(e)}>
                        <div class="input-group is-invalid">
                            <div class="custom-file">
                                <input value = {value} type="text" onChange = {(e) => this.handleChange(e)} placeholder = "Writte your movie title..." class="form-control is-invalid" aria-describedby="validatedInputGroupPrepend" required/>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            You must fill this field!
                        </div>
                    </form>
                </div> */}

                {/* update */}
                {/* <Table item = {movie}/> */}
                <div class="jumbotron jumbotron-fluid" key={userList.id}>
                    <div class="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {userList.map((item) => {
                                    return (
                                        <tr>
                                            <th scope="row">{userList.indexOf(item) + 1}</th>
                                            <td>
                                                <a href={`/detail/${item.id}`}> {item.first_name + " " + item.last_name} </a>
                                            </td>
                                            {/* <td style={{ textDecoration: item.done ? "line-through" : "none"}}>{item.first_name + " " + item.last_name}</td> */}
                                            <td style={{ textDecoration: item.done ? "line-through" : "none"}}>{item.email}</td>
                                            <td style={{ textDecoration: item.done ? "line-through" : "none"}}>{item.phone}</td>
                                            <td>
                                                {/* <button type="button" class="btn btn-outline-secondary" onClick={() => this.listWatched(item)}>
                                                    <div key={item.id} style={{ cursor: "pointer"}}>
                                                        Line-Through
                                                    </div>
                                                </button> */}
                                                <a href={`/update/${item.id}`}>testEdit</a>
                                            </td>
                                            <td>
                                                {/* <button type="button" class="btn btn-outline-danger" key={item.id} onClick={() => this.handleDelete(item)} >
                                                    <div style={{ cursor: "pointer"}}>
                                                        Delete
                                                    </div>
                                                </button> */}
                                                <button onClick={() => deleteItem(item.id)}>testDelete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        );
    } else {
        return <p>Loading</p>
    }
}

export default App1;