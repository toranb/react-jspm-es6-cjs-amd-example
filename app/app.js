import React from 'react';
import ReactRouter from 'react-nested-router';

var Link = ReactRouter.Link;

var App = React.createClass({displayName: 'App',
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Partial App"),
        React.DOM.ul(null, 
          React.DOM.li(null, Link( {to:"dashboard"}, "Dashboard"))
        ),
        this.props.activeRoute
      )
    );
  }
});

export default App;
