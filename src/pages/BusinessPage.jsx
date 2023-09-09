import React, { Component } from "react";
import Cards from "../components/cards/Cards";
import request from "../server";

export class BusinessPage extends Component {
  state = {
    posts: [],
    // business:""
  };
  async getPosts() {
    try {
      let { data } = await request;
      this.setState({ posts: data.articles });
      console.log(data.articles);
      let business = data.articles.map((article) => article.url.split("/"));
      console.log(business);
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
        <h1>Our Latest Posts</h1>
        <div className="row g-3">
          {posts.map((post, i) => (
            <Cards key={i} {...post} />
          ))}
        </div>
      </section>
    );
  }
}

export default BusinessPage;
