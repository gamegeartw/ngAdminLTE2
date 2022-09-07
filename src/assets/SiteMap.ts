// sitemap
import {MenuItem} from "../menu-item";

export const Sitemap:MenuItem[] = [
  {
    name: 'DashBoard',
    subTitle: 'Handy Dashboard',
    iconClasses: 'fa fa-dashboard',
    path: ['/']
  },
  {
    name: 'Page1',
    iconClasses: 'fa fa-file',
    path: ['/Page1']
  },
  {
    name: 'Sub Menu',
    iconClasses: 'fa fa-folder',
    children: [
      {
        name: 'Blank Page',
        iconClasses: 'fa fa-file',
        path: ['/SubMenu/Blank']
      }
    ]
  }
];
