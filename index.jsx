import React from 'react'

export default class Prompt extends React.Component {
  static propTypes = {
    setIsValid: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    className: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  onChange(e) {
    this.setState({ value: e.target.value })
    this.props.setIsValid(!!e.target.value)
  }

  submit(cb) {
    this.props.onSubmit(this.state.value, cb)
  }

  render() {
    return <div className={this.props.className}>
      {this.props.prompt}
      <form className="block" onSubmit={e=>e.preventDefault()}>
        <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} placeholder={this.props.placeholder||''} />
      </form>
    </div>
  }
}
