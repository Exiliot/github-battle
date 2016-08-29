const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');
const Raven = require('raven-js');

const sentryKey = 'xxx';
const sentryApp = 'xxx';
const sentryURL = `https://${ sentryKey }@app.getsentry.com/${ sentryApp }`;

const _APP_INFO = {
    name: 'GitHub Battle',
    branch: 4,
    version: '1.0'
};

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install();

window.onerror = function () {
    Raven.showReportDialog();
};

const HelloWorld = React.createClass({
    render: function () {
        return (
            <div>Hello, { this.props.name }!</div>
        );
    }
});

ReactDOM.render(
    routes,
    document.getElementById('app')
);
