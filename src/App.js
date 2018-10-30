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
        src: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Design/my-favorite-space/mfs-180919/mfs-00-teaser-hd.mp4",
        type: "video"
      },
      category: "Design",
      title: "The secret of our favorite places",
      href: "#",
      isWide: true
    },
    {
      index: 1,
      source: {
        src: "https://www.bmw.com/video//is/content/BMW/bmwcom/bmw_com/category/Design/G20_futuristische%20Städte/G20-Orte-sehen-du-musst-00-teaser-square.mp4",
        type: "video"
      },
      category: "Innovation",
      title: "4 futuristic cities and buildings that actually exist",
      href: "#",
      isWide: false
    },
    {
      index: 2,
      source: {
        src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/adam-grant/ag-00-teaser-square.jpg?imwidth=1024",
        type: "image"
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
            src: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/google-street-view/streetview-00-teaser-hd.mp4",
            type: "video"
          },
          category: "Mapping",
          title: "Everyone can measure the world",
          href: "#",
          isWide: true
        },
        {
          index: 1,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/frenkel-bmw-2002/frenkel-00-teaser-hd.jpg.asset.1536844919723.jpg",
            type: "image"
          },
          category: "Vintage car",
          title: "BMW 2002: A golden treausure from the Orient",
          href: "#",
          isWide: false
        },
        {
          index: 2,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/osaka-city-guide/osaka-00-teaser-high.jpg.asset.1536078310827.jpg",
            type: "image"
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
            src: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Design/pebble-beach/article-00-teaser-hd-v1.mp4",
            type: "video"
          },
          category: "Classic Cars",
          title: "A visit to the world's most expensive beauty contest",
          href: "#",
          isWide: false
        },
        {
          index: 4,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/car-design/design-x5-00-teaser-hd-d.jpg.asset.1533653330621.jpg",
            type: "image"
          },
          category: "Car design",
          title: "The car of the future in 7 steps",
          href: "#",
          isWide: false
        },
        {
          index: 5,
          source: {
            src: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/need-for-speed/nfs-00-teaser-hd-d-v2.mp4",
            type: "video"
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
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/mad-mods-lv/mad-mods-lv-00-teaser-hd.jpg.asset.1530687839955.jpg",
            type: "image"
          },
          category: "Car Tuning",
          title: "BMW Mad Mods in Las Vegas",
          href: "#",
          isWide: false
        },
        {
          index: 7,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/sagmeister/sagmeister-00-teaser-hd.jpg?imwidth=768%20768w",
            type: "image"
          },
          category: "Bold Voices",
          title: "Stefan Sagmeister: Designing happiness",
          href: "#",
          isWide: false
        },
        {
          index: 8,
          source: {
            src: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/south-carolina-landscape/bmw-x5-roadtrip-sc-00-teaser-hd.mp4",
            type: "video"
          },
          category: "Travel",
          title: "Oh Carolina! A road trip through the breakthaking South Carolina",
          href: "#",
          isWide: true
        }
      ]
    },
    {
      groupType: 2,      
      groupId: 3,      
      groupItems: [
        {
          index: 9,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Design/cape-cool/capecool-00-teaser-hd-d.jpg.asset.1529660998911.jpg",
            type: "image"
          },
          category: "Lifestyle",
          title: "Cape Cool - Cape Town and art",
          href: "#",
          isWide: false
        },
        {
          index: 10,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/3er-bmw/181010_3er/3er-00-teaser-hd.jpg.asset.1539275376590.jpg",
            type: "image"
          },
          category: "A Journey through Automobile History",
          title: "The Seven Generations of the BMW 3 Series",
          href: "#",
          isWide: false
        },
        {
          index: 11,
          source: {
            src: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/aftersales-holidayprep/holiday-preparations-00-teaser-hd.jpg.asset.1527519344541.jpg",
            type: "image"
          },
          category: "Travel",
          title: "How you can load your car properly",
          href: "#",
          isWide: false
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
      let panelSource = "";

      if (data.isWide) {
        panelClassName = "panel panel-wide";
      }

      if(data.source.type === "image") {
        panelSource = <img src={data.source.src} alt="" />
      }

      if(data.source.type === "video") {
        panelSource = <video src={data.source.src} autoPlay={true} />
      }

      return (
        <div className={panelClassName} key={data.index}>
          <a href={data.href} className="panel-container">
            <div className="panel-content">
              <h3 className="sub-title font-white font-weight-300">{data.category}</h3>
              <h1 className="title font-white">{data.title}</h1>
              <div className="btn-container">
                <span href={data.href} className="btn btn-white">
                  Read more
                </span>
              </div>
            </div>
            <div className="panel-source">
              { panelSource }
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

        let gallerySource = "";


        if(item.source.type === "image") {
          gallerySource = <img src={item.source.src} alt="" />
        }

        if(item.source.type === "video") {
          gallerySource = <video src={item.source.src} autoPlay={true} />
        }
        
        return <a href="#" className={itemClassName}>
            <div  className="content">
              <p className="sub-title font-weight-300">{item.category}</p>
              <p className="title">{item.title}</p>
            </div>
            <div className="gallery-source">
              {gallerySource}
            </div>
          </a>;
      })
    }else{
      return items.map( (item, index) => {

        let gallerySource = "";


        if(item.source.type === "image") {
          gallerySource = <img src={item.source.src} alt="" />
        }

        if(item.source.type === "video") {
          gallerySource = <video src={item.source.src} autoPlay={true} />
        }
        
        if(item.isWide === true){
          itemClassName += " gallery-item-large"
          return <a href="#" className={itemClassName} key={item.index}>
            <div className="content">
              <p className="sub-title font-weight-300">{item.category}</p>
              <p className="title">{item.title}</p>
            </div>
            <div className="gallery-source">
              {gallerySource}
            </div>
          </a>;
        }else{
          
          if(index === 0 || index === 2){
            let step = index === 0 ? 1 : -1;
            
            let gallerySource2 = "";

            if (items[index + step].source.type === "image") {
              gallerySource2 = <img src={items[index+step].source.src} alt="" />
            }

            if (items[index + step].source.type === "video") {
              gallerySource2 = <video src={items[index+step].source.src} autoPlay={true} />
            }

            return <div className="gallery-item-group" key={item.index}>
              <a href="#" className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{item.category}</p>
                  <p className="title">{item.title}</p>
                </div>
                <div className="gallery-source">
                  {gallerySource}
                </div>
              </a>
              <a href="#" className="gallery-item">
                <div className="content">
                  <p className="sub-title font-weight-300">{items[index+step].category}</p>
                  <p className="title">{items[index+step].title}</p>
                </div>
                <div className="gallery-source">
                  {gallerySource2}
                </div>
              </a>
            </div>
          }
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

        <div className="main-text-container">
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

      <div className="social">
        <div className="main-text-container">
          <h1 className="text-large">BMW ON THE SOCIAL WEB</h1>        
          <h3 className="text-normal font-weight-300">Become part of the BMW community</h3>
        </div>
      </div>
        

      </div>
    );
  }
}

export default App;
