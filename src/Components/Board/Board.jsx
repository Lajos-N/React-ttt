import React from 'react'
import Row from '../Row/Row'

export default function Board() {
  const board = [
    ['X', null, null],
    ['O', 'O', 'X'],
    ['X', null, null],
  ];

  return (
    <>
    <div>
      <Row />
    </div>
    <div>
      <Row />
    </div>
    <div>
      <Row />
    </div>
    </>
  )
}
