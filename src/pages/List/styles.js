import {
    Dimensions,
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/resize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
        width: width,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textHeader: {
        fontSize: resize(18),
        fontFamily: fonts.Regular
    }
})

export default styles;