import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import {Container, loginStyle} from './styles';
// import commomStyles from '../commomStyles'
// import backgroundImage from '../../assets/imgs/login.jpg'

export default class Login extends Component {
  state = {
    stageNew: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      Alert.alert('Sucesso!', 'Criar conta');
    } else {
      Alert.alert('Sucesso!', 'Logar');
    }
  };
  render() {
    return (
      <Container>
        <Text style={loginStyle.title}>Doe Já</Text>
        <View style={loginStyle.formContainer}>
          <Text style={loginStyle.subtitle}>
            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
          </Text>
          {this.state.stageNew && (
            <TextInput
              placeholder="Nome"
              style={loginStyle.input}
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />
          )}
          <TextInput
            placeholder="E-mail"
            style={loginStyle.input}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="senha"
            style={loginStyle.input}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          {this.state.stageNew && (
            <TextInput
              secureTextEntry={true}
              placeholder="Confirmação"
              style={loginStyle.input}
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          )}
          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={loginStyle.button}>
              <Text style={loginStyle.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={loginStyle.touchable}
          onPress={() =>
            this.setState({
              stageNew: !this.state.stageNew,
            })
          }>
          <Text style={loginStyle.buttonText}>
            {this.state.stageNew
              ? 'Já possui conta?'
              : 'Ainda não possui conta'}
          </Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
