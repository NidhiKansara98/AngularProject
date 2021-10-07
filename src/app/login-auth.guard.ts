import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginAuthGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    if (username == 'admin' && password == 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
