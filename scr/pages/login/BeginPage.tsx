import React from 'react';
import { style } from './styles';
import {
    Text,
    View
} from 'react-native';

export default function Login(){
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text>Olá! Boas Vindas!</Text>
            </View>
            <View style={style.boxMid}>
                <Text>Clique sobre o botão abaixo para localizar seu carro</Text>
            </View>
        </View>
    )
}
