import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import OutlineBtn from "../button/Outline";
import PrimaryBtn from "../button/primary";
import Link from "next/link";

interface IOMCard {
  name: string;
  description: string;
  image: StaticImageData;
  ctaType?: "primary" | "outline";
  ctaLink?: string;
}

const OMCard: React.FC<IOMCard> = ({
  name = "",
  description = "",
  image,
  ctaType = "outline",
  ctaLink = "#",
}) => {
  const CTA = () =>
    ctaType === "outline" ? (
      <OutlineBtn children="View Sample Template" />
    ) : (
      <PrimaryBtn children="View Sample Template" />
    );
  return (
    <div className="om__card">
      <Image className="om__card__image" src={image} alt="" />
      <div className="om__card__info">
        <h3>{name}</h3>
        <h4 style={{ minHeight: "37px" }}>{description}</h4>
      </div>
      <div className="om__card__cta">
        <div
          style={{ textAlign: "center", padding: "0 20px", marginTop: "auto" }}
        >
          <Link href={ctaLink}>
            <CTA />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OMCard;
