import React from 'react';
import PropTypes from 'prop-types';
import s from './Navigation.scss';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav(e) {
		if (e) {
			const substract = document.querySelector('#myTopnav').offsetHeight;
			const target = document.querySelector(`#${e}`).offsetTop;
			window.scrollTo({
				top: target - substract,
				behavior: 'smooth',
			});
		}
	}


	render() {
		if (!this.props.navItems) return null;
		
		const { 
			navigationIcon, 
			navigation, 
			subNav 
		} = this.props.navItems;
		
		return (
			<section>
				<nav className={s.topnav} id="myTopnav">
					<span className={`${navigationIcon.classes && navigationIcon.classes}`} id={navigationIcon.id} onClick={() => { this.toggleNav(navigationIcon.target); }}><img className={s.imgResize} src={navigationIcon.image} alt={navigationIcon.image}/></span>
					{navigation && navigation.length
					&& navigation.map((cv, ind) => (
						<button key={`key-${ind}`} className={`${cv.classes && cv.classes} ${cv.innerClasses ? s[cv.innerClasses] : ''}`} id={cv.id} onClick={() => { this.toggleNav(cv.target); }}>{cv.title}</button>)
					)}
				</nav>
				<div className={s.innerNav}>
					{subNav && subNav.length
					&& subNav.map((cv, ind) => (
						<button key={`key-${ind}`} className={`${cv.classes && cv.classes}`} id={cv.id} onClick={() => { this.toggleNav(cv.target); }}>{cv.title}</button>)
					)}
				</div>
			</section>
		);
	}
}

Navigation.propTypes = {
	navItems: PropTypes.objectOf(PropTypes.any),
};

Navigation.defaultProps = {
	navItems: undefined,
};

export default Navigation;
