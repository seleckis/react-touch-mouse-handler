import React, {Component} from 'react';

import TouchMouseHandler from 'react-touch-mouse-handler'


const Button = ({events}) => (
    <button {...events}>Click me</button>
);

export default class App extends Component {
    handleAction = (eventType) => {
		if (eventType === 'touch') {
			console.log('isTouch');
		}
        if (eventType === 'mouse') {
            console.log('isMouse');
		}
	}
    render() {
        return (
            <TouchMouseHandler handleAction={this.handleAction}>
                {(events) => (
                    <Button events={events}>Click me</Button>
                )}
            </TouchMouseHandler>
        );
    }
}
