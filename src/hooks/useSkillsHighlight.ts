import { create } from 'zustand';

interface SkillsStore {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
  scrollToSkill: string | null;
  setScrollToSkill: (skill: string | null) => void;
}

export const useSkillsHighlight = create<SkillsStore>((set) => ({
  activeSkill: null,
  setActiveSkill: (skill) => set({ activeSkill: skill }),
  scrollToSkill: null,
  setScrollToSkill: (skill) => set({ scrollToSkill: skill }),
}));