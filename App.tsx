import { SafeAreaView, StyleSheet } from 'react-native';
import DrawCreator from './src/DrawCreator';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <DrawCreator color="#06d6a0" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'blue' },
});

export default App;
