import React from "react";
import { experiences } from "../constants/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <section id="experience">
      <div>
        <h1 className="text-center text-5xl pt-10 font-bold"> Experiences</h1>
        <VerticalTimeline animate={true} layout="1-column">
          {experiences.map((experience) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                position="left"
                date={experience.time}
              >
                <div>
                  <h2 className="vertical-timeline-element-title">
                    {experience.role}
                  </h2>
                  <h2>{" @ " + experience.company}</h2>
                </div>
                {experience.tools.length > 0 && 
                (<p className="vertical-timeline-element-subtitle">
                  Tools: {experience.tools.join(", ")}
                </p>)}
                <div>{experience.desc}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}