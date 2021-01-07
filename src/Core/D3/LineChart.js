import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  select,
  line,
  curveCardinal,
  min,
  max,
  axisLeft,
  scaleLinear,
  axisBottom,
} from 'd3';

export const LineChart = ({ width, height, margin }) => {
  const svgRef = useRef();
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);

    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select('.y-axis').style('padding-left', '100px').call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return (
    <svg
      ref={svgRef}
      className="line-chart"
      width={width}
      height={height}
      margin={margin}
    >
      <g className="container">
        <g className="x-axis" />
        <g className="y-axis" />
      </g>
    </svg>
  );
};

LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  margin: PropTypes.number.isRequired,
};
