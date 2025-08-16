import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type {User, UserAuth} from '../../models/userAuth';
import {Router} from '@angular/router';
import {API_BASE_URL} from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly baseUrl = inject(API_BASE_URL);
  private http = inject(HttpClient);
  private router = inject(Router);

  user = signal<User | null>(null);
  isAuthenticated = signal(false);

  checkAuth(): void {
    this.http.get<User>(this.baseUrl + '/user').subscribe({
      next: (user) => {
        if(user){
          this.user.set(user);
          this.isAuthenticated.set(true);
          const url = this.router.url;

          if(url === '/login' || url === '/register'){
            void this.redirect();
          }
        }
      },
      error: this.error
    });
  }

  register(payload: { name: string; email: string; password: string }): void {
    this.http.post<UserAuth>(this.baseUrl + '/register', payload).subscribe({
      next: this.next,
      error: this.error
    });
  }

  login(payload: { email: string; password: string }): void {
    this.http.post<UserAuth>(this.baseUrl + '/login', payload).subscribe({
      next: this.next,
      error: this.error
    });
  }

  private next = (res: UserAuth)=> {
    this.user.set(res.user);
    this.isAuthenticated.set(true);
    localStorage.setItem('access_token', res.access_token)
    void this.redirect();
  }

  private error = (_err: unknown)=> {
    this.user.set(null);
    this.isAuthenticated.set(false);
    localStorage.removeItem('access_token');
  }

  private redirect() {
    return this.router.navigate(['/']);
  }
}
