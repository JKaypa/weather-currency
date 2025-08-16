import {CanActivateFn, Router} from '@angular/router';
import {Auth} from '../service/auth/auth';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (_route, _state) => {
  const auth = inject(Auth);
  const router = inject(Router);


  if(!auth.isAuthenticated()){
    return router.createUrlTree(['/login'])
  }


  return auth.isAuthenticated()

};
