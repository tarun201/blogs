import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export class EditBlog extends Component {
    state = {
        blog: {},
        deleted: 0,
        selectedImage: null,
        title: '',
        description: '',
        redirect: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8080/read/${id}`)
            .then(res => this.setState(
                {
                    blog:res.data[0],
                    deleted: res.data[0].deleted
                }))
    }

    onChangeHandler = event => {

        this.setState({
            selectedImage: event.target.files[0],
            loaded: 0
        });

    }

    onTitlechange = event => {
        this.setState({
            title: event.target.value
        });
    }

    onDescchange = event => {
        this.setState({
            description: event.target.value
        });
    }

    onClickHandler = () => {
        // console.log(this.state.blog.image)
        // if(this.state.selectedImage===null){
        //     this.setState({
        //         selectedImage: this.state.blog.image
        //     })
        // }

        const data = new FormData()
        data.append('image', this.state.selectedImage)
        data.append('title', this.state.title)
        data.append('description', this.state.description)
        data.append('blog_id', this.props.match.params.id)

        axios.patch("http://localhost:8080/edit", data,
            { // receive two parameter endpoint url ,form data 
                headers: { 'content-type': 'multipart/form-data' }
            })
            .then(res => { // then print response status
                if (res.status === 201) {
                    this.setState({
                        redirect: true
                    })
                }
            })
    }

    render() {
        const margin = {
            marginTop: "80px"
        }
        const { title,description } = this.state.blog;
        return (
            (this.state.deleted !== 0) ?
                <p className="alert alert-danger mt-5 ">This blog was deleted or doesn't exist!</p> :
                (this.state.redirect) ? <Redirect to="/" /> :
                    <div style={margin}>
                        <h4 className="font-weight-bold text-center">Edit Blog (Fill all the fields)</h4>
                        <form className="w-75 mx-auto mt-5">
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control required" placeholder={title} name="title" onChange={this.onTitlechange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description:</label>
                                <textarea type="text" className="form-control" placeholder={description} name="desc" onChange={this.onDescchange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image:</label>
                                <input type="file" name="image" onChange={this.onChangeHandler} />
                            </div>

                            <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                        </form>

                    </div>
        )
    }
}

export default EditBlog
