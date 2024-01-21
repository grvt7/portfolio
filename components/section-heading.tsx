import React, { FC } from "react";

interface SectionHeading {
  heading: string;
}

const SectionHeading: FC<SectionHeading> = ({ heading }) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">{heading}</h2>;
};

export default SectionHeading;
