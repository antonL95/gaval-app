import {StatusBar} from "expo-status-bar"
import AppNavigator from "./src/navigation/AppNavigator";
import {Platform, View} from "react-native";
import {lightColors, createTheme, ThemeProvider} from '@rneui/themed';

const theme = createTheme({
    lightColors: {
        ...Platform.select({
            default: lightColors.platform.android,
            ios: lightColors.platform.ios,
        }),
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppNavigator/>
        </ThemeProvider>
    )
}
