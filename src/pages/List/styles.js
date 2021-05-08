import {
    Dimensions,
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 10,
        backgroundColor: colors.backgroundScreen,
        // alignItems: 'center',
        width: width,
        // marginTop: 20
    },
})

export default styles;