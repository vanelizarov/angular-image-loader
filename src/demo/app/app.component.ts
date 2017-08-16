import { Component } from '@angular/core';
import { ResponsiveImage, Breakpoint, Size } from 'angular-image-loader';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sizes: Breakpoint[] = [
    { size: Size.XS, width: 0},
    { size: Size.MD, width: 768},
    { size: Size.LG, width: 992},
  ];

  image: ResponsiveImage = {
    placeholder: 'http://via.placeholder.com/35x15?text=placeholder',
    fallback: 'http://via.placeholder.com/350x150?text=fallback',
    xs: {
      '@1x': 'http://via.placeholder.com/150x350?text=xs+1x',
      '@2x': 'http://via.placeholder.com/300x700?text=xs+2x'
    },
    md: {
      '@1x': 'http://via.placeholder.com/350x250?text=md+1x',
      '@2x': 'http://via.placeholder.com/700x500?text=md+2x'
    },
    lg: {
      '@1x': 'http://via.placeholder.com/700x400?text=lg+1x',
      '@2x': 'http://via.placeholder.com/1400x800?text=lg+2x'
    }
  };
}
