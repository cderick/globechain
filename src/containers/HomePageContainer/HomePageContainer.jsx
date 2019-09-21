import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataContent } from '../../actions';
import HomePage from '../../components/HomePage/HomePage';

class HomePageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			queryValue: undefined,
		};
		this.getApiQuery = this.getApiQuery.bind(this);
	}

	getApiQuery(value){
		this.props.getDataContent(value);
		this.setState({
			queryValue: value
		})
	}

	render() {
		return (
			<HomePage 
				queryValue={this.state.queryValue}
				getApiQuery={this.getApiQuery} 
				retrievedObjet={this.props.apiContent.entries} 
			/>
		)
	}
}

HomePageContainer.propTypes = {
	getDataContent: PropTypes.func.isRequired,
};

HomePageContainer.defaultProps = {
	apiContent: null,
};

function mapStateToProps(state) {
	return {
		apiContent: state.get('apiContent').toJS(),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getDataContent,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
