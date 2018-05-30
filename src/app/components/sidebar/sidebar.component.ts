import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icon: string;
    class: string;
}



export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'LEFTMENU.OVERVIEW',  icon: 'dashboard', class: '', type: 'link' },
    { path: '/addresses', title: 'LEFTMENU.ADDRESSES',  icon:'book', class: '', type: 'link' },
    { path: '/send', title: 'LEFTMENU.SEND',  icon:'send', class: '', type: 'link' },
    { path: '/transactions', title: 'LEFTMENU.TRANSACTIONS',  icon:'transform', class: '', type: 'link' },
    { path: '/namecoin', title: 'LEFTMENU.NAMECOIN',  icon:'games', class: '', type: 'link' },
    { path: '/settings', title: 'LEFTMENU.SETTINGS',  icon:'settings', class: '', type: 'link' },
    { path: '/console', title: 'LEFTMENU.CONSOLE',  icon:'web_asset', class: '', type: 'link' },
    { path: '/exit', title: 'LEFTMENU.EXIT',  icon:'cancel', class: '', type: 'script' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
	exitApp()
	{
	 
	 this.globalService.shutDown();  
        
	 
	}  
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}