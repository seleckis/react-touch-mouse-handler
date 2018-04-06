# react-touch-mouse-handler

> Higher Order Components for touch and mouse events control.

[![NPM](https://img.shields.io/npm/v/react-touch-mouse-handler.svg)](https://www.npmjs.com/package/react-touch-mouse-handler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component is useful for better touchscreen and mouse events recognition. Especially, if you need to handle different actions for hybrid devices.

For example, you have a navigation bar with dropdowns. You need to navigate to some url when clicking on a link, open dropdown menu on hover, as well as open dropdown when tapping the link by finger. Commonly, tapping on hybrid devices opens dropdown for a moment and then navigates to the url defined in the link. Because `click` event follows the `mouseenter` and `touchstart` events. Check all mouse and touch events sequence in my [codepen](https://codepen.io/seleckis/pen/rydXPg) test ground.

## Install

```bash
npm install --save react-touch-mouse-handler
```

## Usage

To make everything working you need to:

1. Create a method which receives event type argument (myAction in example).
1. Wrap your component in a function inside `TouchMouseHandler` component. This child function accepts events argument which should be passed your component.
1. Pass these events farther to the DOM element.
1. Write different actions for different event types.

```jsx
import React, { Component } from 'react'

import TouchMouseHandler from 'react-touch-mouse-handler';

export default class App extends Component {
  myAction = (eventType) => {
    if (eventType === 'touch') {
      // do something if it was touch event (tap)
    }
    if (eventType === 'mouse') {
      // do something if it was mouse event (mouseenter)
    }
  }
  render() {
    return (
      <TouchMouseHandler handleAction={this.myAction}>
        {(events) => (
          <Button events={events}>Click me</Button>
        )}
      </TouchMouseHandler>
    );
  }
}

const Button = ({events}) => (
  <button {...events}>Click me</button>
);
```

If you have ideas for improvements, please open an issue.


## License

MIT © [seleckis](blob/master/LICENSE)
