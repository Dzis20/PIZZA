import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';



export const Menu = () => {
    return (
        <View>
            <Text style={styles.menuText}>Наши позиции</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    menuText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 24,
        paddingTop: 40,
        paddingBottom: 20,
    }
})