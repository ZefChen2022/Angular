import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient ) { }

  private currentUserSubject = new BehaviorSubject<any>({}as any);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  Login(LoginData:Login):Observable<boolean>{
    return this.httpClient.post('https://localhost:7292/api/Account/login', LoginData).pipe(map((response:any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
  }));
  }

  Logout(){
    
  }

  Register(){
    
  }
}
