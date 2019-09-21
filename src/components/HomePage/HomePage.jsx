import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import HeroBanner from './HeroBanner/HeroBanner';
import CardBanner from './CardBanner/CardBanner';
import data from '../../../data/data';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicTab: undefined,
			heroBanner: undefined,
			cardsData: undefined
		};
	}

	componentDidMount() {
		const { mainNav, heroBanner, api } = data;
		this.setState({
			heroBanner: heroBanner,
			navItems: mainNav,
			cardsData: api
		});
	}

	render() {
		return (
			<section>
				<Navigation navItems={this.state.navItems} />
				<HeroBanner getApiQuery={this.props.getApiQuery} heroBanner={this.state.heroBanner} />
				<CardBanner queryValue={this.props.queryValue} cardsData={this.props.retrievedObjet} />
			</section>
		);
	}
}

HomePage.propTypes = {
	retrievedObjet: PropTypes.objectOf(PropTypes.any),
	getApiQuery: PropTypes.func,
	queryValue: PropTypes.string,
};

HomePage.defaultProps = {
	retrievedObjet: undefined,
	queryValue: undefined,
};

export default HomePage;
