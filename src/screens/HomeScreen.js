import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Button, ButtonGroup, withTheme, Text} from '@rneui/themed';


export default function HomeScreen({navigation}) {
    return (<ScrollView>
        <View style={styles.contentView}>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Details"
                    buttonStyle={{
                        backgroundColor: 'rgba(78, 116, 289, 1)',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    </ScrollView>)
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
        marginVertical: 20,
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10,
    },
});
