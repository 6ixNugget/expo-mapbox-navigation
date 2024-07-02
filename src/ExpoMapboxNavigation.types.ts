import { ViewStyle, StyleProp } from "react-native/types";

export type ExpoMapboxNavigationViewProps = {
  waypoints: Array<{ latitude: number; longitude: number }>;
  locale?: string;
  style?: StyleProp<ViewStyle>;
};
