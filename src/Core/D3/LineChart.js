import React from 'react';
import PropTypes from 'prop-types';
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

export const LineChart = ({ data, width, height, margin }) => {
  const parentWidth = 500;

  const margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const ticks = 5;
  const t = transition().duration(1000);

  const xScale = scaleBand()
    .domain(data.map((d) => d.name))
    .rangeRound([0, width])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.value))
    .range([height, 0])
    .nice();

  const lineGenerator = line()
    .x((d) => xScale(d.name))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);

  return (
    <svg className="line-chart" width={width} height={height}>
      <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
      <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
      <path d={line(data)} />
      <g className="axis-labels">{xTicks}</g>
      <g className="axis-labels">{yTicks}</g>
    </svg>
  );
};

LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  margin: PropTypes.number.isRequired,
};
