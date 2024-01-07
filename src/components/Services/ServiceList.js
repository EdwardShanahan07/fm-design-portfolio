import { Component } from "react";
import PatternApps from "./pattern-apps.svg";
import PatternGraphic from "./pattern-graphic-design.svg";
import PatternIllustrations from "./pattern-illustrations.svg";
import PatternMotion from "./pattern-motion-graphics.svg";
import PatternPhotography from "./pattern-photography.svg";
import PatternUI from "./pattern-ui-ux.svg";
import "./ServiceList.css";

class ServiceList extends Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          id: "1",
          name: "Graphic Design",
          img: PatternGraphic,
        },
        {
          id: "2",
          name: "UI/UX",
          img: PatternUI,
        },
        {
          id: "3",
          name: "Apps",
          img: PatternApps,
        },
        {
          id: "4",
          name: "Illustrations",
          img: PatternIllustrations,
        },
        {
          id: "5",
          name: "Photography",
          img: PatternPhotography,
        },
        {
          id: "6",
          name: "Motion Graphics",
          img: PatternMotion,
        },
      ],
    };
  }

  render() {
    return (
      <div className="ServiceList">
        {this.state.services.map((service) => {
          return (
            <div key={service.id} className={`service service-${service.id}`}>
              <img src={service.img} alt={`${service.name} Pattern`} />

              <h3>{service.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ServiceList;
