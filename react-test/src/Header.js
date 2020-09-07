import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

<i class="fas fa-shopping-basket"></i>
export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>Pizza</Text>
            <FontAwesomeIcon icon={ faShoppingBasket } style={styles.icon} size={ 30 } />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    icon: {
        color: '#fff',
        position: 'absolute',
        right: 0

    }
})