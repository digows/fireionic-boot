import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Moradia } from '../../model/moradia';

/**
 * 
 */
@Component({
  selector: 'moradia-detail',
  templateUrl: 'moradia-detail.html'
})
export class MoradiaDetailView {
    /**
     * 
     */
    private moradia:Moradia;

    /**
     * 
     */
    constructor(
            public navigationController: NavController, 
            public navParams: NavParams) {
        
        //obtem a moradia da tela de listagem selecionada.
        this.moradia = navParams.get('moradia');
    }
}
