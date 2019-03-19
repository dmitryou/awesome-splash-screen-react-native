import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import SignItem from './SignItem';

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

	renderWord = (word) => {
		const splitedWord = word.split("");
    return splitedWord.map((sign)=>{
      return (
      	<SignItem
          width={15}
          height={15}
          backgroundColor={'blue'}
					sign={sign}/>
			);
    })
	}

	renderWords = () => {
    const {
      splashText
		} = this.props;

    const splittedText = splashText.split(' ');

    return splittedText.map((word)=>{
    	  return (
    	  	<View>
						{this.renderWord(word)}
					</View>
				)
		});
	}

	renderDirections = () => {
		const {
      wordsPosition
		} = this.props;

    return (
      <View style={{
      	flex: 1,
				flexDirection: wordsPosition === 'vertical' ? 'column' : 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				{this.renderWords()}
			</View>
    );
	}


	render() {
		const {
      backgroundColor,
		} = this.props;
		return (
			<View style={[
				styles.mainContainer,
				{ backgroundColor }
			]}>
				{this.renderDirections()}
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
  wordsPosition: PropTypes.string,
  reversedIn: PropTypes.string,
  backgroundColor: PropTypes.string,
	maximumWordsVertical: PropTypes.number,
	maximumWordsHorizontal: PropTypes.number,
};

AwesomeSplashScreen.defaultProps = {
	splashText: 'Animated splash text',
  wordsPosition: 'vertical',
  reversedIn: 'reversedIn',
  backgroundColor: 'white',
	maximumWordsVertical: 3,
	maximumWordsHorizontal: 6,
};

export default AwesomeSplashScreen;