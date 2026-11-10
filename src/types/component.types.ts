import type { Component } from 'vue';

export interface ICodeTag {
  type?: string;
}

export interface IExternalLinkCard {
  icon: Component;
  hyperlink: string;
  showExternalIcon?: boolean;
  label: string;
  description: string;
  filename?: string;
}

export interface ILayout {
  showHeader?: boolean;
  showFooter?: boolean;
  showPrimarySidebar?: boolean;
  showSecondarySidebar?: boolean;
}

export interface IMetricCard {
  label: string;
  value: string;
  description: string;
  color?: string;
}

export interface ISection {
  icon: Component;
  title: string;
  details: string;
  description: string;
}

export interface ITag {
  icon?: Component;
  label: string;
  color?: string;
  background?: string;
}
