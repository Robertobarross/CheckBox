import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Check from './src/CheckBox/checkBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Check />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
