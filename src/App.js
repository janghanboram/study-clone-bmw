import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return <div className="container">
        <header className="menu">
          <div className="container">
            <a href="/" className="menu-link">
              {" "}
              Home
            </a>
            <a href="/" className="menu-link">
              {" "}
              Automative Life
            </a>
            <a href="/" className="menu-link">
              {" "}
              Design
            </a>
            <a href="/" className="menu-link">
              {" "}
              Innovation
            </a>
            <a href="/" className="menu-link">
              {" "}
              Performance
            </a>
            <a href="/" className="menu-link">
              {" "}
              Models
            </a>
          </div>
        </header>
        <div className="main">
          <div className="panel panel-wide">
            <div className="content">
              <div className="title-container">
                <h3 className="sub-title font-weight-300">Design</h3>
                <h1 className="title">The Secret of our favorite</h1>
                <h1 className="title">places</h1>
              </div>
              <div className="btn-container">
                <a href="/" className="btn btn-white">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="content">
              <div className="title-container">
                <h3 className="sub-title font-weight-300">Design</h3>
                <h1 className="title">The Secret of our favorite</h1>
                <h1 className="title">places</h1>
              </div>
              <div className="btn-container">
                <a href="/" className="btn btn-white">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="content">
              <div className="title-container">
                <h3 className="sub-title font-weight-300">Design</h3>
                <h1 className="title">The Secret of our favorite</h1>
                <h1 className="title">places</h1>
              </div>
              <div className="btn-container">
                <a href="/" className="btn btn-white">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="link-container">
          <h3 className="text-normal font-weight-300">
            BMW in your country
          </h3>
          <h1 className="text-large">ALL BMW MODELS</h1>
          <h3 className="text-normal">
            <a href="/">> Find your BMW</a>
          </h3>
        </div>
        <div className="gallery">
          <div className="gallery-template template-top">
            <div className="gallery-item gallery-item-large">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
            <div className="gallery-item-group">
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">Category</p>
                  <p className="title">title</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">Category</p>
                  <p className="title">title</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-template template-middle">
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
          </div>
          <div className="gallery-template template-bottom">
            <div className="gallery-item-group">
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">Category</p>
                  <p className="title">title</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">Category</p>
                  <p className="title">title</p>
                </div>
              </div>
            </div>
            <div className="gallery-item gallery-item-large">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
          </div>
          <div className="gallery-template template-middle">
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="content">
                <p className="sub-title font-weight-300">Category</p>
                <p className="title">title</p>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <a href="/" className="btn btn-black btn-show-more">
              Show more
            </a>
          </div>
        </div>
      </div>;
  }
}

export default App;
