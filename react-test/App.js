import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { Header } from './src/Header';
import { Banner } from './src/Banner';
import { Menu } from './src/Menu';
import { MenuItem } from './src/ItemOne';
import { SecondPizza } from './src/ItemTwo';
import { ThirdPizza } from './src/itemThree';
import { FourthPizza } from './src/ItemFour';
import { FifthPizza } from './src/ItemFive';
import { SixPizza } from './src/ItemSix';
import { SeventhPizza } from './src/ItemSeven';
import { EightPizza } from './src/ItemEight';
import { Footer } from './src/Footer';
import { Basket } from './src/Basket';
import { Order } from './src/Order'
// import { ThirdPizza } from './src/ItemNine';
// import { ThirdPizza } from './src/ItemTen';
// import { ThirdPizza } from './src/ItemEleven';
// import { ThirdPizza } from './src/ItemTwelve';


// const DATA = [
//   {
//     photo: 'https://sm-news.ru/wp-content/uploads/2020/04/13/11d954e433ea1da666b690c1e638f8d1.jpg',
//     title: 'Пицца "Маргарита"',
//     price: '900'
//   },
//   {
//     photo: 'https://i.artfile.ru/1920x1080_1388605_%5Bwww.ArtFile.ru%5D.jpg',
//     title: 'Пицца "Прошуто"',
//     price: '1200'
//   },
// ]


export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
          <Header />
        </View>
      <ScrollView>
        <View style={styles.banner}>
            <Banner />
        </View>
        <View style={styles.menuHeader}>
                <Menu/>
        </View> 
        <View style={styles.menuList}>
          <MenuItem/>
          <SecondPizza />
          <ThirdPizza />
          <FourthPizza />
          <FifthPizza />
          <SixPizza />
          <SeventhPizza />
          <EightPizza />
        </View>
        <View style={styles.basket}>
          <Basket />
        </View>
        <View>
          <Order />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  header: {
    backgroundColor: '#db3d3d',
    padding: 40
  },
  banner: {
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: '#ffa640',
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    borderTopWidth: 3,
    borderTopColor: '#fff'
  },
  
  menu: {
    // height: 1000
  },
  menuHeader: {
    // flexDirection: 'row',
    // paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#db3d3d',
    // borderBottomWidth: 1,
    borderBottomColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#fff'
  },
  menuList: {
    paddingTop: 20,
    // paddingBottom: 60,
    backgroundColor: '#db3d3d',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
    // flex: 1
  },
});
