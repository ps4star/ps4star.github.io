import { render } from '@testing-library/react';
import {Component, useState} from 'react'
import './TypewriterBlock.scss';

export default class TypewriterBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msglen: 0,
            skipTimer: 0
        }

        setInterval(() => {
            const thisChar = this.props.msg.charAt(this.state.msglen + 1)
            if (['=', '^'].indexOf(thisChar) > -1) {
                this.setState({
                    skipTimer: (thisChar == '^') ? 8 : 32,
                    msglen: this.state.msglen + 1
                })
            }
            if (this.state.skipTimer > 0) {
                this.setState({
                    skipTimer: this.state.skipTimer - 1
                })
                return
            }
            this.setState({
                msglen: this.state.msglen + 1
            })
        }, 60)
    }

    render() {
        return (
            <div className='TypewriterBlock'>
                <pre className='line-l'>{this.props.msg.slice(0, this.state.msglen).replace(/(\^|\=)/g, '')}<span class='anim-typewriter'>a</span></pre>
            </div>
        )
    }
}