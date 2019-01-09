import React, { Component } from 'react';
import { View, Text } from 'native-base';
import DateFns, {
  getYear, getMonth, getDate, getHours, getMinutes, getSeconds,
} from 'date-fns';

const parseDateAndTime = (date, time) => {
  const dateArr = date.split('-').map(e => parseInt(e, 10));
  const timeArr = time.split(':').map(e => parseInt(e, 10));
  return [...dateArr, ...timeArr];
};

class Timer extends Component {
  state={ time: null };

  componentWillMount() {
    const { endDate, endTime } = this.props;
    const secs = DateFns.differenceInSeconds(
      new Date(...parseDateAndTime(endDate, endTime)),
      new Date(
        getYear(Date.now()),
        getMonth(Date.now()) + 1,
        getDate(Date.now()),
        getHours(Date.now()),
        getMinutes(Date.now()),
        getSeconds(Date.now()),
      ),
    );
    this.setState({ time: secs });
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timer());
  }

  timerRenderHelper = () => {
    const { time } = this.state;
    const day = Math.floor(time / 86400);

    const hr = Math.floor((time % 86400) / (60 * 60));
    const min = Math.floor(((time % 86400) % (60 * 60)) / 60);
    const sec = ((time % 86400) % (60 * 60)) % 60;

    return `${day}d ${hr}hr: ${min}m: ${sec}s`;
  };

  timer = () => setInterval(() => {
    const { time } = this.state;
    if (time > 0) {
      this.setState({ time: time - 1 });
    } else {
      clearInterval(this.timer());
    }
  }, 1000);

  render() {
    // console.log(this.state);
    const { time } = this.state;
    return (
      <View>
        <Text>{this.timerRenderHelper()}</Text>
      </View>
    );
  }
}
export default Timer;
