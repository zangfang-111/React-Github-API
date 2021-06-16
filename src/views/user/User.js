// React
import React from 'react';

// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class User extends React.Component {
	render() {
		return(
			<div>
				<Header />

				<div className="container">
					<h1>User Page</h1>
				</div>

				<Footer />
			</div>
		);
	}
}

export default User;