import {
    Dimensions,
    StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff'
    }
})

export default styles;