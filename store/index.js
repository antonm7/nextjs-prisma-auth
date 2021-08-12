import create from 'zustand'

export const useStore = create(set => ({
    accessToken: null,
    user:{},
    setAccessToken: (input) => set((state) => ({ accessToken: input })),
    removeAccessToken: () => set({ accessToken: null }),
    setUser: (input) => set((state) => ({ user:input })),
    removeUser: () => set({user:null})
}))
