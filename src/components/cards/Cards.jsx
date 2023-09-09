import React, { Component, Fragment } from "react";
import "./Cards.scss";

export class Cards extends Component {
  render() {
    const { urlToImage, source, title, author, publishedAt } = this.props;
    let data = new Date(publishedAt).toISOString().split("T")[0];
    // console.log(data);
    return (
      <Fragment>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
            <div className="images">
              <img
                className="card-img-top"
                src={urlToImage}
                alt="What's img-?"
              />
              <div className="content">
                <p className="img-bg">{source.name}</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <span>{author}</span> {data}
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
