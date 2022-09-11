import { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DrawCreator from './src/DrawCreator';
import ColorSelector from './src/ColorSelector';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('#06d6a0');
  const onChangeSelectedColor = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <DrawCreator color={selectedColor} />
      <ColorSelector
        selectedColor={selectedColor}
        onSelectColor={onChangeSelectedColor}
        style={styles.colorSelector}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'blue' },
  colorSelector: {
    position: 'absolute',
    zIndex: 8,
    bottom: 16,
    right: 16,
  },
});

export default App;
