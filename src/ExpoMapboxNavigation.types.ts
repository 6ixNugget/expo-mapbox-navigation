import { StyleProp, ViewStyle } from "react-native"

type ProgressEvent = {
  distanceRemaining: number
  distanceTraveled: number
  durationRemaining: number
  fractionTraveled: number
}

export type ExpoMapboxNavigationViewProps = {
  coordinates: Array<{ latitude: number; longitude: number }>
  waypointIndices?: number[]
  useRouteMatchingApi?: boolean
  locale?: string
  routeProfile?: string
  routeExcludeList?: string[]
  mapStyle?: string
  mute?: boolean
  onRouteProgressChanged?: (event: { nativeEvent: ProgressEvent }) => void
  onCancelNavigation?: () => void
  onWaypointArrival?: (event: { nativeEvent: ProgressEvent | undefined }) => void
  onFinalDestinationArrival?: () => void
  onRouteChanged?: () => void
  onUserOffRoute?: () => void
  onRoutesLoaded?: () => void
  style?: StyleProp<ViewStyle>
}
