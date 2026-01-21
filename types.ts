// Fix: Import React to resolve 'Cannot find namespace React'
import React from 'react';

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProblemItem {
  id: string;
  text: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}