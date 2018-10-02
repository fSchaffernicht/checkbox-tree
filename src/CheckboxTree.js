import React from 'react'

const renderCheckboxes = (depth, onChange) => {
  depth++
  return (el, index) => {
    return (
      <div style={{ marginLeft: `${depth}rem` }} key={index}>
        <input            
          type='checkbox'
          checked={el.checked}
          onChange={() => onChange(el)}
        />
        {el.label}
        {
          el.parent && <div>c</div>
        }
        {
          el.children && el.children.length > 0 && el.children.map(renderCheckboxes(depth, onChange))
        }
      </div>
    )
  }
}

const changeDataCheck = changed => (el) => {
  console.log('el', el, changed)
  const result = {
    ...el
  }

  if (changed.id === el.id && !changed.children) {
    result.checked = !changed.checked
  } else if (changed.children && el.children && el.children.length > 0 && changed.id === el.id) {
    result.checked = !changed.checked
    result.children = el.children.forEach(x => {
      x.checked = !changed.checked
    })
  }

  if (el.children && el.children.length > 0) {
    result.children = el.children.map(changeDataCheck(changed))
  }

  return result
}

export default class extends React.Component {
  depth = 0
  state = {
    data: this.props.data
  }

  handleChange = (el) => {
    this.setState({
      data: this.state.data.map(changeDataCheck(el))
    })
  }

  render () {
    return this.state.data.map(renderCheckboxes(this.depth, this.handleChange))
  }
}
