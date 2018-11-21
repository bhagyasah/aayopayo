import React, { Component } from 'react';
import { View, Accordion } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { renderHeaderHelper, dataArray, renderContentHelper } from './AcordionComponents';


class index extends Component {

  state = {};

  render() {
    const { changeMessageHandler, navigationOptions } = this.props;
    // console.log('props in Idea what to ask', this.prop);
    return (
      <View>
        <Accordion
          headerStyle={{ backgroundColor: '#fff' }}
          renderHeader={renderHeaderHelper}
          renderContent={content => renderContentHelper(content, changeMessageHandler, navigationOptions)}
          // contentStyle={{ backgroundColor: '#fff' }}
          dataArray={dataArray}
          expended={0}
        />
      </View>
    );
  }
}
index.propTypes = {
  changeMessageHandler: PropTypes.func.isRequired,
};
export default connect(null, { ...actions })(index);
