import React from "react";
import blog1 from "../../../Assets/image/blog1.jpg";
import Calender from "../../../Assets/image/Calender.svg";
import "./NewsAndBlog.scss";
import data from "./data";
import { Link } from "react-router-dom";
class NewsAndBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    this.props.handleUrl(data.news.title);
    console.log(this.props);
    return (
      <div className="newsandblog">
        <div className="News">
          <div className="head">
            <h2>Latest News</h2>
            <h5>View All</h5>
          </div>
          <div className="item">
            <div className="date">
              <span>{data.news.date.day}</span>
              <span className="month">
                <hr />
                <p>
                  {data.news.date.month}
                  <br />
                  {data.news.date.year}
                </p>
              </span>
            </div>
            <div className="details">
              <p className="topic">
                {" "}
                <span> ≡ </span>Cewa News
              </p>
              <Link to={`news/${data.news.title}`}>
                <h5>{data.news.title}</h5>
              </Link>
              <p>{data.news.body}</p>
            </div>
            <hr />
          </div>
        </div>
        <div className="blog">
          <div className="head">
            <h2>Recent Events</h2>
            <h5>View All</h5>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={blog1} alt="blog1"></img>
            </div>
            <div className="item-text">
              <h3>{data.blog.title}</h3>
              {/* <div className="user">
                <img
                  src="https://img.icons8.com/office/30/000000/user.png"
                  alt="user"
                />
                <p>{data.blog.user}</p>
              </div> */}
              <div className="date">
                <img src={Calender} alt="calender" />
                <p>{data.blog.date}</p>
              </div>
              <div className="article">
                <p>
                  {data.blog.article}
                  <span>Read more</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default NewsAndBlog;
