import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

class FadeInView extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { viewOpacity } = this.state;
    const { onFadeComplete, duration = 500, delay } = this.props;

    Animated.timing(
      viewOpacity,
      {
        toValue: 1,
        duration,
        delay,
      },
    ).start(onFadeComplete || (() => {}));
  }

  render() {
    const { style } = this.props;

    return (
      <Animated.View style={[{ opacity: 0 }].concat(style || [])}>
        {this.props.children}
      </Animated.View>
    );
  }
}

FadeInView.propTypes = {
  onFadeComplete: PropTypes.func,
  duration: PropTypes.number,
  delay: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default FadeInView;
