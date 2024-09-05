import { create } from 'zustand'

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedItem: null,
  setPokemon: (pokemon) =>
    set((state) => ({
        ...state,
        pokemon
    })),
  setFilter: (filter) =>
    set((state) => ({
        ...state,
        filter
    })),
  setSelectedItem: (selectedItem) =>
    set((state) => ({
        ...state,
        selectedItem
    })),
}))

export default useStore;