import  {Injectable, inject, signal} from "@angular/core"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from "@angular/fire/auth"
import { from,Observable } from "rxjs";
import { UserInterface } from "./user.interface";
import { tap } from 'rxjs/operators'; // Import tap operator
@Injectable({
    providedIn: "root",
})
export class AuthService{
    firebaseAuth = inject(Auth)
    user$ = user(this.firebaseAuth)
    currentUserSig = signal<UserInterface | null | undefined>(undefined)


    register(email: string, username: string, password: string): Observable<void> {
        return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password)
          .then(response => updateProfile(response.user, { displayName: username }))
        ).pipe(
          tap(() => this.currentUserSig.set(null)) // Use tap instead of do
        );
      }
    login (email:string, password:string) : Observable<void>{
        const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password).then(
            ()=>{}
        );
        return from (promise)
    }

    logout () : Observable<void>{
        const promise = signOut(this.firebaseAuth)
        return from (promise)
    }
}