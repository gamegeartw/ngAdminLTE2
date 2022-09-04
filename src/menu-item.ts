export interface MenuItem {
    name: string;
    iconClasses: string;
    path?: string[];
    children?: MenuItem[];
}
