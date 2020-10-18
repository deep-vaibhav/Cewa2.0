import React from "react";
import Calender from "../../../Assets/image/Calender.svg";
import "./NewsAndBlog.scss";
import data from "./data";
import { Link } from "react-router-dom";
class NewsAndBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      counter: 0,
      style: `translateY(0)`,
      NewsStytimerle: `translateY(${data.blog.length * 178 + "px"})`,
    };
  }
  componentWillMount = async () => {
    const timer = setInterval(() => {
      console.log(this.state.counter);
      if (this.state.counter < data.blog.length - 2)
        this.state.timer &&
          this.setState({
            style: `translateY(${-161 * this.state.counter}px)`,
            NewsStyle: `translateY(${
              -178 * (data.blog.length - this.state.counter - 3)
            }px)`,
            counter: this.state.counter + 1,
          });
      else {
        this.setState({ counter: 0 });
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  };

  render() {
    return (
      <div className="newsandblog">
        <div className="News">
          <div className="head">
            <h2>Latest News</h2>
          </div>
          <div className="NewsMain">
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
            <div className="item" style={{ transform: this.state.NewsStyle }}>
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

            <div className="item" style={{ transform: this.state.NewsStyle }}>
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

            <div className="item" style={{ transform: this.state.NewsStyle }}>
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
          <hr />
        </div>
        <div className="blog">
          <div className="head">
            <h2>Recent Events</h2>
          </div>
          <div
            className="blogMain"
            onClick={() => {
              this.setState({
                timer: !this.state.timer,
              });
            }}
          >
            {data.blog.map((item, i) => {
              return (
                <div
                  className="item"
                  style={{ transform: this.state.style, overflow: "scroll" }}
                >
                  <div className="item-img">
                    <img src={item.img} key={i} alt="blog1"></img>
                  </div>
                  <div className="item-text">
                    <h3 key={i}>{item.title}</h3>
                    <div className="date">
                      <img src={Calender} alt="calender" />
                      <p key={i}>{item.date}</p>
                    </div>
                    <div className="article">
                      <p key={i}>
                        {item.article}
                        <span>Read more</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default NewsAndBlog;
