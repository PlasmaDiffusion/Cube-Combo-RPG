import { create } from "zustand";
import BattlerObject from "../interfaces/battlerObject";

//For storing the common rpg battle stats, like player hp, mp, gold, atk, and def
interface PlayerState {
  battler: BattlerObject;
  setHp: (newValue: number) => void;
  setMaxHp: (newValue: number) => void;
  setMp: (newValue: number) => void;
  setMaxMp: (newValue: number) => void;
  setGold: (newValue: number) => void;
  setAtk: (newValue: number) => void;
  setDef: (newValue: number) => void;
  resetValues: () => void;
}

const defaultPlayerValues: BattlerObject = {
  hp: 10,
  maxHp: 10,
  mp: 10,
  maxMp: 10,
  gold: 5,

  atk: 1,
  def: 0,
};

const usePlayerStore = create<PlayerState>((set) => ({
  battler: defaultPlayerValues,

  setHp: (value: number) =>
    set((state) => ({ battler: { ...state.battler, hp: value } })),
  setMaxHp: (value: number) =>
    set((state) => ({ battler: { ...state.battler, maxHp: value } })),
  setMp: (value: number) =>
    set((state) => ({ battler: { ...state.battler, mp: value } })),
  setMaxMp: (value: number) =>
    set((state) => ({ battler: { ...state.battler, maxMp: value } })),
  setGold: (value: number) =>
    set((state) => ({ battler: { ...state.battler, gold: value } })),
  setAtk: (value: number) =>
    set((state) => ({ battler: { ...state.battler, atk: value } })),
  setDef: (value: number) =>
    set((state) => ({ battler: { ...state.battler, def: value } })),

  resetValues: () => set(() => ({ battler: defaultPlayerValues })),
}));

export default usePlayerStore;
