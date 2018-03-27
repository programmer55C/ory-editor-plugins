import React, { Component } from "react"
import Input from "./Input"
import SyntaxHighlight from "react-syntax-highlighter"
import { light } from "react-syntax-highlighter/styles/prism"
import Display from './index.render'
class Form extends Component {
    constructor(props) {
        super(props)
    }

    handleValueChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        
        this.props.onChange({
            [name]: value
        })
    }

    render() {
        const { readOnly, state } = this.props
        const { text, language, lineNumbers } = state

        return (
            
                 readOnly 
                    ? (<Display {...this.props} />)
                    : <Input handleValueChange={this.handleValueChange.bind(this)}
                             text={text}
                             language={language}
                             lineNumbers={lineNumbers}/> 
            
        )
    }
}

export default Form