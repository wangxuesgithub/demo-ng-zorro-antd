import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { routes } from './routes/routes';
import { ChartsModule } from 'ng2-charts';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SpinComponent } from './spin/spin.component';
import { EditorComponent } from './editor/editor.component';

export function createTranslateLoader(http: Http) {                 // 加载国际化指令文件解析路径
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    ChartsModule,
    AceEditorModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })// 根模块配置国际化
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    UsersComponent,
    FormComponent,
    AvatarComponent,
    SpinComponent,
    EditorComponent
  ],
  providers: [TranslateService], // 根模块引入服务TranslateService
  bootstrap: [AppComponent]
})
export class AppModule {}
