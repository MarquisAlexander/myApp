import {
    Dimensions,
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';
import { resize } from '../../utils/resize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: colors.white,
        paddingHorizontal: 10
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: resize(18)
    }
})

export default styles;