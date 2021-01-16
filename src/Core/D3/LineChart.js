import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  select,
  line,
  curveCardinal,
  axisLeft,
  scaleLinear,
  axisBottom,
} from 'd3'

export const LineChart = ({ width, height }) => {
  const svgRef = useRef()
  const dataLineOne = [25, 30, 45, 60, 20, 65, 75]
  const dataLineTwo = [0, 50, 20, 90, 50, 20, 50]
  useEffect(() => {
    const svg = select(svgRef.current)

    svg.attr('width', width).attr('height', height)

    const xScale = scaleLinear()
      .domain([0, dataLineOne.length - 1])
      .range([0, width])

    const yScale = scaleLinear().domain([0, 150]).range([height, 0])

    const xAxis = axisBottom(xScale)
      .ticks(dataLineOne.length)
      .tickFormat((index) => index + 1)

    svg
      .select('.x-axis')
      .style('transform', `translateY(${height}px)`)
      .call(xAxis)

    const yAxis = axisLeft(yScale)
    svg.select('.y-axis').style('padding-left', '100px').call(yAxis)

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal)

    const tooltipLine = svg.append('line')

    tooltipLine
      .attr('stroke', 'lightgray')
      .attr('x1', xScale(4))
      .attr('x2', xScale(4))
      .attr('y1', 0)
      .attr('y2', height - 20)

    svg
      .selectAll('.line')
      .data([dataLineOne, dataLineTwo])
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .style('transform', 'translate(50px, -20px)')
  }, [dataLineOne])

  return (
    <svg ref={svgRef} className="line-chart" width={width} height={height}>
      <g className="container" transform={`translate(${50}, ${-20})`}>
        <g className="x-axis" />
        <g className="y-axis" />
      </g>
    </svg>
  )
}

LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array,
  margin: PropTypes.number.isRequired,
}
