// sitemap
import {MenuItem} from "../menu-item";

export const Sitemap:MenuItem[] = [
  {
    name: 'DashBoard',
    subTitle: 'DashBoard SubTitle',
    iconClasses: 'fa fa-dashboard',
    path: ['/'],
    show: true,
  },
  {
    name: 'Page1',
    iconClasses: 'fa fa-file',
    path: ['/Page1'],
    show: true,
  },
  {
    name: 'Search',
    subTitle: 'Search SubTitle',
    iconClasses: 'fa fa-search',
    path: ['/Search'],
    show:false
  },
  {
    name: 'Sub Menu',
    iconClasses: 'fa fa-folder',
    show:true,
    children: [
      {
        name: 'Blank Page',
        iconClasses: 'fa fa-file',
        path: ['/SubMenu/Blank'],
        show: true
      }
    ]
  }
];
