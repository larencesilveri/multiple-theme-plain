import { Component } from '@angular/core';
import {ThemeService} from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'o mail';
  activeThem = 'whiteThemProps';
  constructor(private themService: ThemeService) {
  }
  // tslint:disable-next-line:typedef
  toggleThem(activeTheme: string = 'whiteThemProps') {
    console.log('clicked');
    // refactor this ugly code :) for demo only
    // @ts-ignore
    this.themService.setActiveThem(activeTheme);
  }
}
