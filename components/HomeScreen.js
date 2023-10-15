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
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Colors from "../elements/Colors";

export function HomeScreen() {
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

        <View style={notificationAreaStyle.notificationDisplayArea}>
          <TouchableWithoutFeedback
            onPress={() => console.log("pressed")}
            onLongPress={() => console.log("long pressed")}
          >
            <View style={notificationAreaStyle.notificationEntry}>
              <Text
                style={notificationAreaStyle.notificationEntryTitle}
                numberOfLines={1}
              >
                Notification title hear
              </Text>
              <Text
                style={notificationAreaStyle.notificationEntryContent}
                numberOfLines={3}
              >
                As trendy as it is these days, not every app has to use emoji
                for all icons, As trendy as it is these days, not every app has
                to use emoji for all icons
              </Text>
              <Text style={notificationAreaStyle.notificationEntryMeta}>
                12/12/2012 23:23:34
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={welcomeStyle.actionSection}>
        <View>
          <Text style={commonStyle.headerText}>Quick Actions</Text>
        </View>

        <View style={quickActionStyle.container}>
          <TouchableHighlight
            onPress={() => console.log("pressed")}
            style={quickActionStyle.component}
          >
            <View>
              <FontAwesome5
                name="history"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>
                Transaction History
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <MaterialIcons
                name="payment"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>
                Record Transaction
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <FontAwesome5
                name="exchange-alt"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Fund Transfer</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <FontAwesome5
                name="piggy-bank"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Made Investment</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={quickActionStyle.container}>
          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <Entypo
                name="open-book"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Goto{"\n"}Journal</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <MaterialCommunityIcons
                name="typewriter"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>
                Write{"\n"}Journal
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <MaterialIcons
                name="miscellaneous-services"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Journal Settings</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <Text></Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={quickActionStyle.container}>
          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <FontAwesome5
                name="tasks"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>TODO{"\n"}History</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <MaterialIcons
                name="add-task"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Add{"\n"}TODO</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <Octicons
                name="tasklist"
                size={30}
                style={quickActionStyle.icons}
              />
              <Text style={quickActionStyle.textFormat}>Update{"\n"}TODO</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={quickActionStyle.component}
            onPress={() => console.log("pressed")}
          >
            <View>
              <Text></Text>
            </View>
          </TouchableHighlight>
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

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MAIN_COLOR,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const welcomeStyle = StyleSheet.create({
  headerSection: {
    flex: 10,
  },
  notificationSection: {
    flex: 16,
  },
  actionSection: {
    flex: 34,
  },
  logViewSection: {
    flex: 17,
  },
});

const commonStyle = StyleSheet.create({
  headerText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "700",
    color: Colors.SECONDARY_COLOR,
  },
});

const headerSectionStyle = StyleSheet.create({
  topText: {
    margin: 10,
    marginTop: 2,
    marginBottom: 1,
    paddingBottom: 5,
    fontSize: 23,
    fontWeight: "bold",
    color: Colors.SECONDARY_COLOR,
  },
  quoteTest: {
    textAlign: "center",
    flexWrap: "wrap",
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: Colors.SECONDARY_COLOR,
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
    borderColor: Colors.ACCENT_COLOR,
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 8,
    margin: 6,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: Colors.ACCENT_COLOR,
  },

  icons: {
    color: Colors.SECONDARY_COLOR,
    alignSelf: "center",
    marginBottom: 6,
  },

  textFormat: {
    textAlign: "center",
    color: Colors.SECONDARY_COLOR,
    fontSize: 13,
  },
});

const logViewStyle = StyleSheet.create({
  logArea: {
    fontSize: 11,
    fontFamily: Platform.OS === "android" ? "monospace" : "Menlo-Bold",
    color: Colors.SECONDARY_COLOR,
  },
  scrollArea: {
    margin: 8,
    marginTop: 0,
    marginBottom: 4,
  },
});

const notificationAreaStyle = StyleSheet.create({
  notificationDisplayArea: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  notificationEntry: {
    flex: 1,
    margin: 5,
    marginBottom: 1,
    marginTop: 1,
    width: "90%",
    borderRadius: 8,
    backgroundColor: Colors.ACCENT_COLOR,
  },

  notificationEntryTitle: {
    fontSize: 17,
    fontWeight: "800",
    margin: 8,
    marginBottom: 4,
    textAlign: "left",
    color: Colors.SECONDARY_COLOR,
  },
  notificationEntryContent: {
    fontSize: 14,
    textAlign: "justify",
    marginLeft: 8,
    marginRight: 8,
    color: Colors.SECONDARY_COLOR,
  },
  notificationEntryMeta: {
    fontSize: 10,
    textAlign: "right",
    margin: 8,
    color: Colors.SECONDARY_COLOR,
  },
});
