import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centraliza verticalmente apenas
    paddingHorizontal: 0, // Remove qualquer padding lateral
    width: '100%',
    marginTop: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20%',
  },
  imageContainer: {
    width: '230%', // Garante que o contêiner ocupe toda a largura
    alignItems: 'flex-start', // Garante que o conteúdo seja alinhado à esquerda
    marginBottom: '60%',
    paddingHorizontal: 0, // Remove qualquer padding extra
  },
  carImage: {
    width: '100%',  // Ocupa toda a largura do contêiner pai
    height: undefined, // Deixa a altura proporcional
    aspectRatio: 2, // Mantém a proporção da imagem
    marginLeft: '-30%', // Garante que não haja margem à esquerda
  },
  alignRight: {
    alignItems: 'center', // Centraliza os itens (botão e texto) horizontalmente
    marginBottom: 20,
    marginLeft: '37%'
  },
  instruction: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#333',
  },
  containerAlign:{
    marginLeft: '50%',
  }
});

export default styles;
