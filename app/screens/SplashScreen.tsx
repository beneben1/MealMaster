import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('screen');
export default function SplashScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                source={require('../../assets/splashscreen.json')}
                autoPlay
                loop={true}
                style={styles.animation}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    animation: {
        width: width,
        height: height
    }
});