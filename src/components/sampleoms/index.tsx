import React from "react";
import OMCard from "./OMCard";
import Image from "next/image";
import retailom from "../../assets/retailom.png";
import multifamilyom from "../../assets/multifamilyom.png";
import officeom from "../../assets/officeom.png";
import bg2 from "../../assets/bg2.png";

const SampleOMS: React.FC = () => {
  return (
    <div style={{ position: "relative" }} className="sample__oms">
      <Image
        alt="bg"
        src={bg2}
        placeholder="blur"
        quality={100}
        fill
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div className="sample__oms__container__card">
        <div className="sample__oms__title">
          <h3>Sample OMs created with our platform</h3>
        </div>
        <div className="sample__oms__grid">
          <OMCard
            image={retailom}
            name="Retail OM"
            description="strip centers, street retail, vehicle related, and more."
            ctaType="primary"
            ctaLink="#"
          />
          <OMCard
            image={multifamilyom}
            name="Multi-Family OM"
            description="garden, low-rise, mid-rise, high-rise."
            ctaLink="#"
          />
          <OMCard
            image={officeom}
            name="Office OM"
            description="all classes of office buildings, loft/creative, medical."
            ctaLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default SampleOMS;
