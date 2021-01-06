import React from 'react';
import { select, selectAll } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';

export const Axis = ({ scale, orient, ticks, transform }) => {
  // this.renderAxis();
  // this.updateAxis();

  function renderAxis() {
    const node = this.ref.current;
    let axis;

    if (orient === 'bottom') {
      axis = axisBottom(scale);
    }
    if (orient === 'left') {
      axis = axisLeft(scale).ticks(ticks);
    }
    select(node).call(axis);
  }
  function updateAxis() {
    const t = transition().duration(1000);

    if (orient === 'left') {
      const axis = axisLeft(scale).ticks(ticks);
      selectAll(`.${orient}`).transition(t).call(axis);
    }
  }

  return (
    <g ref={this.ref} transform={transform} className={`${orient} axis`} />
  );
};

Axis.propTypes = {
  scale: PropTypes.number.isRequired,
  orient: PropTypes.number.isRequired,
  ticks: PropTypes.number.isRequired,
  transform: PropTypes.string.isRequired,
};

export default Axis;
