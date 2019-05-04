export interface Menu {
  key?: string;
  items: MenuItem[];
}

export interface Footer {
  columns: Menu[];
}

export interface MenuItem {
  url: string;
  key: string;
  icon?: string;
  selected?: boolean;
}
