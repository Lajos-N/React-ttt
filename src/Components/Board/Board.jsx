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
      <table>
        <Row />
        <Row />
        <Row />
      </table>
    </>
  )
}
