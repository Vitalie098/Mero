const API_MERO = process.env.EXPO_PUBLIC_API_MERO

if (!API_MERO) {
  throw new Error("Missing EXPO_PUBLIC_API_MERO in environment variables")
}

export { API_MERO }