import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './header/header';
import Add from './add';

import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      num1: 0,
      num2: 0,
      num3: ``
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
    this.settingState = this.settingState.bind(this);
  }
  
  componentDidMount() {
    axios.get(`/api/posts`).then(results=>{
      this.setState({posts: results.data})
    })
  }

  updatePost(id, text) {
    axios.put(`/api/posts?id=${ id }`, { text }).then(results => {
      this.setState({posts: results.data})
    })
  }

  deletePost(id) {
    axios.delete(`/api/posts?id=${ id }`).then(results => {
      this.setState({posts: results.data});
    })
  }

  createPost(text) {
    axios.post(`/api/posts`, {text}).then(results=>{
      this.setState({posts: results.data});
    })
  }

  handleChange1(num1){
    this.setState({num1})
  }
  handleChange2(num2){
    this.setState({num2})
  }
  settingState(value){
    this.setState({num3: value})
  }
  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />
        <section className="sendingStuff">
          <section className="App__content">

            <Compose createPostFn={this.createPost}/>
            {posts.map(post=>(
              <Post key={post.id} text={post.text} date={post.date} id={post.id} updatePostFn={this.updatePost} deletePostFn={this.deletePost}/>
            ))}

          </section>
        </section>
        <section className="addingStuff">
        <h2>Add 2 numbers here</h2>
          <br />
          <div className="inputs">
              <input type="Number" className="input" onChange={e => this.handleChange1(e.target.value)}></input>
              <input type="Number"className="input" onChange={e => this.handleChange2(e.target.value)}></input>
              <Add num1={this.state.num1} num2={this.state.num2} num3={this.state.num3} settingState={this.settingState}/>
          </div>
          <br />
          <h3>{this.state.num3}</h3>
        </section>
      </div>
    );
  }
}

export default App;