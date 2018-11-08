import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'

import _ from 'lodash';

/**
 * Makes a 2D Matrix of dimensions rows x cols
 * @param {number} rows Number of Rows
 * @param {number} cols Number of Columns
 * @returns {array} The board as represented in an array of arrays
 */
const makeBoard = (rows, cols) => {
  const board = [...Array(rows)];
  for (let i = 0; i < rows; i++) {
    board[i] = [...Array(cols)];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
    }
  }
  return board;
};


class Board extends Component {
  state = {
    boardMap: makeBoard(this.props.rows, this.props.cols),
    activeTile: undefined,
  }

  componentDidMount() {
    // this.setState(prevState => ({
    //   boardMap: makeBoard(this.props.rows, this.props.cols),
    // }));
  }

  isTileActive = (row, col) => !!this.state.boardMap[row][col];

  rowStyle = () => ({
    height: `${this.props.unitDimension}px`,
  });

  columnStyle = (color, isActive = false) => ({
    // border: `1px solid ${color}`,
    padding: 0,
    width: `${this.props.unitDimension}px`,
    ...(isActive && {background: `${color}`}),
    textAlign: 'center',
    userSelect: 'none',
  });

  tileClick = (e, row, col) => {
    const newBoardMap = _.cloneDeep(this.state.boardMap);
    newBoardMap[row][col] = newBoardMap[row][col] ? 0 : 1;
    console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('tile clicked!');
    // console.log('e.target: ', e.target);
    console.log('row: ', row);
    console.log('col: ', col);
    // console.log('this.state.boardMap: ', this.state.boardMap);
    // console.log('newBoardMap: ');
    // console.table(newBoardMap);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ');
    this.setState(prevState => ({
      boardMap: newBoardMap,
    }));
  }

  render () {
    const {
      cols,
      rows,
      unitDimension,
    } = this.props;
    
    return (
      <Container
        // text
        style={{width: `${cols*unitDimension}px`}}
      >
        <Grid
          columns={cols}
          celled
          centered
          style={{maxWidth: `${cols*unitDimension}px`}}
        >
          {
            [...Array(rows)].map((row, rowDex) =>
              <Grid.Row
                style={this.rowStyle()}
                key={rowDex}
              >
                {
                  [...Array(cols)].map((col, colDex)=> 
                    <Grid.Column
                      key={colDex}
                      style={this.columnStyle('blanchedalmond', this.isTileActive(rowDex, colDex))}
                      onClick={_.partialRight(this.tileClick, rowDex, colDex)}
                    >
                     { this.isTileActive(rowDex, colDex) && 'x' } 
                    </Grid.Column>
                  )
                }
              </Grid.Row>
            )
          }
        </Grid>
      </Container>
    );
  }
}


export default Board;
