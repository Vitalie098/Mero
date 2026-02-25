import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type FavoritesState = {
  ids: Record<string, true>
  toggle: (id: string) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      ids: {},
      toggle: (id) =>
        set((state) => {
          if (state.ids[id]) {
            const { [id]: _, ...rest } = state.ids
            return { ids: rest }
          }
          return { ids: { ...state.ids, [id]: true } }
        }),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ ids: state.ids }),
      version: 1,
    },
  ),
)
