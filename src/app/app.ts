import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//
import {NavigationBar} from './navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'firebase-angular-crud';
}
