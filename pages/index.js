import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform, Animated, TextInput, Image } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  image: {
    width: 400,
    height: 400,
  }
});

const Index = () => {
  console.log(Platform.OS);

  return (
    <View>
      <Text style={styles.text}>Testing</Text>

      <Text>React Native Web</Text>

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item, index) => `${index}`}
        renderItem={(info) => (
          <View>
              <Text>{info.item}</Text>
          </View>  
        )}
      />

      <Animated.View>
        <Text>Test</Text>
      </Animated.View>
    
      <TouchableOpacity>
        <Text>Test</Text>
      </TouchableOpacity>

      <TextInput />

      <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
    </View>
  );
}

export default Index;