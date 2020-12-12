import React, {Component} from "react";
import ReactDOM from 'react-dom'
import './style.css'

const modalElement = document.getElementById('modal')


export default class ClassModal extends Component {

  constructor(props) {

    super(props);
    this.el = document.createElement('div')
    this.state = {isOpen: false}
  }

  componentDidMount() {
    modalElement.appendChild(this.el)
  }

  componentWillUnmount() {
    modalElement.removeChild(this.el)
    this.el.remove()
  }

  componentDidUpdate(prevProps , prevState) {
  }

  render() {
    const {children} = this.props

    return(
      <div className="modal__container">
        <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>Open</button>
        {this.state.isOpen && ReactDOM.createPortal(
          <div className="modal">
            <span onClick={() => this.setState({isOpen: false})}>X</span>
            {children}
          </div>,
          this.el
        )}
      </div>
    )
  }
}