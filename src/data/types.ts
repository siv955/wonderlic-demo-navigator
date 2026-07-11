export type ArchetypeId = "ethan" | "derek" | "caleb" | "riley" | "isabelle" | "simon";

export interface Archetype {
  id: ArchetypeId;
  firstName: string;
  lastName: string;
  memoryHook: string;
  workerCategory: string;
  roleFraming: string;
  customerPain: string;
  fullStory: string;
  easierAttributes: string[];
  harderAttributes: string[];
  developAnchor: string;
  developAnchorLogic: string;
  alternateAttributes: string[];
  teamDynamicsSection: string;
  teamDynamicsPage: string;
  selectLens: string;
  demoProfileId: string;
  demoProfileName: string;
  selectStory: string;
  selectSignals: string[];
  interviewProbe: string;
  selectRisk: string;
  developHandoff: string;
  useWhenCustomerSays: string;
  tdTeamSetup: string;
  tdVisualPattern: string;
  tdManagerInsight: string;
  tdRepTalkTrack: string;
  tdBuildNotes: string;
}

export interface Profile {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  coreOrExtra: "Core" | "Extra";
  roleFlavor: string;
  scores: Record<string, number>;
  bestHighAttributes: string[];
  bestLowAttributes: string[];
  associatedArchetypeId: ArchetypeId | null;
}

export interface AttributeMeta {
  name: string;
  type: string;
}
