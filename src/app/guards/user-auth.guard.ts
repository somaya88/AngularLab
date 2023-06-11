import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { inject } from '@angular/core';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const authService=inject(UserAuthService);
  const router=inject(Router);
  if(authService.isUserLogged)
  {
    return true;
  }
  else{
    alert("You must be logged in first");
    router.navigate(['/Login']);
    return false;
  }
};
