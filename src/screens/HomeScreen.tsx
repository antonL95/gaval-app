import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {Button, ButtonGroup, withTheme, Text} from '@rneui/themed';


export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.contentView}>
                    <View style={styles.buttonsContainer}>
                        <Text>Home</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
});
