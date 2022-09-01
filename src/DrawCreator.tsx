import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { Canvas, Path } from '@shopify/react-native-skia';

interface IPath {
  segments: String[];
  color?: string;
}

interface IProps {
  color: string;
}

function DrawCreator({ color }: IProps) {
  const [paths, setPaths] = useState<IPath[]>([]);

  const pan = Gesture.Pan()
    .onStart(g => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color,
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate(g => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  return (
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={pan}>
        <View style={styles.container}>
          <Canvas style={styles.canvas}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(' ')}
                strokeWidth={5}
                style="stroke"
                color={p.color}
              />
            ))}
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'white',
  },
  canvas: { flex: 8 },
});

export default DrawCreator;
