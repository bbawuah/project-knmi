import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  select,
  axisLeft,
  scaleLinear,
  scaleBand,
  axisBottom,
  scaleOrdinal,
  schemeCategory10,
} from 'd3'

export const BarChart = ({ data }) => {
  const svgRef = useRef()
  const years = ['2019', '2020']

  const width = 300,
    height = 300
  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleBand()
      .domain([0, 1])
      .range([0, width - 100])
      .padding(0.2)

    const yScale = scaleLinear()
      .domain([0, data.quarters[0] + 20000])
      .range([height, 0])

    const xAxis = axisBottom(xScale)
      .ticks(years.length)
      .tickFormat((index) => years[index])

    svg
      .select('.x-axis')
      .style('transform', `translateY(${height}px)`)
      .style('color', `#fff`)
      .call(xAxis)

    const yAxis = axisLeft(yScale)
    svg
      .select('.y-axis')
      .style('padding-left', '100px')
      .style('color', `#fff`)
      .call(yAxis)

    const color = scaleOrdinal(schemeCategory10)
      .domain(data.quarters.map((_, index) => index))
      .range(['#ffffff', '#CAC9C9'])

    svg
      .selectAll('.bar')
      .data(data.quarters)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (value, index) => xScale(index) + 50)
      .attr('y', (v, i) => yScale(v) + 10)
      .attr('width', xScale.bandwidth())
      .attr('fill', (value, index) => color(index))
      .attr('height', (value) => height - yScale(value))
  }, [data])

  return (
    <div className="bar-chart-container">
      <p className="x-axis-label">Aantal vliegbewegingen (januari tot juni)</p>
      <svg
        ref={svgRef}
        className="bar-chart"
        width={width}
        height={height + 50}
      >
        <g className="container" transform={`translate(${50}, ${10})`}>
          <g className="x-axis" />
          <g className="y-axis" />
        </g>
      </svg>
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.object,
}
