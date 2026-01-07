// src/types/index.ts

export type Status = 'Draft' | 'Submitted' | 'Published';

// Ensure this name matches the import exactly
export interface VersionHistory {
  v: string;
  date: string;
  author: string;
  note: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  producer: string;
  status: Status;
  updatedAt: string;
  evidenceCount: number;
  description: string;
  attributes: {
    material: string;
    recyclability: string;
  };
  timeline: {
    listed: string;
    updated: string;
    review: string;
  };
  versions: VersionHistory[]; 
}