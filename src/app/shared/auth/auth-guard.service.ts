import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
/**
 * Auth guard class implements CanActivate
 */
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
   /*
   // Add your condition on page here , return true  when you want to show page else return false
   if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(["home"]);
      return false;
    }*/
    return true;
  }
}
