import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// export default function Game() {
//   return (
//     <View style={styles.container}>
//       <Text>Simple Game</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class Game extends React.Component {
  target = 10 + Math.floor(40 * Math.random());
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingTop: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  target: {
    fontSize: 40,
    backgroundColor: "#aaa",
    marginHorizontal: 50,
    textAlign: "center",
  },
});
