import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
      super();
      this.state = {
        articles : [],
        loading : false,
        page : 1
      };
  }
  prevBtn = async () => {
    if (this.state.page - 1 > Math.ceil(this.state.totalArticles/20)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d11f15aa496d41ffbb1ab474231a3e0c&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page : this.state.page - 1,
        articles : parseData.articles
      })
    }
  }
  nxtBtn = async () => {
      if (this.state.page + 1 > Math.ceil(this.state.totalArticles/20)) {
        document.querySelector('#lastpage').disabled = true;
      } else {
        document.querySelector('#lastpage').disabled = false;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d11f15aa496d41ffbb1ab474231a3e0c&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
          page : this.state.page + 1,
          articles : parseData.articles
        })
     }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d11f15aa496d41ffbb1ab474231a3e0c&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, totalArticles : parseData.totalResults})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Hedlines</h1>
        <div className="row">
        {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title && element.title !== "[Removed]" ? element.title.slice(0, 45) : ""} description={element.description && element.description !== "[Removed]" ? element.description.slice(0, 85) : ""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.prevBtn} className="btn btn-dark">&laquo; Pervious</button>
          <button type="button" onClick={this.nxtBtn} className="btn btn-dark" id="lastpage">Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
