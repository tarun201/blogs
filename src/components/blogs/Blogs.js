import React, { Component } from 'react';
import BlogItem from './BlogItem';

import PropTypes from 'prop-types';


export class Blogs extends Component {
    render() {
        return this.props.blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.blog_id} delBlog={this.props.delBlog} />

        ));
    }
}

// PropTypes
Blogs.propTypes = {
    blogs: PropTypes.array.isRequired
}

export default Blogs
