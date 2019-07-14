import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Blogs from './components/blogs/Blogs'
import ReadBlog from './components/pages/ReadBlog.js'
import CreateBlog from './components/pages/CreateBlog.js'
import EditBlog from './components/pages/EditBlog'

class App extends Component{
  state = {
    blogs:[]
  }

  componentDidMount(){
    axios.get('http://localhost:8080/blogs')
    .then(res => this.setState({blogs: res.data}));

    // axios.post('http://localhost:8080/create',{
    //   title: "Yes this is the title",
    //   description: "You gotta adjust to it"
    // })
    // .then(res => console.log(res.data));
    
  }


  

  

  delBlog = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
     .then(res => this.setState(
      {
        blogs:[...this.state.blogs.filter(blog => blog.blog_id !==id)]
      }
    ));
    
  }

  render(){
    const margin={
      marginTop:"80px"
    }
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={props => (
            <div className="" style={margin}>
              <Blogs blogs={this.state.blogs} delBlog={this.delBlog}/> 
            </div>
          )}/>
          <Route path='/read/:id' component={ReadBlog}  />
          <Route path='/create' component={CreateBlog}/>
          <Route path='/edit/:id' component={EditBlog} />
          
        </div>
      </Router>
    );
  }
}

export default App;
