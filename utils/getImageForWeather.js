/* eslint-disable global-require */

const images = {
  clear: require('../assets/clear.jpg'),
  hail: require('../assets/hail.png'),
  'heavy-cloud': require('../assets/heavy-cloud.jpg'),
  'light-cloud': require('../assets/light-cloud.jpg'),
  'heavy-rain': require('../assets/heavy-rain.png'),
  'light-rain': require('../assets/light-rain.png'),
  showers: require('../assets/showers.png'),
  sleet: require('../assets/sleet.png'),
  snow: require('../assets/snow.png'),
  thunder: require('../assets/thunder.png'),
  null: require('../assets/icon1.png'),
  Icon: require('../assets/icon.png'),
};

export default weather => images[weather];