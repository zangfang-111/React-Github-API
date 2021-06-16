// React
import React, { Component } from 'react';

// Components
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/Subheader';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';
import Table from '../../components/table/Table';

// Assets
import '../../assets/css/App.css';
import FormStore from '../../stores/form';
import GithubStore from '../../stores/github';

// Services
import Github from '../../assets/js/services/GithubService';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formulario: '',
			githubData: ''
		};

		this._handleSubmit = this._handleSubmit.bind(this);
		this._githubStore = this._githubStore.bind(this);

		this._github = new Github();
	}

	_handleSubmit() {
		let data = FormStore.getFormData();

		switch (data.select) {
			case 'users':
				this._github.getUser(data.input);
			break;

			case 'repositories':
				this._github.getRepo(data.input);
			break;

			default:
				return;
		}

		this.setState({
			formulario: FormStore.getFormData()
		});
	}

	_githubStore() {
		this.setState({
			githubData: GithubStore.getData()
		});
	}

	componentDidMount() {
		FormStore.addSubmitListener(this._handleSubmit);
		GithubStore.addChangeListener(this._githubStore);
	}

	componentWillUnmount() {
		FormStore.removeSubmitListener(this._handleSubmit);
		GithubStore.removeChangeListener(this._githubStore);
	}

  render() {
  	let subtitle = `Search by user or repository.`;

    return (
    	<div>
	      <Header />

	      <Subheader title="Home" subtitle={subtitle} />

	      <div className="container">
	      	<Form />

	      	<Table
	      		type={this.state.formulario.select}
	      		data={this.state.githubData.items}
	      		/>
	      </div>

	      <Footer />
    	</div>
    );
  }
}

export default App;
