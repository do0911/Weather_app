import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types"

// export default class Weather extends Component {
//   render() {
//     return (
//     <LinearGradient
//       colors={["#00C6FB", "#005BEA"]}
//       style={styles.container}>

//       <View style={styles.upper}>
//         <Ionicons color="white" size={144} name="ios-rainy" />
//         <Text style={styles.temp}>35</Text>
//       </View>

//       <View style={styles.lower}>
//         <Text style={styles.title}>Raining</Text>
//         <Text style={styles.subtitle}>For more info</Text>
//       </View>

//     </LinearGradient>
//     );
//   }
// }
// navigator.geolocation.getCurrentPosition(function(position) {console.log(position)})

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "Stay home",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Go outside",
    icon: "ios-sunny"
  },
  Thunder: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Stay home",
    icon: "ios-Thunderstorm"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Hmm..",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "build a snowman",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Hmm..",
    icon: "ios-rainy"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Hmm..",
    icon: "ios-rainy"
  },
};
//[weatherName]
function Weather({ weatherName, temp}) {
  return (
  <LinearGradient 
    colors={weatherCases[weatherName].colors}
    style={styles.container}
    >
    <View style={styles.upper}>
      <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
  <Text style={styles.temp}>{temp}º{weatherName}</Text>
      </View>
      <View style={styles.lower}>
  <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    temp: {
      fontSize: 48,
      backgroundColor: "transparent",
      color: "white",
      marginTop: 10
    },
    lower: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingLeft: 25
    },
    title: {
      fontSize: 38,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 10,
      fontWeight: "400"
    },
    subtitle: {
      fontSize: 24,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 24,
    }
  });