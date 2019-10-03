import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.View`
  flex: 1;
  background-color: #086;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const loginStyle = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 70,
    marginBottom: 10,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    width: '90%',
  },
  input: {
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#f60',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  touchable: {padding: 10},
});
