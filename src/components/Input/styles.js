import {
    Dimensions,
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';
import { resize } from '../../utils/resize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.textSecondary,
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        height: 55
    },
    input: {
        color: "#000",
        paddingHorizontal: (width * 5) / 100,
        width: '100%',
        fontSize: resize(16)
    }
})

export default styles;