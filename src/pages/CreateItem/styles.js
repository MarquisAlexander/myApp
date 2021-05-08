import {
    Dimensions,
    StyleSheet
} from 'react-native'
import { resize } from '../../utils/resize';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        // alignItems: 'center',
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
        fontSize: resize(24)
    },
    containerIngredients: {
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;