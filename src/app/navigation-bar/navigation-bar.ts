import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
//
import {MatIconModule} from '@angular/material/icon';
//
import {CustomLink} from './CustomLink';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';


@Component({
  selector: 'app-navigation-bar',
  imports: [MatToolbar, MatButton, MatIconButton, MatIconModule, RouterLink],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar implements OnInit {
  links: CustomLink[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    for (const route of this.router.config) {
      // we only care about the ones that have a title attribute since the others are not going to be rendered in our navigation bar
      if (route.title) {
        //WARNING: must use string interpolation to convert title from Resolve<string> to just string
        const link: CustomLink = {
          path: `/${route.path}`,
          label: `${route.title}`
        };
        this.links.push(link);
      }
    }
  }
}
