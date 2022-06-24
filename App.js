import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar,Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#4f565e';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/62412557?v=4';

const urlToMyGithub = 'https://github.com/geovannaanjos';


const App = () =>{

    const handlePressGoToGithub = async () =>{
        console.log('verificando link')
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('link aprovado')
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
            <View style={style.content}>
                <Image  
                    accessibilityLabel='Geovanna perfil' 
                    style={style.avatar} source={{uri: imageProfileGithub}}
                />
                <Text 
                    accessibilityLabel='Name: Geovanna Anjos'
                    style={[style.defaultText,style.name]}>Geovanna Anjos
                </Text>
                <Text 
                    accessibilityLabel='Nickname: geovannaanjos'
                    style={[style.defaultText,style.nickname]}>geovannaanjos
                </Text>
                <Text 
                    accessibilityLabel='Description: Systems developer from São Paulo, 18 years old '
                    style={[style.defaultText, style.description]}>
                        Systems developer from São Paulo, 18 years old
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText,style.textButton]}> Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
        
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        //column
        backgroundColor: colorGithub,
        flex:1, //Expandir para atela inteira
        justifyContent: 'center'
    },
    content:{
        alignItems:'center',
        padding:20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop:20,
        fontSize:24,
        fontWeight: 'bold',
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,

    },
    description:{
        fontSize: 14,
        fontWeight:'bold',
    },
    button:{
        marginTop:20,
        backgroundColor:colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    }
});