import {
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        borderColor: "#000",
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.white,
        fontFamily: fonts.Bold
    }
})

export default styles;