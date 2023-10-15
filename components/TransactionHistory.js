import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../elements/Colors";
import { TransactionEntry } from "../elements/TransactionEntry";

export function TransactionHistory() {
  return (
    <SafeAreaView style={mainStyle.container}>
      <View style={mainStyle.headerSection}>
        <TouchableHighlight
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={26}
            color={Colors.SECONDARY_COLOR}
            style={mainStyle.backIcon}
          />
        </TouchableHighlight>

        <Text style={mainStyle.headerText}>Transaction History</Text>
      </View>

      <View style={mainStyle.filterSection}></View>
      <View style={mainStyle.entrySection}>
        <ScrollView>
          <TransactionEntry
            isIncome={true}
            category={"education"}
            amount={1000}
            transactionID={10}
            account={"Commercial Bank Statement Account"}
            description={"for Dana pinkama at first salary"}
            transactionDate={"12/10/2023"}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
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

  filterSection: {
    flex: 3,
  },

  entrySection: {
    flex: 19,
  },

  backIcon: {
    flex: 1,
    margin: "auto",
    padding: 4,
    borderColor: Colors.SECONDARY_COLOR,
    borderWidth: 2,
    borderRadius: 8,
  },

  headerText: {
    flex: 15,
    fontSize: 25,
    marginLeft: 15,
    fontWeight: "900",
    color: Colors.SECONDARY_COLOR,
  },
});
