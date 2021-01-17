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
  easeLinear,
} from 'd3'

export const LineChart = () => {
  const svgRef = useRef()
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul']

  const cities = [
    {
      year: 'post covid',
      data: [25, 30, 45, 60, 20, 65, 75],
    },
    {
      year: 'covid',
      data: [0, 50, 20, 90, 50, 20, 50],
    },
  ]
  const width = 700,
    height = 500
  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleLinear()
      .domain([0, 6])
      .range([0, width - 100])

    const yScale = scaleLinear().domain([0, 150]).range([height, 0])

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
      .domain(cities.map((city) => city.year))
      .range(['#F70123', '#003E1F'])

    /* 
      De tooltip line begint op 0.5 en neemt stappen van 1
      Dus 0.5(Januari) naar 1.5 (Februari)

      Om dagen te berekenen moeten we ff een formule scrhrijven.
      Een hele maand is gelijk aan 1 stap.
      Dus 1 is gelijk aan 30

      We moeten de dag delen door 30 en de uitkomsten optellen 
      met de stap
      */
    tooltipLine
      .attr('stroke', 'lightgray')
      .attr('x1', xScale(1.5))
      .attr('x2', xScale(1.5))
      .attr('y1', 50)
      .attr('y2', height - 20)

    svg
      .append('text')
      .attr('y', 60) //magic number here
      .attr('x', function () {
        return xScale(1.6)
      })
      .attr('text-anchor', 'begin')
      .attr('class', 'test')
      .text('Ingang maatregelen')

    svg
      .selectAll('.line')
      .data([cities[0], cities[1]])
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value.data))
      .attr('fill', 'none')
      .attr('stroke', (value) => color(value.year))
      .style('transform', 'translate(50px, -20px)')
  }, [cities])

  return (
    <div className="line-chart-container">
      <ul className="legenda">
        <li>
          <div></div>2019
        </li>
        <li>
          <div></div>2020
        </li>
      </ul>
      <p className="x-axis-label">NO2</p>
      <svg ref={svgRef} className="line-chart" width={width} height={height}>
        <g className="container" transform={`translate(${50}, ${-20})`}>
          <g className="x-axis" />
          <g className="y-axis" />
        </g>
      </svg>
    </div>
  )
}

LineChart.propTypes = {
  data: PropTypes.array,
  margin: PropTypes.number.isRequired,
}
