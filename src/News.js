import React from 'react';
import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLikes: 0,
      visible: true
    };

    this.handlerClick = this.handlerClick.bind(this);
    this.setVisibleClick = this.setVisibleClick.bind(this);
  
  }

  handlerClick() {
    this.setState({ currentLikes: this.state.currentLikes + 1 });
  }

  setVisibleClick(){
  this.setState({ visible: !this.state.visible });
  }
  

  render(){
  return (
    <div className="col-12 mt-4">
       <div className="card">
        <div className="card-header pb-1 news-header" onClick={this.setVisibleClick}>
         <h5 className="float-left">{this.props.title || "Default title"}</h5>
         <span className="float-right">{this.props.date || "Default date"}</span>
        </div>
         <div className={this.state.visible ? 'card-body d-block' : 'card-body d-none'}> {this.props.text || "Default text"}</div>
         <div className="card-footer">
           <button className="btn btn-sm btn-primary" onClick={this.handlerClick}>{this.state.currentLikes} Likes</button>
         </div>
       </div>
    </div>
    );
  }
}

export default News;
