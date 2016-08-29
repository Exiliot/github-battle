const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        console.log('getInitialState');
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentWillMount() {
        console.log('componentWillMount');
    },
    componentDidMount() {
        console.log('componentDidMount');
        const query = this.props.location.query;
        // Fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            });
    },
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    },
    componentWillUnmount() {
        console.log('componentWillUnmount');
    },
    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },
    render() {
        return (
            <ConfirmBattle
                isLoading={ this.state.isLoading }
                onInitiateBattle={ this.handleInitiateBattle }
                playersInfo={ this.state.playersInfo }
            />
        );
    }
});

module.exports = ConfirmBattleContainer;
