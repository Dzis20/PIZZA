import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCarSide } from '@fortawesome/free-solid-svg-icons'


export const Basket = () => {
    return (
        <View style={styles.basketMenu}>
            <View style={styles.header}>
                <Text style={styles.basketHeader}>Корзина</Text>
                <Text style={styles.result}>Итого: 36$</Text>
            </View>
            <ScrollView style={styles.scrollBasket}>
                <View style={styles.basketItemFirst}>
                    <Image style={styles.itemImg} source={{ uri: 'http://pizzarosso.ru/upload/catalog/Myasnaya4.jpeg'}}/>
                    <View>
                        <Text style={styles.itemText}>Пицца "Маргарита"</Text>
                        <View style={styles.itemQuantity}>
                        <Text style={styles.itemText}>Кол-во:</Text>
                        <TextInput style={styles.input} placeholder='1' defaultValue='2'/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.itemPrice}>Цена:</Text>
                        <Text style={styles.itemPrice}>14$</Text>
                    </View>
                </View>

                <View style={styles.basketItem}>
                <Image style={styles.itemImg} source={{ uri: 'https://avatars.mds.yandex.net/get-zen_doc/39788/pub_5ce7c431776f8400b3a491af_5ce7c440e68b7800b39bfe74/scale_1200'}}/>
                    <View>
                        <Text style={styles.itemText}>Пицца "Пепперони"</Text>
                        <View style={styles.itemQuantity}>
                        <Text style={styles.itemText}>Кол-во:</Text>
                        <TextInput style={styles.input} placeholder='1' placeholderStyle={{ color: '#fff' }} defaultValue='1'/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.itemPrice}>Цена:</Text>
                        <Text style={styles.itemPrice}>8$</Text>
                    </View>
                </View>

                <View style={styles.basketItem}>
                    <Image style={styles.itemImg} source={{ uri: 'http://pizzarosso.ru/upload/catalog/Myasnaya4.jpeg'}}/>
                    <View>
                        <Text style={styles.itemText}>Пицца "Деревенская"</Text>
                        <View style={styles.itemQuantity}>
                        <Text style={styles.itemText}>Кол-во:</Text>
                        <TextInput style={styles.input} placeholder='1' placeholderStyle={{ color: '#fff' }} defaultValue='1'/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.itemPrice}>Цена:</Text>
                        <Text style={styles.itemPrice}>9$</Text>
                    </View>
                </View>
                <View style={styles.basketItem}>
                    <FontAwesomeIcon icon={ faCarSide } style={styles.icon} size={ 100 } />
                    <View>
                        <Text style={styles.itemText}>Доставка</Text>
                    </View>
                    <View>
                        <Text style={styles.itemPrice}>Цена:</Text>
                        <Text style={styles.itemPrice}>5$</Text>
                    </View>
                </View>
            </ScrollView>


        {/* <View style={styles.MenuItem}>
            <Image style={styles.itemImg} source={{ uri: 'http://pizzarosso.ru/upload/catalog/Myasnaya4.jpeg'}}/>
            <View style={styles.text}>
                <Text style={styles.itemName}>Пицца "Мясная"</Text>
                <Text style={styles.itemPrice}>1100р</Text>
            </View>
            <View style={styles.button}>
                <Button style={styles.itemButton} title="Описание" />
                <Button style={styles.itemButton} title="Добавить в заказ" />
            </View>
        </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    basketMenu: {
        paddingTop: 40,
        // paddingBottom: 20,
        backgroundColor: '#db3d3d',
        borderBottomWidth: 3,
        borderBottomColor: '#fff'
        
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    basketHeader: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    },
    result: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    },
    basketItem: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    basketItemFirst: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#fff',
        borderTopColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImg: {
        width: 110,
        height: 110
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        paddingBottom: 10,

    },
    itemPrice: {
        color: '#fff',
        fontSize:  18,
        paddingBottom: 10
    },
    itemQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderBottomWidth: 1,
        width: 20,
        fontSize: 20,
        borderBottomColor: '#fff',
        color: '#fff',
        textAlign: 'center'
    },
    scrollBasket: {
        height: 302
    },
    icon: {
        color: '#fff'
    }
})