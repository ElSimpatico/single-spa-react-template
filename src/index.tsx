import React from 'react';
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react';

import { App } from './App';

const lifecycles = SingleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div className="mt-16">Error</div>;
    },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
