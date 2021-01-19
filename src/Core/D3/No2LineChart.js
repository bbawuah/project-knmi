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

export const NO2LineChart = ({ data }) => {
  const svgRef = useRef()
  const months = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun']

  const width = 700,
    height = 500
  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleLinear()
      .domain([0, 5])
      .range([0, width - 100])

    const yScale = scaleLinear().domain([0, 75]).range([height, 0])

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

    const verticleLine = svg.append('line').style('stroke-dasharray', '7, 7')

    const color = scaleOrdinal(schemeCategory10)
      .domain(data.data.map((city) => city.year))
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
    verticleLine
      .attr('stroke', 'lightgray')
      .attr(
        'x1',
        xScale(data.monthOfMeasures - 1 + data.dayOfMeasures / 30) + 50
      )
      .attr(
        'x2',
        xScale(data.monthOfMeasures - 1 + data.dayOfMeasures / 30) + 50
      )
      .attr('y1', 50)
      .attr('y2', height - 20)

    if (data.hadLockdown) {
      const lockdownLine = svg.append('line').style('stroke-dasharray', '7, 7')
      lockdownLine
        .attr('stroke', '#2C3239')
        .attr(
          'x1',
          xScale(data.monthOfLockdown - 1 + data.dayOfLockdown / 30) + 50
        )
        .attr(
          'x2',
          xScale(data.monthOfLockdown - 1 + data.dayOfLockdown / 30) + 50
        )
        .attr('y1', 120)
        .attr('y2', height - 20)

      svg
        .append('text')
        .attr('y', 130) //magic number here
        .attr('x', function () {
          return (
            xScale(data.monthOfLockdown - 1 + data.dayOfLockdown / 30 + 0.1) +
            50
          )
        })
        .attr('text-anchor', 'begin')
        .attr('class', 'test')
        .text('Ingang lockdown')
    }

    svg
      .append('text')
      .attr('y', 60) //magic number here
      .attr('x', function () {
        return (
          xScale(data.monthOfMeasures - 1 + data.dayOfMeasures / 30 + 0.1) + 50
        )
      })
      .attr('text-anchor', 'begin')
      .attr('class', 'test')
      .text('Ingang maatregelen')

    svg
      .selectAll('.line')
      .data([data.data[0], data.data[1]])
      .join('path')
      .attr('class', 'line')
      .attr('d', ({ value }) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', (value) => color(value.year))
      .style('transform', 'translate(50px, -20px)')
  }, [data])

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
      <p className="x-axis-label">NO2 (ug/m3)</p>
      <svg ref={svgRef} className="line-chart" width={width} height={height}>
        <g className="container" transform={`translate(${50}, ${-20})`}>
          <g className="x-axis" />
          <g className="y-axis" />
        </g>
      </svg>
    </div>
  )
}

NO2LineChart.propTypes = {
  data: PropTypes.object,
}
