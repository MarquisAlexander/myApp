import {
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/resize';


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: resize(18),
        fontFamily: fonts.Regular
    }
})

export default styles;