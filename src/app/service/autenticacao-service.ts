import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { Usuario } from '../model/usuario';

/**
 * 
 */
@Injectable()
export class AutenticacaoService {
    /**
     * 
     */
    private authenticationState:FirebaseAuthState;

    /**
     * 
     */
    constructor( private firebaseAuthentication: AngularFireAuth ) {
        this.authenticationState = firebaseAuthentication.getAuth();
        
        firebaseAuthentication.subscribe(( state: FirebaseAuthState ) => {
            this.authenticationState = state;
        });
    }

    /**
     * 
     */
    public entrarComGoogle():firebase.Promise<FirebaseAuthState> {
        return this.firebaseAuthentication.login( {
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    }
    
    /**
     * 
     */
    public entrarComSenha( email:string, senha:string ):firebase.Promise<FirebaseAuthState> {
        return this.firebaseAuthentication.login( {
            email: email,
            password: senha
        }, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    /**
     * 
     */
    public sair():firebase.Promise<void> {
        return this.firebaseAuthentication.logout();
    }

    /**
     * 
     */
    public get usuarioAutenticado(): Usuario {
        if ( this.authenticationState == null ) return null;
        
        const usuario:Usuario = new Usuario();
        usuario.uid = this.authenticationState.auth.uid;
        usuario.nome = this.authenticationState.auth.displayName;
        usuario.email = this.authenticationState.auth.email;
        usuario.photoURL = this.authenticationState.auth.photoURL;
        return usuario;
    }
    
    /**
     * 
     */
    public get isAutenticado(): boolean {
        return this.authenticationState !== null;
    }
}