import {
    Dimensions,
    StyleSheet
} from 'react-native'
import fonts from '../../utils/fonts';
import { resize } from '../../utils/resize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 20,
        width: width,
    },
    title: {
        fontSize: resize(24),
        marginVertical: 20,
        textAlign: 'center'
    },
    containerButtonAddIngredients: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    textAddIngredients: {
        fontSize: resize(24),
        fontFamily: fonts.SemiBold
    },
    containerIngredients: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default styles;