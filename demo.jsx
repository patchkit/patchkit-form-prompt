import React from 'react'
import ModalBtn from 'patchkit-modal/btn'
import FormPrompt from './index'

export default class FormPromptDemo extends React.Component {
  render() {
    const onSubmit = (name, cb) => { console.log('submit', name); cb() }
    return <div>
      <h1>patchkit-form-prompt</h1>
      <section className="form-prompt">
        <header>&lt;FormPrompt prompt="Please enter your name:"&gt;</header>
        <div className="content">
          <ModalBtn className="fullheight" nextLabel="OK" Form={FormPrompt} formProps={{ prompt: <h1>Please enter your name:</h1>, placeholder: 'bob', onSubmit: onSubmit }}><a className="btn highlighted">Click to open</a></ModalBtn>
        </div>
      </section>
    </div>
  }
}