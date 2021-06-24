import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllFurnitures } from '../store/effects/furnitures';
import { Button, Typography, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
export class LandingPage extends Component {
	componentDidMount() {
		this.props.fetch();
	}

	render() {
		let furniture = this.props.furniture || [];
		let appliances = furniture.sort(() => Math.random() - Math.random()).find(() => true);
		let appliance = furniture.sort(() => Math.random() - Math.random()).find(() => true);
		furniture = furniture.sort(() => Math.random() - Math.random()).find(() => true);

		const myStyle = {
			marginLeft: '7em',
			marginTop: '30em',
			textalign: 'center',
			fontFamily: 'Arial',
			paddingRight: '6m'
		};

		const cardStyle = {
			display: 'inline-flex',
			alignItem: 'center',
			marginLeft: '20em'
		};

		return (
			<Link to="/furniture">
				<div style={cardStyle}>
					{furniture && (
						<Card style={{ width: 300, height: 400 }}>
							<Typography gutterBottom variant="h5">
								{furniture.name}
							</Typography>
							<h5 style={{ color: 'blue' }}>category </h5>
							{furniture.category}
							<img style={{ marginRight: 300, width: 300 }} src={furniture.imageUrl} />
						</Card>
					)}
					<Button style={myStyle} variant="contained" color="primary">
						see all
					</Button>

					{appliance && (
						<Card style={{ width: 300, height: 400 }}>
							<Typography gutterBottom variant="h5">
								{appliance.name}
							</Typography>
							<h5 style={{ color: 'blue' }}>category </h5>
							{appliance.category}
							<img style={{ width: 300 }} src={appliance.imageUrl} />
						</Card>
					)}
					{appliances && (
						<Card style={{ marginLeft: 200, width: 300, height: 400 }}>
							<Typography gutterBottom variant="h5">
								{appliances.name}
							</Typography>
							<h5 style={{ color: 'blue' }}>category </h5>
							{appliances.category}
							<img style={{ width: 300 }} src={appliances.imageUrl} />
						</Card>
					)}
				</div>
			</Link>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		furniture: state.furnituresRedux
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetch: () => {
			dispatch(fetchAllFurnitures());
		}
	};
};
export default connect(mapStateToProps, mapDispatch)(LandingPage);
