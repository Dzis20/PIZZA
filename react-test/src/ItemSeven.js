import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const SeventhPizza = () => {
    return (
        <View style={styles.MenuItem}>
            <Image style={styles.itemImg} source={{ uri: 'https://content.quickbuy.me/businesses/5e07a38af67dea7be7631374/products/5e07a38af67dea7be7631374-1590739798853-3bsy.jpeg'}}/>
            <View style={styles.text}>
                <Text style={styles.itemName}>Пицца "Морская"</Text>
                <Text style={styles.itemPrice}>12$</Text>
            </View>
            <View style={styles.button}>
                <Button style={styles.itemButton} title="Описание" />
                <Button style={styles.itemButton} title="Добавить в заказ" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Menuitem: {
        position: 'relative'
    },
    itemImg: {
        width: '100%',
        height:  200,
        marginBottom: 20,
        marginTop: 20
    }, 
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 20,
        color: '#fff',
        // textAlign: 'left',
        // marginBottom: 10
    },
    itemPrice: {
        fontSize: 20,
        color: '#fff',
        // textAlign: 'right',
        // position: 'relative',
        // top: -20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderBottomColor: '#fff'
    }
})