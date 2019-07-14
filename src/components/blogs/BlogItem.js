import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import pic from '../../assets/images'

import PropTypes from 'prop-types';

export class BlogItem extends Component {
    render() {
        const { blog_id, title, image, description } = this.props.blog;
        return (
            // <div style={{padding:'5px'}}>
            //     <div className="card bg-light" style={{width:'60%', margin:'auto'}}>
            //         <img className="card-img-top" src={require("../../assets/images/"+image)} alt="Card " style={{height:'auto',width:'100%' }}/>
            //         <div className="card-body">
            //             <h6 className="card-title">{title}</h6>
            //             <div >
            //                <span href="#" className="btn btn-primary ">Read</span> 
            //                <button className="btn btn-link text-danger" onClick={this.props.delBlog.bind(this, id)} style={btnStyle}>Delete</button>
            //                 <button className="btn btn-link text-warning" style={btnStyle}>Edit</button>

            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="row m-4">
                <div className="col-2"></div>
                <div className="col-md-3 shadow-sm">
                    <Link className='text-decoration-none' to={'/read/' + blog_id} >
                        <img className="img-thumbnail m-1" src={require("../../assets/images/" + image)} alt="Card " />
                    </Link>
                </div>
                <div className="col-md-4 shadow-sm">
                    <Link className='text-decoration-none' to={'/read/' + blog_id} >
                        <h5 className="lead font-weight-bold">{title}</h5>
                    </Link>
                    <p className="card-text text-break text-truncate">{description}</p>

                    <Link className='text-decoration-none' to={'/edit/' + blog_id} >
                        <button className="btn btn-link text-warning font-weight-bold" style={btnStyle}>Edit</button>
                    </Link>
                    <button className="btn btn-link text-danger font-weight-bold" onClick={this.props.delBlog.bind(this, blog_id)} style={btnStyle}>
                        Delete
                    </button>
                </div>
                <div className="col-3"></div>
            </div>


        )
    }
}

// PropTypes
BlogItem.propTypes = {
    blog: PropTypes.object.isRequired
}

// Styling
const btnStyle = {
    float: 'left'
}

export default BlogItem
