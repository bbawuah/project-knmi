import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  select,
  line,
  curveCardinal,
  axisLeft,
  scaleLinear,
  axisBottom,
  scaleOrdinal,
  schemeCategory10,
} from 'd3'
import airportData from '../../airportdata.json'

export const FlightsLineChart = () => {
  const svgRef = useRef()
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun']
  const width = 900,
    height = 500
  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleLinear()
      .domain([0, 5])
      .range([0, width - 100])

    const yScale = scaleLinear().domain([0, 50000]).range([height, 0])

    const xAxis = axisBottom(xScale)
      .ticks(months.length)
      .tickFormat((index) => months[index])

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

    const tooltipLine = svg.append('line').style('stroke-dasharray', '7, 7')

    const color = scaleOrdinal(schemeCategory10)
      .domain(airportData.map(({ city }) => city))
      .range(['#F70123', '#003E1F', '#1535DB', '#F79501'])

    svg
      .selectAll('.line')
      .data(airportData)
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value.data))
      .attr('fill', 'none')
      .attr('stroke', (value) => color(value.city))
      .style('transform', 'translate(50px, -20px)')
  }, [airportData])

  return (
    <div className="flights-line-chart-container">
      <ul className="legenda">
        <li>
          <div></div>
          <span>Amsterdam</span>
        </li>
        <li>
          <div></div>
          <span>Londen</span>
        </li>
        <li>
          <div></div>
          <span>Rome</span>
        </li>
        <li>
          <div></div>
          <span>Madrid</span>
        </li>
      </ul>
      <p className="x-axis-label">Aantal vliegbewegingen 2020</p>
      <svg ref={svgRef} className="line-chart" width={width} height={height}>
        <g className="container" transform={`translate(${50}, ${-20})`}>
          <g className="x-axis" />
          <g className="y-axis" />
        </g>
      </svg>
    </div>
  )
}

FlightsLineChart.propTypes = {
  data: PropTypes.array,
}
