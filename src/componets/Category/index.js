import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Category({ options }) {
  return (
    <div className="wrap-categori-TrendigTopics">
      <h2 className="tittleTopics">Trending Topics</h2>
      <div className="wrap-topics">
        {options.map((topics) => {
          return (
            <Link to={`/giffy-app/search/${topics}`} key={topics}>
              {topics}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
