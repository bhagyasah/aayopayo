import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner, Button } from 'native-base';
import PropTypes from 'prop-types';
import { SCREEN_HEIGHT, SCREEN_WIDTH, APP_COLOR } from '../../../config';

const CustomAddFinish =  ({ modal, updateModalValue }) => {
  // console.log('props in addFinish', props);
  const { addCoinSuccess } = modal;
  return (
    <View style={styles.videoStyle}>
      {addCoinSuccess
        ? (
          <View style={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Text style={{ fontSize: 25, color: 'yellow' }}>Congrats !</Text>
            <Text style={{ color: 'yellow' }}> 15 coins added in your account.</Text>
            <View style={{ marginTop: 50 }}>
              <Button
                onPress={() => updateModalValue('modalAddCoinShow', false)}
                style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: 'yellow' }}>
                <Text>Ok</Text>
              </Button>
            </View>
          </View>)
        : <Spinner size="large" />
    }
    </View>
  );
};

CustomAddFinish.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomAddFinish;

const styles = StyleSheet.create({
  videoStyle: {
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: APP_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
