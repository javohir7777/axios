import React, { Component } from "react";
import request from "../server";
import Cards from "../components/cards/Cards";

export class HomePage extends Component {
  state = {
    posts: [],
  };
  async getPosts() {
    try {
      let { data } = await request;
      this.setState({ posts: data.articles });
      console.log(data.articles);
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts } = this.state;
    return (
      <section>
        <h1>Our Latest AllPosts</h1>
        <br />
        <div className="row g-3">
          {posts.map((post, i) => (
            <Cards key={i} {...post} />
          ))}
        </div>
      </section>
    );
  }
}

export default HomePage;
