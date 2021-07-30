import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform, Animated, TextInput, Image } from 'react-native';
import Swiper from 'react-id-swiper';
import Head from 'next/head';

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
  // console.log(Platform.OS);

  return (
    <View>
      <Head>
        <link rel="preload" as="image" href="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
      </Head>
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

      <Swiper>
        <div>
          <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
        </div>
        <div>
          <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
        </div>
        <div>
          <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
        </div>
        <div>
          <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
        </div>
        <div>
          <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
        </div>
      </Swiper>

      <Image style={styles.image} source={{ uri: 'https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34'}} resizeMode="cover" />
    </View>
  );

  // return (
  //   <div>
  //     <Head>
  //       <link rel="preload" as="image" href="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //     </Head>
  //     <div style={{ color: 'red '}}>Testing</div>

  //     <div>React Native Web</div>

  //   {[1, 2, 3].map(vlaue => (
  //     <div key={vlaue}>{vlaue}</div>
  //   ))}
     

  //     <view>
  //       <view>Test</view>
  //     </view>
    
  //     <button>
  //       <div>Test</div>
  //     </button>

  //     <input />

  //     <Swiper>
  //       <div>
  //         <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //       </div>
  //       <div>
  //         <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //       </div>
  //       <div>
  //         <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //       </div>
  //       <div>
  //         <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //       </div>
  //       <div>
  //         <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //       </div>
  //     </Swiper>

  //     <img src="https://demo.tiny.pictures/main/example6.jpg?width=400&height=400&resizeType=cover&gravity=0.46%2C0.34" />
  //   </div>
  // );
}

export default Index;
