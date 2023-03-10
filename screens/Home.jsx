import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text> Home</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('About');
        }}>
        <Text>Go to About</Text>
      </Pressable>
    </View>
  );
}
