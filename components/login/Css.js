import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    marginVertical: 5,
  },
  buttonLogin: {
    alignSelf: 'center',
    width: 320,
  },
  textButtonLogin: {
    textAlign: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#61a2c6',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#61a2c6',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  viewImage: {
    paddingBottom: 6,
  }
});