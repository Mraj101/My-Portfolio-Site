import React from 'react';
import { Circle } from 'react-circle';

const SkillProgressBar = ({ percentage }) => {
  return (
    <Circle
      progress={percentage}
      animate={true}
      animationDuration="1s"
      responsive={true}
      size={80}
      lineWidth={12}
      progressColor="#1abc9c"
      bgColor="#ecedf0"
      textColor="#6b778c"
      textStyle={{
        font: 'bold 5rem Helvetica, Arial, sans-serif'
      }}
      percentSpacing={10}
      roundedStroke={true}
      showPercentage={true}
      showPercentageSymbol={true}
    />
  );
};

export default SkillProgressBar;
