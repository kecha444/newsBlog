import React from 'react';
import Fnews from './Fnews';
import { useState } from 'react';
import OneNews from './Classes/OneNews';


let firstNews = new OneNews(0, 'Fist news' , 'Hello, im first news' , '12.09.2019');
let secondNews = new OneNews(1, 'Second news' , 'Hello, im second news' , '12.12.2019');
let anotherNews = new OneNews(2, 'Another news' , 'Hello, im Another news' , '12.01.2020');
let testNews = new OneNews(3, 'test news' , 'Hello, im test news' , '20.01.2020');


let newsList = [firstNews, secondNews, anotherNews, testNews];

function NewsList() {
  const news = newsList;
  const newsItems = news.map((oneNews) => 
    <Fnews id={oneNews.id} title={oneNews.title} text={oneNews.text} date={oneNews.date} key={oneNews.id}/>
  );

const [newsCount, setNewsCount] = useState(4);

const addFormSubmit = event => {
  event.preventDefault();

  let addNews = new OneNews(
    newsList.length,
    document.getElementById('addTitle').value,
    document.getElementById('addText').value,
    document.getElementById('addData').value,
    );
  newsList.push(addNews);

  setNewsCount(newsCount + 1);
};


  return (
    <div className="container">
      <div className="row">
        {newsItems}

        <div className="col-12">
          <div className="card mt-4 mb-4">
          <div className="card-header pb-1">
            <h6><strong>Добавить новость</strong></h6>
          </div>
          <div className="card-body">
            <form onSubmit={addFormSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Заголовок" id="addTitle" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Текст новости" id="addText" />
            </div>
            <div className="form-group">
              <input type="date" className="form-control" placeholder="Дата публикации" id="addData" />
            </div>
            <button type="submit" className="btn btn-outline-daek px-4">Добавить</button>
              
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
