import { memo, useCallback, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { ColorPicker, ColorSelectorButton } from './components';

interface IProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
  style?: ViewStyle;
}

function ColorSelector({ onSelectColor, style, selectedColor }: IProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeColor = useCallback(
    (color: string) => {
      onSelectColor(color);
      setVisible(false);
    },
    [onSelectColor],
  );

  const onButtonPress = useCallback(() => {
    setVisible(true);
  }, []);

  const onRequestClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <View style={style}>
      <ColorPicker
        visible={visible}
        onRequestClose={onRequestClose}
        selectedColor={selectedColor}
        onSelect={onChangeColor}
      />
      <ColorSelectorButton
        selectedColor={selectedColor}
        onPress={onButtonPress}
      />
    </View>
  );
}

export default memo(ColorSelector);
