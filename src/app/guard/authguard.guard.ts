import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';



export const authguardGuard: CanActivateFn = (route, state) => {

 const loginService = inject(LoginService);
const router = inject(Router);
const expectedRole = route.data['role'];
const userRole = loginService.getRole();

if(loginService.isAuthenticated() && userRole == expectedRole){
  return true;
}else{
  router.navigate(['/login']);
  return false
}
};
