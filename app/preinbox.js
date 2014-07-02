import React from 'react';
import AsyncReactComponent from './component';

var PreInbox = React.createClass({displayName: 'PreInbox',
    mixins: [AsyncReactComponent],
    bundle: './app/inbox',
    preRender: function() {
      return React.DOM.div(null, "Loading inbox...")
    }
});

export default PreInbox;
