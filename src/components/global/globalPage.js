import React, { Component } from 'react';
import '../../style/output.css';



class Global extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}


	render(){
		return (
			<div className="mainColumn">

				<div className="theBar">
					<div className="barCol">
						<input type="text" className="searchInput barItemH" placeholder="Search here"/>
					</div>
				</div>

				<h1>
					This is the global page
				</h1>
			</div>
		);
	}

}

export default Global;