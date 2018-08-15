import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  outerContainer: {
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    backgroundColor: 'white',
    // backgroundColor: '#AA5533',
  },
  innerContainer: {
    borderColor: '#979797',
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // height: 250,
    // width: 250,
    // backgroundColor: 'white',
    // backgroundColor: '#AA5533',
  },
  beta: {
    backgroundColor: '#B8E986',
    position: 'absolute',
    top: 15,
    right: -78,
    transform: [{ rotate: '45deg'}],
    width: 200,
    textAlign: 'center',
    alignSelf: 'flex-end',
    fontWeight: '100',
  },
  text: {
    maxWidth: 120,
    paddingTop: 2,
  },
  value: {
    maxWidth: 120,
    paddingTop: 2,
    fontSize: 11,
  }
});