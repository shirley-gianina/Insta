import React, { Component } from "react"

import { IoEllipsisHorizontal, IoHeartCircle } from "react-icons/io5"


import "./style.css"

class Post extends Component {
    render() {
        return (
            <div className="card mt-5">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="me-3">
                            <img
                                className="rounded-circle"
                                src={this.props.avatar}
                                width="50px"
                                alt="avatar"
                            />
                        </div>
                        <div>
                            <p className="m-0 fw-bold">{this.props.author}</p>
                            <p className="m-0 text-muted">{this.props.createdAt}</p>
                        </div>
                    </div>
                    <div>
                        <IoEllipsisHorizontal
                            style={{ fontSize: "25px" }}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <img src={this.props.image} className="card-img-top" alt="..." />
                    </div>
                    <hr />

                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">

                            <p className="m-0">{this.props.likes} Likes</p>
                        </div>
                        <div>
                            <IoHeartCircle
                                style={
                                    this.props.liked
                                        ? { color: "#f02849", fontSize: "30px"}
                                        : { color: "#88888", fontSize: "30px"}
                                    }
                            />
                        </div>
                    </div>

                    <hr />
                    <div>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Post;