import React, { Component } from 'react';
import './Reset.css';
import './App.css';

const DATA = {
  navData: [
    {
      index: 0,
      href: "#",
      text: "Home"
    },
    {
      index: 1,
      href: "#",
      text: "Automative Life"
    },
    {
      index: 2,
      href: "#",
      text: "Design"
    },
    {
      index: 3,
      href: "#",
      text: "Innovation"
    },
    {
      index: 4,
      href: "#",
      text: "Performance"
    },
    {
      index: 5,
      href: "#",
      text: "Models"
    }
  ],
  panelData: [
    {
      index: 0,
      source: {
        src: "",
        type: ""
      },
      category: "Design",
      title: "The secret of our favorite places",
      href: "#",
      isWide: true
    },
    {
      index: 1,
      source: {
        src: "",
        type: ""
      },
      category: "Innovation",
      title: "4 futuristic cities and buildings that actually exist",
      href: "#",
      isWide: false
    },
    {
      index: 2,
      source: {
        src: "",
        type: ""
      },
      category: "Advice",
      title: "How to become an ideas machine",
      href: "#",
      isWide: false
    }
  ]
};
class App extends Component {

  _renderNavList(){
    return DATA.navData.map((data)=>{
      return (
        <li className="nav-item" key={data.index}><a href={data.href}>{data.text}</a></li>
      )
    });
  }
  _renderPanelList(){
    return DATA.panelData.map( (data) => {
      let panelClassName = "panel"
      
      if(data.isWide){
        panelClassName = "panel panel-wide"
      }

      return <div className={panelClassName} key={data.index}>
          <a href={data.href} className="panel-container">
            <div className="panel-content">
              <div className="title-container">
                <h3 className="sub-title font-weight-300">{data.category}</h3>
                <h1 className="title">{data.title}</h1>
              </div>
              <div className="btn-container">
                <a href={data.href} className="btn btn-white">
                  Read more
                </a>
              </div>
            </div>
          </a>
        </div>;
    });
  }

  render() {
    const navList = this._renderNavList();
    const panelList = this._renderPanelList();
    
    return <div className="container">
        <header className="menu">
          <ul className="container">
            {navList}
          </ul>
        </header>
        
        <div className="main">
          <div className="panel-group">
            {panelList}
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
