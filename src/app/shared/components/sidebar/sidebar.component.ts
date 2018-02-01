import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Router} from '@angular/router';
import {menus} from './menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [trigger('showArrow', [
    state('active', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    state('inactive', style({
      opacity: 0,
      transform: 'scale(0)'
    })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => inactive', animate('300ms ease-out'))
  ])]
})

export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public menus: any = menus;
  public statePath: any = {  // 侧边栏状态
    index: -1, // 层数
    pathId: ''  // 路径ID
  };

  constructor(protected router: Router) {
  }

  ngOnInit() {
    this.statePath.index = 0;
    this.statePath.pathId = '-1';
    this.statePath.index = sessionStorage.getItem('StatePath1');
    this.statePath.pathId = sessionStorage.getItem('StatePath2');
  }

  ngAfterViewInit() {
    if (this.statePath.pathId) {
      setTimeout(() => {
        this.changeClass(this.statePath.index - 0, this.statePath.pathId - 0, true);
      });
    } else {
      this.statePath.index = 0;
      this.statePath.pathId = '-1';
      setTimeout(() => {
        this.changeClass(this.statePath.index - 0, this.statePath.pathId - 0, true);
        this.changeArrow(this.statePath.index - 0, '/');
      });
    }
  }

  // 改变小图标
  public changeArrow(index: any, routeLink: any) {
    if (routeLink !== undefined) {
      sessionStorage.setItem('StatePath1', index);
      sessionStorage.setItem('StatePath2', '-1');
      this.router.navigate([routeLink]);
    }
    this.menus.forEach((menu) => {
      if (index === menu.index) {
        menu.isActive = !menu.isActive;
        menu.plusActive = menu.isActive ? 'inactive' : 'active';
        menu.minusActive = menu.isActive ? 'active' : 'inactive';
      } else {
        menu.isActive = false;
        menu.plusActive = 'active';
        menu.minusActive = 'inactive';
        menu.list.forEach((list) => {
          list.isActive = false;
        });
      }
    });

  }

  // 修改点击之后菜单的样式
  public changeClass(menuIndex: any, listIndex: any, type: boolean = false) {
    this.menus.forEach((menu) => {
      if (menuIndex === menu.index) {
        if (type) {
          menu.isActive = !menu.isActive;
          if (listIndex !== '-1') {
            const dom = document.getElementById(menu.id);
            if (dom) {
              dom.classList.add('in');
            }
          }
        }
        menu.list.forEach((list, index2) => {
          if (listIndex === index2 + 1) {
            list.isActive = true;
            if (type) {
              menu.plusActive = menu.isActive ? 'inactive' : 'active';
              menu.minusActive = menu.isActive ? 'active' : 'inactive';
            } else {
              sessionStorage.setItem('StatePath1', menuIndex);
              sessionStorage.setItem('StatePath2', listIndex);
            }
          } else {
            list.isActive = false;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    sessionStorage.removeItem('StatePath1');
    sessionStorage.removeItem('StatePath2');
    this.statePath = {
      index: -1,
      pathId: ''
    };
    this.menus.forEach((menu) => {
      menu.isActive = false;
      menu.list.forEach((list) => {
        list.isActive = false;
      });
    });
  }
}
