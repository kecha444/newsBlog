import React from 'react';
import { useState, useEffect } from 'react';
import './News.css';

function Fnews(props){

  const [currentLikes, setCurrentLikes] = useState(0);
  const [currentDisLikes, setCurrentDisLikes] = useState(0);
  const [visible, setVisible] = useState(true); 
  const rid = `raiting-${props.id}`;

  useEffect (() => {
     document.getElementById(rid).innerText = `[ ${currentLikes - currentDisLikes}]`;
  });
  
  return (
  <div className="col-12 mt-4">
    <div className="card">
      <div className="card-header pb-1 news-header" onClick={() => setVisible(!visible)}>
         <h5 className="float-left"><big id={rid} className={(currentLikes - currentDisLikes)>0 ? 'raiting text-success' : (currentLikes - currentDisLikes)===0 ? 'raiting text-secondary' :  'raiting text-danger'}></big>
         {props.title || "Default title"}
         </h5>
         <span className="float-right">{props.date || "Default date"}</span>
      </div>
           <div className={visible ? 'card-body d-block' : 'card-body d-none'}> {props.text || "Default text"}</div>
      <div className="card-footer">
           <button className="btn btn-sm btn-outline-primary" onClick={() => setCurrentLikes(currentLikes + 1)}>{currentLikes} Likes</button>
           <button className="btn btn-sm btn-outline-danger" onClick={() => setCurrentDisLikes(currentDisLikes + 1)}>{currentDisLikes} DisLikes</button>
      </div>
    </div>
  </div>
    );
}

export default Fnews;
