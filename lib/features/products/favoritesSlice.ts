import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
interface FavoritesState {
  productIds: number[]
}

// Define the initial state using that type
const initialState: FavoritesState = {
  productIds: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      if (!state.productIds.includes(action.payload)) {
        state.productIds.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.productIds = state.productIds.filter(id => id !== action.payload)
    },
    toggle: (state, action: PayloadAction<number>) => {
      const index = state.productIds.indexOf(action.payload)
      if (index === -1) {
        state.productIds.push(action.payload)
      } else {
        state.productIds.splice(index, 1)
      }
    },
    clear: (state) => {
      state.productIds = []
    },
  },
})

export const { add, remove, toggle, clear } = favoritesSlice.actions

// Selector to get all favorite product IDs
export const selectFavorites = (state: RootState) => state.favorites.productIds

export default favoritesSlice.reducer
