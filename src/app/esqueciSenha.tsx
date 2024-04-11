import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function esqueciSenha() {
    return (
    // div principal
    <View style={styles.imagemBody}>
     {/* imagem logo senai */}
     <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />
    
    {/* inicio do formulario */}
    <View style={styles.form}>
    
    {/* texto login */}
    <Text style={styles.text}>CÓDIGO DE COMPROVAÇÃO :</Text>
    
    {/* input do login */}
    <TextInput placeholder="Código" style={styles.input} />

    {/* texto da senha */}
    <Text style={styles. text}>NOVA SENHA: </Text>

    {/* input da senha */}
    <TextInput secureTextEntry placeholder="Digite sua nova senha" style={styles.input} />

</View>

    {/* div para alinha o botão entrada */}
    <View style={styles. formbtn}>
        <Link href={'login'} style={styles.btn}>CONFIRMAR</Link>
    </View>
</View>
    )
}