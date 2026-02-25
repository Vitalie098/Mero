import { useFonts } from "expo-font";

export const useAppFonts = () => {
  return useFonts({
    "Merriweather-Black": require("~/assets/fonts/Merriweather_Black.ttf"),
    "Merriweather-Bold": require("~/assets/fonts/Merriweather_Bold.ttf"),

    "OpenSans-SemiBold": require("~/assets/fonts/OpenSans_SemiBold.ttf"),
    "OpenSans-Regular": require("~/assets/fonts/OpenSans_Regular.ttf"),
    "OpenSans-Bold": require("~/assets/fonts/OpenSans_Bold.ttf"),

    "SfProText-Regular": require("~/assets/fonts/SfProText_Regular.otf"),
    "SfProText-Semibold": require("~/assets/fonts/SfProText_Semibold.otf"),
  });
}
