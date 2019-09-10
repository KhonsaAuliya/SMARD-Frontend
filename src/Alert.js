import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
 
export default class Alert extends Component {
 
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
 
    onSubmitClicked = () => {
        let val = this.state.text
 
        if(val){
          Alert.alert('Koder.id', val)
        }else{
          Alert.alert('Koder.id', 'Silahkan isi TextInput terlebih dahulu')
        }
    }
 
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={'Koder.id'}
                />
                <Button title={'Submit'} onPress={() => this.onSubmitClicked()}/>
            </View>
        );
    }
}

export default Alert;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});