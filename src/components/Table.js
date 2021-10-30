import React from "react";

const Table = ({ item }) => {
    return (
        <div class="jumbotron jumbotron-fluid" key={item.id}>
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>
                                        <button>
                                            <div key={item.id} onClick={() => this.listWatched(item)} style={{ cursor: "pointer"}}>
                                                Edit
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;