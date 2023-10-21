import Colors from "../elements/Colors";
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function AddTransaction({navigation}) {
    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={mainStyle.headerSection}>
                <TouchableHighlight
                    onPress={() => {
                        navigation.pop();
                    }}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={26}
                        color={Colors.SECONDARY_COLOR}
                        style={mainStyle.backIcon}
                    />
                </TouchableHighlight>

                <Text style={mainStyle.headerText}>Record Transaction</Text>
            </View>
            <View style={mainStyle.bodySection}>
                <TextInput placeholder="Descrittion" style={bodyStyle.textInput}/>
            </View>
        </SafeAreaView>
    )
}

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MAIN_COLOR,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerSection: {
        flex: 1,
        margin: 13,
        height: 10,
        flexDirection: "row",
    },
    bodySection: {
        flex: 22,
    },
    backIcon: {
        flex: 1,
        borderColor: Colors.SECONDARY_COLOR,
        borderWidth: 2,
        borderRadius: 8,
        alignSelf: "center",
        verticalAlign: "middle",
        alignContent: "center",
    },
    headerText: {
        flex: 15,
        fontSize: 25,
        marginLeft: 15,
        fontWeight: "900",
        color: Colors.SECONDARY_COLOR,
    },
});

const bodyStyle = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        color: Colors.SECONDARY_COLOR,
        backgroundColor: Colors.ACCENT_COLOR,
    },

});