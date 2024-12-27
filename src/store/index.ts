import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

type StateTypeWithImmer<T> = StateCreator<Slice1Store & Slice2Store, [["zustand/immer", never]], [], T>;

type Slice1Store = {};
type Slice1Type = StateTypeWithImmer<Slice1Store>;
const Slice1: Slice1Type = (set, get, ...args) => ({});

type Slice2Store = {};
type Slice2Type = StateTypeWithImmer<Slice2Store>;
const Slice2: Slice2Type = (set, get, ...args) => ({});

export const useStore = create<Slice1Store>()(
  devtools(
    immer(
      persist(
        (...args) => ({
          ...Slice1(...args),
          ...Slice2(...args),
        }),
        {
          name: "ZustandStore",
          onRehydrateStorage: () => {},
        },
      ),
    ),
    {
      name: "ZustandStore",
      enabled: true,
    },
  ),
);
