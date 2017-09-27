import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import {Http} from '@angular/http';
import {TranslateService, LangChangeEvent} from 'ng2-translate';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public name = 'nameCn';
  isCollapsed = false;
  isFetching = false;
  lang: string;
  menu: any[] = [
  {
    'text': 'Dashboard',
    'translate': '概览',
    'link': '/dashboard',
    'icon': 'anticon-home',
    'selected': false
  },
  {
    'text': 'Users',
    'translate': '用户',
    'link': '/users',
    'icon': 'anticon-user',
    'selected': false
  },
  {
    'text': 'Editor',
    'translate': '编辑',
    'link': '/editor',
    'icon': 'anticon-edit',
    'selected': false
  },
  {
    'text': 'UIElement',
    'translate': 'UI 组件',
    'icon': 'anticon-shop',
    'link': '',
    'selected': false,
    'children': [
      {
        'text': 'Form',
        'translate': '表单',
        'link': '/form',
        'selected': false
      },
      {
        'text': 'Avatar',
        'translate': '头像',
        'link': '/avatar',
        'selected': false
      },
      {
        'text': 'Spin',
        'translate': '加载',
        'link': '/spin',
        'selected': false
      }]
  }]

  constructor(
    router: Router,
    private _message: NzMessageService,
    public translate: TranslateService) {
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart)
        this.isFetching = true;
      if (!(evt instanceof NavigationEnd)) return;
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
      this.setSelected(evt.urlAfterRedirects || evt.url);
    });
  }

  ngOnInit () {
    this.translate.setDefaultLang('zh-CN');              // 2 设置默认语言
    this.lang = this.translate.getBrowserCultureLang(); // 3 检测当前浏览器语言
    localStorage.setItem('browserLang', this.lang);     // 4 保存当前浏览器语言之本地存储  ----》供后续手动切换语言版本
    this.translate.use(this.lang);                    // 5 根据检测到语言，初始化语言版本
  }

  changeLang () {                                       // 6 手动切换语言版本
    this.lang = this.lang === 'en' ? 'zh-CN' : 'en';
    localStorage.setItem('browserLang', this.lang);
    this.translate.use(this.lang);
  }
  setSelected(url: string) {
    if (!url) return;
    this.menu.forEach((child) => {
      child.selected = false;
      if (url === child.link) {
        child.selected = true;
      }
      if (child.children && child.children.length > 0) {
        console.log(child.children)
        child.children.forEach((item) => {
          item.selected = false;
          if (url === item.link) {
            child.selected = true;
            item.selected = true;
          }
        });
      }
    });
  }
}
