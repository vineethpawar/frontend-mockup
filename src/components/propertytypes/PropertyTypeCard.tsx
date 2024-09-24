import Image, { StaticImageData } from "next/image";
import React from "react";

interface IPropertyTypeCard {
  label: string;
  image: StaticImageData;
}

const PropertyTypeCard: React.FC<IPropertyTypeCard> = ({
  label = "",
  image,
}) => {
  return (
    <div className="property__type__card">
      <Image src={image} height={50} width={50} alt="" />
      <h4 className="property__type__card__text">{label}</h4>
    </div>
  );
};

export default PropertyTypeCard;
