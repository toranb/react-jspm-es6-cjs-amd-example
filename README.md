This example shows react / react-nested-router in action w/ help from jspm

Watch the network tab to see the following when you click dashboard/then inbox

    jspm will load an ES6 module on demand app/dashboard
    jspm will then load a CJS module ajax-mixin
    jspm will then load a AMD module promise-mixin

**To run the react app locally**

    npm install jspm

    jspm install react=github:reactjs/react-bower@0.10.0 -o "{main: 'react', format: 'global'}" -f
    jspm install react-nested-router=github:toranb/toranb-react-nested-router
    jspm install ajax-mixin=github:toranb/toranb-react-cjs-rsvp-ajax-mixin
    jspm install rsvp=github:tildeio/rsvp.js@3.0.7 -o "{main: 'lib/rsvp.js'}"

    cd jspm_packages/github/tildeio/rsvp.js@3.0.7
    mv rsvp.js rsvp.js.js

    jspm bundle app/router build.js

    python -m SimpleHTTPServer 3000

    visit http://localhost:3000 to see the running app
