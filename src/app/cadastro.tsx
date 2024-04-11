import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function cadastro() {
    return (
    // div principal
    <View style={styles.imagemBody}>
     {/* imagem logo senai */}
     <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />
    
    {/* inicio do formulario */}
    <View style={styles.form}>
    
    {/* texto login */}
    <Text style={styles.text}>CADASTRO :</Text>
    
    {/* input do login */}
    <TextInput placeholder="Insira seu CPF" style={styles.input} />

    {/* texto da senha */}
    <Text style={styles. text}>SENHA: </Text>

    {/* input da senha */}
    <TextInput secureTextEntry placeholder="Digite sua senha" style={styles.input} />

</View>

    {/* div para alinha o botão entrada */}
    <View style={styles. formbtn}>
        <Link href={'login'} style={styles.btn}>CADASTRAR</Link>
    </View>
</View>
    )
}