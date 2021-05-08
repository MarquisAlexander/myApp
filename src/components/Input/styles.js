import {
    Dimensions,
    StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        height: 55
    },
    input: {
        color: "#000",
        paddingHorizontal: (width * 5) / 100,
        width: '100%'
    }
})

export default styles;