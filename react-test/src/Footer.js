import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.logo}>Pizza</Text>
            <Text style={styles.author}>Created by Ilya Dzis</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    footer: {
        paddingVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        backgroundColor: '#db3d3d',
        alignItems: 'flex-end'
    },
    logo: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    author: {
        color: '#fff',
    }
})