import { useFavoritesStore } from "./favorites.store"

export const useIsFavorite = (id: string) => useFavoritesStore((s) => !!s.ids[id])
export const useToggleFavorite = () => useFavoritesStore((s) => s.toggle)
