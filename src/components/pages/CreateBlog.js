import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

export class CreateBlog extends Component {

    state = {
        selectedImage: null,
        title: '',
        description: '',
        redirect: false
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
        const data = new FormData()
        data.append('image', this.state.selectedImage)
        data.append('title',this.state.title)
        data.append('description',this.state.description)

        axios.post("http://localhost:8080/create", data,
            { // receive two parameter endpoint url ,form data 
                headers: { 'content-type': 'multipart/form-data' }
            })
            .then(res => { // then print response status
                if(res.status === 201){
                    this.setState({
                        redirect:true
                    })
                }
            })
    }

    render() {
        const margin={
            marginTop:"80px"
          }
        return (
            (this.state.redirect)?<Redirect to="/"/>:
            <div style={margin}>
                <h4 className="font-weight-bold text-center">Create new blog</h4>
                <form className="w-75 mx-auto mt-5">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" name="title" onChange={this.onTitlechange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description:</label>
                        <textarea type="text" className="form-control" name="desc" onChange={this.onDescchange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="file" name="image" onChange={this.onChangeHandler} />
                    </div>
                    {/* <div class="form-group form-check">
                        <label class="form-check-label">
                        <input class="form-check-input" type="checkbox"/> Remember me
                        </label>
                    </div> */}
                    <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                </form>

            </div>
        )
    }
}

export default CreateBlog
