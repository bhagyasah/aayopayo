import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import Astrologers from './astrologers';
import IdeaWhatToAsk from './idea_what_to_ask';

class index extends Component {

  state = {};

  renderContent = (content, data, navigationOptions) => {
    switch (content.replace(/\s+/g, '')) {
      case 'Astrologers':
        return <Astrologers data={data} key={data.title} />;
      case 'Ideawhattoask':
        return <IdeaWhatToAsk navigationOptions={navigationOptions} />;
      default:
        return null;
    }
  }

  render() {
    const { content, astrologers, navigationOptions } = this.props;
    return (
      <View>
        { this.renderContent(content, astrologers.data, navigationOptions) }
      </View>
    );
  }
}

index.defaultProps = {
  astrologers: {},
  navigationOptions: {},
};

index.propTypes = {
  content: PropTypes.string.isRequired,
  astrologers: PropTypes.objectOf(PropTypes.any),
  navigationOptions: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(index);
