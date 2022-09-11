import { memo } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B',
];

interface IColorItemProps {
  selectedColor: string | undefined;
  onSelect: (color: string) => void;
  item: string;
}

interface IProps extends Omit<IColorItemProps, 'item'> {
  visible: boolean;
  onRequestClose: () => void;
}

function ColorItem({ item, onSelect }: IColorItemProps) {
  const onPress = () => {
    onSelect(item);
  };

  return (
    <Pressable
      style={[styles.colorItem, { backgroundColor: item }]}
      onPress={onPress}
    />
  );
}

const MemoColorItem = memo(ColorItem);

function ColorPicker({
  visible,
  onSelect,
  selectedColor,
  onRequestClose,
}: IProps) {
  const renderItem = ({ item }: { item: string }) => (
    <MemoColorItem
      item={item}
      onSelect={onSelect}
      selectedColor={selectedColor}
    />
  );

  const keyExtractor = (item: string) => item;

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      animationType="fade">
      <SafeAreaView style={styles.container}>
        <FlatList<string>
          data={colors}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={true}
          keyboardShouldPersistTaps="always"
          style={styles.list}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  colorItem: {
    width: 48,
    height: 48,
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    maxHeight: 56,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#1F1F1F75',
  },
});
export default memo(ColorPicker);
