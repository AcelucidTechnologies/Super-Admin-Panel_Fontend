import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';
import { SideNaveMenueRoute } from './sidebar-routes.config';
import { MenuItem } from 'primeng/api';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('toggleSidebar', [
      state(
        'close',
        style({
          width: '0rem',
        })
      ),
      state(
        'open',
        style({
          width: '15rem',
        })
      ),
      transition('close => open', [animate('300ms')]),
      transition('open => close', [animate('300ms')]),
    ]),
    trigger('mToggleSidebar', [
      state(
        'close',
        style({
          width: '0px',
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          width: '15rem',
          visibility: 'visible',
        })
      ),
      transition('close => open', [animate('300ms')]),
      transition('open => close', [animate('300ms')]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  activeItem: any;
  @ViewChild('panelMenu') panelMenu: any;

  device: string = '';
  state: string = '';
  closed: boolean = false;
  isShowing: boolean = true;
  iconColor: string = '';
  items!: MenuItem[];
  moduleList: string[] = [];

  username: string;
  image: string = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';
  itemShow: any[] = [];

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private permissionService: ModulePermissionService,
    private renderer: Renderer2,
    private adminService: AdminService
  ) {
    this.permissionService.getModulePermission().subscribe((res) => {
      this.moduleList = res[0].moduleList;
      this.username = res[0].username;
      this.items = SideNaveMenueRoute;
      this.items = this.items.filter((val) => {
        if (this.moduleList.includes(val.label)) return val;
        else return null;
      });
    });

    this.username = localStorage.getItem('UserData');
    this.getImage();
  }

  activeMenu(event) {
    let node;
    if (event.target.classList.contains('p-submenu-header') == true) {
      node = 'submenu';
    } else if (event.target.tagName === 'SPAN') {
      node = event.target.parentNode.parentNode;
    } else {
      node = event.target.parentNode;
    }
    if (node != 'submenu') {
      let menuitem = document.getElementsByClassName('p-menuitem');
      for (let i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.remove('active');
      }
      node.classList.add('active');
    }
  }

  getImage() {
    this.adminService.getAdminDetails(this.username).subscribe((res) => {
      if (res[0].image) {
        this.image = res[0].image;
      }
    });
  }

  ngOnInit() {
    if (window.innerWidth > 992) {
      this.device = 'desktop';
      this.state = 'open';
    } else {
      this.device = 'mobile';
      this.state = 'close';
    }
    this.closed = false;
    if (this.router.url === '/') {
      this.isShowing = false;
    }
    this.iconColor = this.isShowing ? 'show' : 'hide';
  }

  toggleSidebar() {
    if (this.state === 'open') {
      this.state = 'close';
      this.closed = true;
    } else {
      this.state = 'open';
      this.closed = false;
    }
  }

  open() {
    if (this.state === 'close' && this.closed) {
      this.state = 'open';
    }
  }

  close() {
    if (this.state === 'open' && this.closed) {
      setTimeout(() => {
        this.state = 'close';
      }, 400);
    }
  }

  getClosedStyle() {
    return {
      width: '55px',
    };
  }

  getOpenedStyle() {
    return {
      width: '200px',
    };
  }
}
