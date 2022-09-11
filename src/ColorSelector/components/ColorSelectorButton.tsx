import { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface IProps {
  onPress: () => void;
  selectedColor: string | undefined;
}

function ColorSelectorButton({ onPress, selectedColor = 'white' }: IProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: selectedColor,
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'green',
    borderWidth: 4,
    borderRadius: 24,
    height: 48,
    width: 48,
  },
});

export default memo(ColorSelectorButton);
