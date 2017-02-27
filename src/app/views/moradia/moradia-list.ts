import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';

import { Moradia } from '../../model/moradia';

import { MoradiaDetailView } from './moradia-detail';

/**
 * 
 */
@Component({
  selector: 'moradia-list',
  templateUrl: 'moradia-list.html'
})
export class MoradiaListView {
    /**
     * 
     */
    private moradias:FirebaseListObservable<any[]>;

    /**
     * 
     */
    constructor( 
         private navigation:NavController, 
         private navigationParams:NavParams ) {

        this.moradias = Moradia.list({limitToLast:100});
    }
    
    /**
     * 
     */
    public onMoradiaSelected( event, moradia:Moradia ):void{
        
        //navega até a tela de detalhe
        this.navigation.push(MoradiaDetailView, {
            moradia: moradia
        });
    }
}
