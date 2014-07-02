import React from 'react';
import ReactRouter from 'react-nested-router';

import App from './app';
import PreInbox from './preinbox';
import PreDashboard from './predashboard';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var router = Router(
    Route({handler:App},
        Route({name:"dashboard", path:"dashboard", handler:PreDashboard},
            Route({name:"inbox", path:"dashboard/inbox", handler:PreInbox})
        )
    )
);

export default router;
