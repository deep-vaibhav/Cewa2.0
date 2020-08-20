import React from "react";
import news1 from "../../../../Assets/image/news/news1.jpeg";
import news2 from "../../../../Assets/image/news/news2.jpeg";
import news3 from "../../../../Assets/image/news/news3.jpeg";
import news4 from "../../../../Assets/image/news/news4.jpeg";
import news5 from "../../../../Assets/image/news/news5.jpeg";
import news6 from "../../../../Assets/image/news/news6.jpeg";
import news7 from "../../../../Assets/image/news/news7.jpeg";
import news8 from "../../../../Assets/image/news/news8.jpeg";
import "./News.scss";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPage: null,
      pageNumber: 1,
    };
  }
  render() {
    return (
      <div className="News-lg">
        <h1 className="Title">NEWSLETTER, MAY 2020</h1>
        <h3 className="Heading">CHILDREN’S ENDORSE WELFARE ASSOCIATION</h3>
        <div className="body">
          <div className="text">
            <p>
              “If you can’t feed a hundred people, then feed just one.” Hunger
              is one of the greatest challenges to mankind in the present world.
              Not everyone who is born, survives. Even the most basic requisite
              like water, let alone food, is unaffordable to almost 12% of
              Indian population. However, our team believes that if we join
              hands, we can surely bring about a change, which is better than
              pitying and doing nothing.
            </p>
            <p>
              CEWA has successfully conducted its first event which was a ‘Food
              distribution drive’ under the guidance of our founder, Mr.
              Prakhar. The lockdown couldn’t contain the yearning of our fellow
              members and heeding the government guidelines, a few of the CEWA
              members went out for the social cause.
            </p>
            <p>
              The event was a three-day program, focusing on the needs of the
              impoverished. Food packets containing fruits, biscuits, and chips
              were distributed among the needy kids. Later, the CEWA members
              educated the kids about plastics pollution and how the use of
              paper bags can improve the environment. The event achieved
              enormous praise and brought smiles to a hundred faces.
            </p>

            <p>
              ‘Swachaagrah’ commonly called the clean India mission has always
              been a topic of enthusiasm and inspiration as it’s a vast campaign
              under the government of India. In order to ensure that the spark
              of this campaign created doesn’t fade away, CEWA conducted two
              sessions of cleanliness drive with the children of in and around
              areas. The team analysed the fact that it’s always better to catch
              a child young and inculcate a fundamental and necessary value such
              as cleanliness if we want them to grow with it.
            </p>
            <p>
              The cleanliness drive consisted of activities of keeping their
              school clean at the first place and were given task of practising
              the same at their homes which would be discussed in the upcoming
              sessions. The kids were briefed about least use of plastic and
              more use of papers bags and cloth bags. The were also briefed
              about the necessary use of dustbins and why they should make sure
              non- decomposing waste is inside the dustbin away from animals.
              Overall the event was quite informative for the kids and team is
              planning further sessions with more engaging activities for the
              kids.
            </p>
          </div>
          <div className="img">
            <div className="row1">
              <img src={news5} alt=""></img>
              <img src={news2} alt=""></img>
            </div>
            <div className="row2">
              <img src={news8} alt=""></img>
              <img src={news4} alt=""></img>
            </div>
            <br />
            <div className="row3">
              <img src={news1} alt=""></img>
              <img src={news6} alt=""></img>
            </div>
            <div className="row4">
              <img src={news7} alt=""></img>
              <img src={news3} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
