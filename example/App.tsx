import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import { MapboxNavigationView } from "expo-mapbox-navigation";
import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiZHNhbGxlbnoiLCJhIjoiY20zcXhqODN6MHNrbTJyb203MW0xODlsayJ9.G1ekVmBY9o2UIvDsSwLocg"
);

export default function App() {
  React.useEffect(() => {
    ScreenOrientation.unlockAsync();
  }, []);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationAllowed(true);
      } else {
        setLocationAllowed(false);
      }
    })();
  }, []);

  const [locationAllowed, setLocationAllowed] = React.useState(false);
  return (
    <View style={styles.container}>
      {locationAllowed ? (
        <MapboxNavigationView
          style={{ flex: 1 }}
          coordinates={[
            { latitude: 1.281334498053631, longitude: 103.84454783223985 },
            { latitude: 1.2867036183969094, longitude: 103.85450798621314 },
          ]}
          routeProfile="mapbox/walking"
        />
      ) : (
        <Text style={styles.text}>Location required for mapbox navigation</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
  },
});
