import React, { useState } from "react";
import data from "../data.json";
import styles from "./final.module.scss";
const ScoreForm = () => {
  const [items] = useState(data);
  return (
    <div className={styles.scoreForm}>
      <div className={styles.innerDiv}>
      <div className={styles.mainFirstDiv}>
        <p>Your Result</p>
        <p className={styles.subDiv}>
          <span style={{ fontSize: "30px" }}>
            <b>76</b>
          </span>
          of 100
        </p>

        <h2>Great</h2>
        <p style={{textAlign:"center"}}>
          you score higher then 65% of the people who have taken this tests.
        </p>
      </div>
      <div className={styles.mainSecondDiv}>
        <h2>Summary</h2>
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: `${item.color}20`,
                padding: "10px",
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
                marginBottom: "7px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.icon}
                alt={item.category}
                style={{ marginRight: "5px" }}
              />
              <h3 style={{ color: item.color, margin: 0 }}>{item.category}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  paddingRight: "20px",
                }}
              >
                <p style={{ margin: 0 }}>
                  <span>
                    <b style={{ fontSize: "20px", paddingRight: "10px" }}>
                      {item.score}
                    </b>
                  </span>{" "}
                  / 100
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.button}>Continue</button>
      </div>
    </div></div>
  );
};
export default ScoreForm;
