export interface MenuItem {
    name: string;
    subTitle?: string;
    iconClasses: string;
    path?: string[];
    children?: MenuItem[];
    parent?: MenuItem;
}
