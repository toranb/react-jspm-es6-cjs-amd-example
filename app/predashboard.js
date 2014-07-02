import React from 'react';
import AsyncReactComponent from './component';

var PreDashboard = React.createClass({displayName: 'PreDashboard',
    mixins: [AsyncReactComponent],
    bundle: './app/dashboard',
    preRender: function() {
        return React.DOM.div(null, "Loading dashboard...")
    }
});

export default PreDashboard;
