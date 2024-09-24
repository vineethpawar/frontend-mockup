import React from "react";
import Image from "next/image";
import bg from "../../assets/bg.png";
import play from "../../assets/icons/play.svg";
import arrowRight from "../../assets/icons/arrowright.svg";
import heroImg from "../../assets/heroimage.png";
import PrimaryBtn from "../button/Primary";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        alt="bg"
        src={bg}
        placeholder="blur"
        quality={100}
        fill
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div className="hero__container">
        <div className="hero__container__info" style={{ flex: 1 }}>
          <h3>
            <b>Sell CRE Faster</b> with OMs & Ads created in <b>minutes</b>
          </h3>
          <h4>
            Create beautiful Commercial Real Estate Offering Memorandums, Flyers
            & Ads in minutes with our AI powered platform
          </h4>
          <div className="hero__container__info__cta">
            <PrimaryBtn>
              <div
                className="hero__cta"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <h4>Try for free</h4>
                <Image src={arrowRight} alt="" />
              </div>
            </PrimaryBtn>

            <Link href="#">
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <Image src={play} alt="" />

                <h4 style={{ color: "#2F2F2F", opacity: 0.7 }}>Watch Demo </h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="" style={{ flex: 1 }}>
          <Image
            style={{ width: "100%", maxWidth: "550px", height: "auto" }}
            src={heroImg}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
