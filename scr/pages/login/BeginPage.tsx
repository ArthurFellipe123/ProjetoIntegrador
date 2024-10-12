import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importa o arquivo de estilos

const BeginPage = () => {
  return (
    <View>
      <Text style={styles.title}>Olá! Boas Vindas!</Text>
        <View style={styles.container}>         
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../scr/assets/bmw-serie-3 2.png')} // substitua pela URL da imagem do carro
              style={styles.carImage}
              resizeMode="contain"
            />
          </View>          
        </View>
        
        <View style={styles.containerAlign}>
          <View style={styles.alignRight}>
            <Text style={styles.instruction}>
              Clique sobre o botão abaixo para localizar seu carro
            </Text>
          </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>→</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
};

export default BeginPage;
