import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Button,
  Animated,
} from "react-native";

import { useFonts } from "expo-font";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MAIN_COLOR = "#232329";
const SECONDARY_COLOR = "#F4F4FB";
const ACCENT_COLOR = "#101213";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/JetBrainsMono-Regular.ttf"),
  });

  return (
    <SafeAreaView style={mainStyle.container}>
      <View style={welcomeStyle.headerSection}>
        <Text style={headerSectionStyle.topText}>
          Hi Chathura, Good Morning
        </Text>
        <Text style={headerSectionStyle.quoteTest} numberOfLines={3}>
          As trendy as it is these days, not every app has to use emoji for all
          icons — maybe you want to pull in a popular set through an icon font
          like FontAwesome, Glyphicons or Ionicons, or you just use some PNGs
          that you carefully picked out on The Noun Project.
        </Text>
      </View>

      <View style={welcomeStyle.notificationSection}>
        <View>
          <Text style={commonStyle.headerText}>Notifications</Text>
        </View>
        <View></View>
      </View>

      <View style={welcomeStyle.actionSection}>
        <View>
          <Text style={commonStyle.headerText}>Quick Actions</Text>
        </View>

        <View style={quickActionStyle.container}>
          <View style={quickActionStyle.component}>
            <FontAwesome5
              name="history"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Transaction History</Text>
          </View>

          <View style={quickActionStyle.component}>
            <MaterialIcons
              name="payment"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Record Transaction</Text>
          </View>

          <View style={quickActionStyle.component}>
            <FontAwesome5
              name="exchange-alt"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Fund Transfer</Text>
          </View>

          <View style={quickActionStyle.component}>
            <FontAwesome5
              name="piggy-bank"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Made Investment</Text>
          </View>
        </View>

        <View style={quickActionStyle.container}>
          <View style={quickActionStyle.component}>
            <Entypo name="open-book" size={45} style={quickActionStyle.icons} />
            <Text style={quickActionStyle.textFormat}>Goto{"\n"}Journal</Text>
          </View>

          <View style={quickActionStyle.component}>
            <MaterialCommunityIcons
              name="typewriter"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Write Journal</Text>
          </View>

          <View style={quickActionStyle.component}>
            <MaterialIcons
              name="miscellaneous-services"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Journal Settings</Text>
          </View>

          <View style={quickActionStyle.component}>
            <Text></Text>
          </View>
        </View>

        <View style={quickActionStyle.container}>
          <View style={quickActionStyle.component}>
            <FontAwesome5
              name="tasks"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>TODO History</Text>
          </View>

          <View style={quickActionStyle.component}>
            <MaterialIcons
              name="add-task"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Add{"\n"}TODO</Text>
          </View>

          <View style={quickActionStyle.component}>
            <Octicons
              name="tasklist"
              size={45}
              style={quickActionStyle.icons}
            />
            <Text style={quickActionStyle.textFormat}>Update TODO</Text>
          </View>

          <View style={quickActionStyle.component}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={welcomeStyle.logViewSection}>
        <View>
          <Text style={commonStyle.headerText}>Realtime System Log</Text>
          <ScrollView style={logViewStyle.scrollArea}>
            <Text style={logViewStyle.logArea}>
              Hey there, Creating and maintaining this plugin has been a fun
              ride that started in 2016. We thank you all for your appreciation
              and for making the most out of it! You've motivated us to spend
              countless hours improving the plugin, and made us happy to give
              back to the Open Source community. Hey there, Creating and
              maintaining this plugin has been a fun ride that started in 2016.
              We thank you all for your appreciation and for making the most out
              of it! You've motivated us to spend countless hours improving the
              plugin, and made us happy to give back to the Open Source
              community.Hey there, Creating and maintaining this plugin has been
              a fun ride that started in 2016. We thank you all for your
              appreciation and for making the most out of it! You've motivated
              us to spend countless hours improving the plugin, and made us
              happy to give back to the Open Source community.
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const welcomeStyle = StyleSheet.create({
  headerSection: {
    flex: 5,
  },
  notificationSection: {
    flex: 6,
  },
  actionSection: {
    flex: 20,
  },
  logViewSection: {
    flex: 7,
  },
});

const commonStyle = StyleSheet.create({
  headerText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "700",
    color: SECONDARY_COLOR,
  },
});

const headerSectionStyle = StyleSheet.create({
  topText: {
    margin: 10,
    marginBottom: 1,
    paddingBottom: 5,
    fontSize: 23,
    fontWeight: "bold",
    color: SECONDARY_COLOR,
  },
  quoteTest: {
    textAlign: "center",
    flexWrap: "wrap",
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: SECONDARY_COLOR,
  },
});

const quickActionStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },

  component: {
    flex: 1,
    justifyContent: "space-evenly",
    // backgroundColor: "#0fb",
    borderColor: "#fff",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 8,
    margin: 8,
    backgroundColor: SECONDARY_COLOR,
  },

  icons: {
    color: ACCENT_COLOR,
  },

  textFormat: {
    textAlign: "center",
    color: ACCENT_COLOR,
    // fontFamily: "JetBrainsMono-Regular",
  },
});

const logViewStyle = StyleSheet.create({
  logArea: {
    fontSize: 10,
    fontFamily: "monospace",
    color: SECONDARY_COLOR,
  },
  scrollArea: {
    margin: 8,
    marginTop: 0,
    marginBottom: 4,
  },
});

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
