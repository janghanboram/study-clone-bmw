import React, { Component } from "react";
import "./Reset.css";
import "./App.css";

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
  ],
  galleryData: [
    {
      //type 1 : large-normal*2 ,type 2 : normal*3, type 3 : noraml*2-large
      groupType: 1,
      groupId: 0,
      groupItems: [
        {
          index: 0,
          source: {
            src: "",
            type: ""
          },
          category: "Mapping",
          title: "Everyone can measure the world",
          href: "#",
          isWide: true
        },
        {
          index: 1,
          source: {
            src: "",
            type: ""
          },
          category: "Vintage car",
          title: "BMW 2002: A golden treausure from the Orient",
          href: "#",
          isWide: false
        },
        {
          index: 2,
          source: {
            src: "",
            type: ""
          },
          category: "Travel",
          title: "Food adventure Osaka: a city for gourmets",
          href: "#",
          isWide: false
        }
      ]
    },
    {
      groupType: 2,      
      groupId: 1,      
      groupItems: [
        {
          index: 3,
          source: {
            src: "",
            type: ""
          },
          category: "Classic Cars",
          title: "A visit to the world's most expensive beauty contest",
          href: "#",
          isWide: false
        },
        {
          index: 4,
          source: {
            src: "",
            type: ""
          },
          category: "Car design",
          title: "The car of the future in 7 steps",
          href: "#",
          isWide: false
        },
        {
          index: 5,
          source: {
            src: "",
            type: ""
          },
          category: "Gaming",
          title: "Need for Speed: Real adrenalin in a digital racing game",
          href: "#",
          isWide: false
        }
      ]
    },
    {
      groupType: 3,      
      groupId: 2,      
      groupItems: [
        {
          index: 6,
          source: {
            src: "",
            type: ""
          },
          category: "Car Tuning",
          title: "BMW Mad Mods in Las Vegas",
          href: "#",
          isWide: false
        },
        {
          index: 7,
          source: {
            src: "",
            type: ""
          },
          category: "Bold Voices",
          title: "Stefan Sagmeister: Designing happiness",
          href: "#",
          isWide: false
        },
        {
          index: 8,
          source: {
            src: "",
            type: ""
          },
          category: "Travel",
          title: "Oh Carolina! A road trip through the breakthaking South Carolina",
          href: "#",
          isWide: true
        }
      ]
    }
  ]
};
class App extends Component {
  _renderNavList() {
    return DATA.navData.map(data => {
      return (
        <li className="menu-item" key={data.index}>
          <a href={data.href}>{data.text}</a>
        </li>
      );
    });
  }
  _renderPanelList() {
    return DATA.panelData.map(data => {
      let panelClassName = "panel";

      if (data.isWide) {
        panelClassName = "panel panel-wide";
      }

      return (
        <div className={panelClassName} key={data.index}>
          <a href={data.href} className="panel-container">
            <div className="panel-content">
              <h3 className="sub-title font-weight-300">{data.category}</h3>
              <h1 className="title">{data.title}</h1>
              <div className="btn-container">
                <span href={data.href} className="btn btn-white">
                  Read more
                </span>
              </div>
            </div>
          </a>
        </div>
      );
    });
  }
  _renderGalleryTemplate(type, items){
    let itemClassName = "gallery-item"
    if(type === 2){
      return items.map( (item) =>{
        
        return <div className={itemClassName}>
            <div className="content">
              <p className="sub-title font-weight-300">{item.category}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>;
      })
    }else{
      return items.map( (item, index) =>{
        
        if(item.isWide === true){
          itemClassName += " gallery-item-large"
          return <div className={itemClassName}>
            <div className="content">
              <p className="sub-title font-weight-300">{item.category}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>;
        }else{
          if(index === 0){
            return <div className="gallery-item-group">
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{item.category}</p>
                  <p className="title">{item.title}</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{items[index+1].category}</p>
                  <p className="title">{items[index+1].title}</p>
                </div>
              </div>
            </div>
          }
          if(index === 2){
            return <div className="gallery-item-group">
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{items[index-1].category}</p>
                  <p className="title">{items[index-1].title}</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{item.category}</p>
                  <p className="title">{item.title}</p>
                </div>
              </div>
            </div>
          }
          return;
        }
      })
    }
    
  }
  _renderGalleryList(){
    return DATA.galleryData.map(data => {
      let galleryTemplateClassName = "gallery-template gallery-template-" + data.groupType;

      let galleryItem = this._renderGalleryTemplate(data.groupType, data.groupItems)
      
      return <div className={galleryTemplateClassName} key={data.groupId}>
          {galleryItem}
          </div>;
      
    })      
  }
  render() {
    const navList = this._renderNavList();
    const panelList = this._renderPanelList();
    const galleryList = this._renderGalleryList();
    console.log(galleryList)

    return (
      <div className="container">
        <header className="menu">
          <nav className="container">
            <div className="logo">
              <a href="#">
                <img
                  className="logo-img"
                  src="https://www.bmw.com/etc/designs/bmwcom/base/img/logo-en.png"
                  alt="logo-img"
                />
              </a>
            </div>
            <ul className="menu-list">{navList}</ul>
          </nav>
        </header>

        <div className="main">
          <div className="panel-group">{panelList}</div>
        </div>

        <div className="link-container">
          <h3 className="text-normal font-weight-300">BMW in your country</h3>
          <h1 className="text-large">ALL BMW MODELS</h1>
          <h3 className="text-normal">
            <a href="/">> Find your BMW</a>
          </h3>
        </div>

        <div className="gallery">
          {galleryList}
          <div className="btn-container">
            <a href="/" className="btn btn-black btn-show-more">
              Show more
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
