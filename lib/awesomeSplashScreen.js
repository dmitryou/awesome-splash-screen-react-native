import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class AwesomeSplashScreen extends Component<Props> {


	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const {
			splashText,
		} = this.props;
		console.log('splashText', splashText)
	}


	render() {
		const {
			splashText,
		} = this.props;
		return (
			<View style={styles.mainContainer}>
				<Text>
					{splashText}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

AwesomeSplashScreen.propTypes = {
	splashText: PropTypes.string,
	maximumWordsVertical: PropTypes.number,
	maximumWordsHorizontal: PropTypes.number,
};

AwesomeSplashScreen.defaultProps = {
	splashText: 'Animated splash text',
	maximumWordsVertical: 3,
	maximumWordsHorizontal: 6,
};

export default AwesomeSplashScreen;