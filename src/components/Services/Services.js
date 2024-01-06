import React from "react";
import PatternApps from "./pattern-apps.svg";
import PatternGraphic from "./pattern-graphic-design.svg";
import PatternIllustrations from "./pattern-illustrations.svg";
import PatternMotion from "./pattern-motion-graphics.svg";
import PatternPhotography from "./pattern-photography.svg";
import PatternUI from "./pattern-ui-ux.svg";

const Services = () => {
  return (
    <div className="Services">
      <div className="service service-1">
        <img src={PatternGraphic} alt="Graphic Pattern" />

        <h3>Graphic design</h3>
      </div>

      <div className="service service-2">
        <img src={PatternUI} alt="UI/UX Pattern" />

        <h3>UI/UX</h3>
      </div>

      <div className="service service-3">
        <img src={PatternApps} alt="Apps Pattern" />

        <h3>Apps</h3>
      </div>

      <div className="service service-4">
        <img src={PatternIllustrations} alt="Illustrations Pattern" />

        <h3>Illustrations</h3>
      </div>

      <div className="service service-5">
        <img src={PatternPhotography} alt="Photography Pattern" />

        <h3>Photography</h3>
      </div>

      <div className="service service-6">
        <img src={PatternMotion} alt="Motion Pattern" />

        <h3>Motion Graphics</h3>
      </div>
    </div>
  );
};

export default Services;
