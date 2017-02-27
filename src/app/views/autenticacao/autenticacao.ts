import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';

import { Usuario } from '../../model/usuario';
import { AutenticacaoService } from '../../service/autenticacao-service';

import { MoradiaListView } from '../moradia/moradia-list';

/**
 * 
 */
@Component({
  selector: 'autenticacao',
  templateUrl: 'autenticacao.html'
})
export class AutenticacaoView {

    /**
     * 
     */
    private usuario:Usuario = new Usuario();

    /**
     * 
     */
    constructor(
            private autenticacaoService:AutenticacaoService,
            private menu:MenuController,
            private navigationController: NavController) {

        if ( this.autenticacaoService.isAutenticado ){
            this.onAutenticado();
        }
    }
    
    /**
     * 
     */
    public onEntrarComSenha():void{
        this.autenticacaoService.entrarComSenha( this.usuario.email, this.usuario.senha )
            .then(() => this.onAutenticado() );
    }
    
    /**
     * 
     */
    public onEntrarComGoogle():void {
        this.autenticacaoService.entrarComGoogle()
            .then(() => this.onAutenticado() );
    }

    /**
     * 
     */
    private onAutenticado(): void {
        console.log(this.autenticacaoService.usuarioAutenticado );
        //go to moradia list
        this.navigationController.setRoot( MoradiaListView );
    }
}
