import {Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"

function Title(props){
    return <Text style = {styles.title}>{props.children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:60,
        textAlign:"center",
        color:Colors.primary500,
        fontFamily:"Wonderbar",
    }
})