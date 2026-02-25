import { Stack } from "expo-router"
import { useAppFonts } from "@/config/fonts"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Toast from "react-native-toast-message"
import ReviewOptionsModal from "@/features/review/components/ReviewOptionsModal"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/shared/api/reactQuery/client"
import { toastConfig } from "@/shared/ui/Toast/ToastConfig"
import { ExtendedStackNavigationOptions } from "expo-router/build/layouts/StackClient"

const bottomTransition: ExtendedStackNavigationOptions = {
  animation: "slide_from_bottom"
}

const RootLayout = () => {
  const [loaded] = useAppFonts()

  if (!loaded) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false}}> 
          <Stack.Screen name="review/[slug]/all-reviews" options={bottomTransition}/>
          <Stack.Screen name="review/[slug]/leave-review" options={bottomTransition}/>
        </Stack>
        <Toast config={toastConfig}/>
        <ReviewOptionsModal />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout