import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats"
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets"
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers"
      },
      {
        title: "women's",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/women's"
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens"
      }
    ]
  };

  render() {
    let sections = this.state.sections.map(({ title, id, imageUrl, size }) => (
      <MenuItem 
        key={id} 
        title={title} 
        imageUrl={imageUrl} 
        size={size} />
    ));

    return <div className="directory-menu">{sections}</div>;
  }
}

export default Directory


