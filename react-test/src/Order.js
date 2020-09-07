import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TextInput} from 'react-native';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

export const Order = () => {
    return (
        <View style={styles.orderList}>
            <View>
                <Text style={styles.orderHeader}>Ваш заказ</Text>
                
                <View style={styles.name}>
                    <Text style={styles.text}>Ваше Имя:</Text>
                    <TextInput style={styles.input} placeholder='1' placeholder='Имя' />
                </View>
                <View style={styles.name}>
                    <Text style={styles.text}>Ваш Телефон:</Text>
                    <TextInput style={styles.input} placeholder='1' placeholder='Телефон' />
                </View>
                <View style={styles.name}>
                    <Text style={styles.text}>Ваш Адрес:</Text>
                    <TextInput style={styles.input} placeholder='1' placeholder='Адрес' />
                </View>
                <View style={styles.name}>
                    <Text style={styles.text}>Способо оплаты:</Text>
                    <TextInput style={styles.input} placeholder='1' placeholder='Способ оплаты' />
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Количество позиций:</Text>
                    <Text style={styles.text}>3</Text>
                </View>
                <View style={styles.finalPrice}>
                    <Text style={styles.text}>Итоговая сумма:</Text>
                    <Text style={styles.text}>36$</Text>
                </View>
                <View style={styles.promo}>
                    <Text style={styles.text}>Ввведите промокод:</Text>
                    <TextInput style={styles.input} placeholder='1' placeholder='Промокод' />
                </View>
                <View>
                    <Button style={styles.itemButton} title="Оформить доставку" />
                </View>
            </View>

        </View>
    ) 
}

const styles = StyleSheet.create({
    orderList: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        backgroundColor: '#db3d3d',
        borderBottomWidth: 4,
        borderBottomColor: '#fff'
    },
    orderHeader: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 24,
        paddingBottom: 60,
        textAlign: 'center'
    },
    finalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
        
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
    name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        width: 160,
        color: '#fff',
        fontSize: 20
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40
    }, 
    promo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        paddingTop: 40
    }

})