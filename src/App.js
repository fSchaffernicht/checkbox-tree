import React, { Component } from 'react';
import './App.css'
import ChechboxTree from './CheckboxTree'

const children1 = [
  {
    id: '1-1',
    label: '1-1 child',
    checked: true
  },
  {
    id: '1-2',
    label: '1-2 child',
    checked: true,
    children: [
      {
        id: '2-1',
        label: '2-1 child',
        checked: true
      },
      {
        id: '2-2',
        label: '2-2 child',
        checked: true,
      },
      {
        id: '2-3',
        label: '2-3 child',
        checked: true
      },
      {
        id: '2-4',
        label: '2-4 child',
        checked: true
      },
    ]
  },
  {
    id: '1-3',
    label: '1-3 child',
    checked: false
  },
  {
    id: '1-4',
    label: '1-4 child',
    checked: false
  },
]

const data = [
  {
    id: 1,
    label: '1 label',
    checked: true,
    children: children1
  }
]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <ChechboxTree
          data={data}
        />
      </div>
    );
  }
}

export default App;
