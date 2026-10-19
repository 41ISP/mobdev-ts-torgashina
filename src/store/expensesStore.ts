import { create } from "zustand";
import { persist } from "zustand/middleware";

export useExpenseStore = create() (
    persist ((set) => ({}), {name: 'expenses'})
)