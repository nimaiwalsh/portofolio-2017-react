import React from "react";
import { Image, List } from "semantic-ui-react";
import _ from "lodash";
import { css } from "react-emotion";

const icons = {
  css: require("../resources/img/css3-icon.svg"),
  html: require("../resources/img/html5-icon.svg"),
  javascript: require("../resources/img/javascript-icon.svg"),
  react: require("../resources/img/react-icon.svg"),
  webpack: require("../resources/img/webpack-icon.svg"),
  babel: require("../resources/img/babel-icon.svg")
};

const renderIcons = () => {
  return _.map(icons, (value, key) => {
    return (
      <List.Item key={key} className={styles}>
        <Image src={value} />
        <List.Content>
          <span>{key}</span>
        </List.Content>
      </List.Item>
    );
  });
};

const WebIcons = () => {
  return (
    <List horizontal inverted>
      {renderIcons()}
    </List>
  );
};

export default WebIcons;

const styles = css({
  "& img": {
    height: "100px",
    marginBottom: "10px !important",
    borderBorrom: "2px solid white",
    transition: "1s"
  },
  "& img:hover": {
    transform: "rotate(20deg)"
  },
  "& .content": {
    display: "block !important"
  },
  "& .content > span": {
    fontSize: "1.3rem",
    opacity: "0",
    transition: "1s",
    textTransform: "uppercase"
  },
  "&:hover > .content > span": {
    opacity: "1"
  }
});
