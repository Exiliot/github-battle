const React = require('react');
const PropTypes = React.PropTypes;

const UserDetailsWrapper = function (props) {
    return (
        <div className="col-sm-6">
            <p className="lead">{ props.header }</p>
            { props.children }
        </div>
    );
};

module.exports = UserDetailsWrapper;
