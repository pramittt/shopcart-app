//Dependencies
import React from "react";
import { useParams } from "react-router-dom";
//Internals
import "./styles.css";
import ClothesItems from "./ClothesItems";


const Clothes = () => {
  const { section } = useParams()
  const heading = section?.toUpperCase() || "All Products"

  return (
    <div className="clothes">
      <div className="clothes-title">
        <h4>{heading}</h4>
      </div>
      <ClothesItems section={section}/>
    </div>
  );
};

export default Clothes;
