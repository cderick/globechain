import React from 'react';
import PropTypes from 'prop-types';
import s from './CardBanner.scss';

class CardBanner extends React.Component {
	render() {
		if (!this.props.cardsData) return null;
		const { suggestions } = this.props.cardsData;
		return (
			<div id="CardBanner" className="container pt-5 pb-5">
				<div className="row">
					<div className="col text-center">
						<h2 className="pb-5">You are looking for: <span className="text-danger">{this.props.queryValue}</span></h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
						{suggestions && suggestions.length
							&& suggestions.map((cv, ind) => (
								<div key={`map${ind}`} className={`card float-left mr-3 mb-3 ${s.customWidth}`}>
									<img src="https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg" className="card-img-top" alt="catPlaceholder" />
									<div className="card-body">
										<h5 className="card-title">{cv.value}</h5>
										<p className="card-text">Some quick example text to build on the globechain approach.</p>
										<a href={`https://www.globechain.com/search.html?searchSectionID=${cv.sectionID}`} target="_blank" className="btn btn-primary">Check this now</a>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		);
	}
}

CardBanner.propTypes = {
	cardsData: PropTypes.objectOf(PropTypes.any),
	queryValue: PropTypes.string,
};

CardBanner.defaultProps = {
	cardsData: null,
	queryValue: undefined,
};

export default CardBanner;
