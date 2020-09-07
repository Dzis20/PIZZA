import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Banner = () => {
    return (
        <View style={StyleSheet.banner}>
            <Text style={styles.bannerText}>Бесплатная доставка при заказе от 50$</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    banner: {
        flex: 1
    },
    bannerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
        
    }
})