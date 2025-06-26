import { Routes } from '@angular/router';
//
import {HomePage} from './home-page/home-page';
import {AboutPage} from './about-page/about-page';

export const routes: Routes = [
  {path: 'home', component: HomePage, title: 'Home'},
  {path: 'about', component: AboutPage, title: 'About'},
];
