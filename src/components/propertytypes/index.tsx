import React from "react";
import PropertyTypeCard from "./PropertyTypeCard";
import retail from "../../assets/icons/retail.svg";
import multifamily from "../../assets/icons/multifamily.svg";
import office from "../../assets/icons/office.svg";
import industrial from "../../assets/icons/industrial.svg";
import hotel from "../../assets/icons/hotel.svg";
import land from "../../assets/icons/land.svg";

const PropertyTypes: React.FC = () => {
  return (
    <div className="propert__types">
      <div className="propert__types__title">
        <h3>Create OMs and Ads For</h3>
        <h4>Various Real Estate Property Types</h4>
      </div>
      <div className="property__type__grid">
        <PropertyTypeCard label="Retail" image={retail} />
        <PropertyTypeCard label="Multi-family" image={multifamily} />
        <PropertyTypeCard label="Office" image={office} />
        <PropertyTypeCard label="Industrial" image={industrial} />
        <PropertyTypeCard label="Hotel" image={hotel} />
        <PropertyTypeCard label="Land" image={land} />
      </div>
    </div>
  );
};

export default PropertyTypes;
