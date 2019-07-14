import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'

export class ReadBlog extends Component {
    state = {
        blog: {},
        redirect: false
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8080/read/${id}`)
            .then(res => this.setState({ blog: res.data[0] }));
    }

    onClickDelete = () => {
        const id = this.state.blog.blog_id
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ redirect: true })
                }
            });
    }

    render() {
        const margin = {
            marginTop: "80px"
        }
        const { blog_id, title, image, description, deleted } = this.state.blog;
        return (
            (deleted === 1) ? <p className="alert alert-danger mt-5 ">This blog was deleted!</p> :
                (this.state.redirect) ? <Redirect to="/" /> :
                <div className="card mx-auto w-75 mb-5" style={margin}>
                    <img className="card-img-top" src={(image === undefined) ? "" : require("../../assets/images/" + image)} alt="Card " />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{title}</h4>
                        <p className="card-text ">{description}</p>
                        {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                    </div>
                    <div>
                        <Link className='text-decoration-none' to={'/edit/' + blog_id} >
                            <button className="btn btn-link text-warning font-weight-bold" style={btnStyle}>Edit</button>
                        </Link>
                        <button className="btn btn-link text-danger font-weight-bold" onClick={this.onClickDelete} style={btnStyle}>
                            Delete
                         </button>
                    </div>
                </div>
        )
    }
}

// Styling
const btnStyle = {
    float: 'left'
}

export default ReadBlog
