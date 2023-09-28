import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    apiKey: 'd11f15aa496d41ffbb1ab474231a3e0c',
    pageSize: 18,
    category: 'general'
  }
  constructor() {
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    };
  }
  prevBtn = async () => {
    if (!(this.state.page - 1 > Math.ceil(this.state.totalArticles/20))) {
      this.setState({loading : true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page : this.state.page - 1,
        articles : parseData.articles,
        loading : false
      })
    }
  }
  nxtBtn = async () => {
      if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles/20))) {
        this.setState({loading : true});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
          page : this.state.page + 1,
          articles : parseData.articles,
          loading : false
        })
     }
  }
  async componentDidMount() {
    this.setState({loading : true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, totalArticles : parseData.totalResults, loading : false})
  }
  render() {
    return (
      <div className="container my-3 text-center my-3">
        <h1 className="my-3">NewsMonkey - Top Hedlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title && element.title !== "[Removed]" ? element.title.slice(0, 45) : ""} description={element.description && element.description !== "[Removed]" ? element.description.slice(0, 85) : ""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.prevBtn} className="btn btn-dark">&laquo; Pervious</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/20)} onClick={this.nxtBtn} className="btn btn-dark" id="lastpage">Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
