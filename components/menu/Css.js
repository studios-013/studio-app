import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  content: {
    marginTop: 50,
  },
  card: {
    height: 100,
    marginLeft: 40,
    marginRight: 40
  },
  textCard: {
    alignSelf: 'center',
  },
  descriptionStudio: {
    paddingTop: 40,
    width: 250,
    alignItems: 'center',
    alignSelf: 'center',
  }
});