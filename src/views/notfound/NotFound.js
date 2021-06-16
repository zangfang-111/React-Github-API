// React
import React from 'react';

// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class NotFound extends React.Component {
	render() {
		return(
			<div>
				<Header />

				<section className="hero is-large is-dark is-bold">
				  <div className="hero-body">
				    <div className="container">
				      <h1 className="title">
				        404 - Not found
				      </h1>

				      <h2 className="subtitle">
				        You tried to access one page that not exists.
				      </h2>
				    </div>
				  </div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default NotFound;
