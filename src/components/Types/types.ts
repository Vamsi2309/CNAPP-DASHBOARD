// types.ts
export interface Widget {
  id: string;
  name: string;
  text: string;
  tab?: string;
  isActive: boolean;
  chartType: string;
  chartData?: { name: string; value: number; fill: string }[];
  totalValue?: number;
  emptyMessage?: string;
}

export interface Category {
  id: string;
  name: string;
  tab: string;
  widgets: Widget[];
}
