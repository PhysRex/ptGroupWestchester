import React from 'react';

import { Board } from '.';

/**
 * @param {object} props The props for this component
 * @returns {jsx} The Component holding the board game tiles
 */
export const PiecesContainer = ({rows, cols, ...rest}) => (
  <Board 
    cols={rows}
    rows={cols}
  />
);

export default PiecesContainer;
