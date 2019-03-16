import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

class AwesomeSplashScreen extends Component<Props> {


	constructor(props) {
		super(props);
		this.state = {
			fullData: props.textsArray,
			renderedData: buildInitialArray(props.textsArray, props.initialActiveIndex),
			activeIndex: props.initialActiveIndex,
		};
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
		flex: 1
	},
});

AwesomeSplashScreen.propTypes = {
	splashText: PropTypes.string,
	maximumWordsVertical: PropTypes.number,
	maximumWordsHorizontal: PropTypes.number,
};

AwesomeSplashScreen.defaultProps = {
	splashText: 'Animated splash words',
	maximumWordsVertical: 3,
	maximumWordsHorizontal: 6,
};

export default AwesomeSplashScreen;