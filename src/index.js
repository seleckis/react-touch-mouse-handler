/**
 * @class ExampleComponent
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TouchMouseHandler extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        handleAction: PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.state = {
            isTouchStarted: false
        };
    }
    onEvent = (e) => {
        const {isTouchStarted} = this.state;
        const {handleAction} = this.props;
        let eventType = '';

        if (!isTouchStarted) {
            if (e.type === 'touchstart') {
                eventType = 'touch';
                this.setState({
                    isTouchStarted: true
                });
            } else if (e.type === 'mouseenter') {
                eventType = 'mouse';
            }
        } else {
            e.preventDefault();
        }
        if (e.type === 'touchend') {
            this.setState({
                isTouchStarted: false
            });
        }
        handleAction(eventType);
    }
    render() {
        const {children} = this.props;

        return children({
            onTouchStart: this.onEvent,
			onTouchEnd: this.onEvent,
			onMouseEnter: this.onEvent
        });
    }
}
