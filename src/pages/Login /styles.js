import {
    Dimensions,
    StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        width: width,
    },
})

export default styles;