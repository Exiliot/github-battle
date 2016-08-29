const React = require('react');
const PropTypes = React.PropTypes;
const transparentBg = require('../styles').transparentBg;

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={ transparentBg }>
            <h1>{ props.header }</h1>
            <div className="col-sm-12">
                <form onSubmit={ props.onSubmitUser }>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="GitHub username"
                            onChange={ props.onUpdateUser }
                            value={ props.username }
                            type="text"
                            />
                    </div>
                    <div className="from-group">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
