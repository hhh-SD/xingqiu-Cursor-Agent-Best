import { LucideIcon } from 'lucide-react';

export interface SectionItem {
  title: string;
  content: string | string[];
  type?: 'text' | 'list' | 'code' | 'tip';
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: SectionItem[];
}

export interface NavigationItem {
  id: string;
  label: string;
}