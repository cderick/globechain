import React from 'react';
import PropTypes from 'prop-types';
import s from './HeroBanner.scss';

class HeroBanner extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		if(e){
			const targetId = e.target.id;
			const value = e.target.value;
			if(targetId === 'keyword'){
				this.props.getApiQuery(value)
			} else {
				console.log('Is not the real target');
			}
		}
	}

	render() {
		if (!this.props.heroBanner) return null;
		const { heroMessage, heroForms } = this.props.heroBanner;
		return (
			<div id="homePage" className={`container-fluid ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto text-center">
						<h1 className="display-4">{heroMessage && heroMessage.title ? heroMessage.title : ''}</h1>
						<form>
							<div className="row">
								<div className="col-10 m-auto">
									{heroForms && heroForms.length
										&& heroForms.map((cv, ind) => (
											<div key={`main${ind}`} className={`form-group text-left ${s.forms} ${cv.customClass ? s[cv.customClass] : ''}`}>
												<label className="text-white" htmlFor={cv.id}>{cv.label}</label>
												<input type="text" onChange={(e) => {this.handleChange(e)}} className="form-control" id={cv.id} placeholder={cv.placeholder} />
											</div>
										)
									)}
									<button type="submit" className={`btn float-left btn-warning ${s.customMargin}`}>Search <i className="fas fa-search"></i></button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

HeroBanner.propTypes = {
	heroBanner: PropTypes.objectOf(PropTypes.any),
	getApiQuery: PropTypes.func,
};

HeroBanner.defaultProps = {
	heroBanner: null,
};

export default HeroBanner;
