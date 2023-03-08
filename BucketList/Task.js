
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Task = (props) => {
    
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        backgroundColor: '#55bcf6',
        height: 24,
        width: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%'
    },
    circular:{
        height: 12,
        width: 12,
        borderColor: '#55bcf6',
        borderRadius: 5,
        borderWidth: 3,
    }
})

export default Task
