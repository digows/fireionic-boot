import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AutenticacaoService } from '../service/autenticacao-service';

import { AutenticacaoView } from './autenticacao/autenticacao';
import { MoradiaListView } from './moradia/moradia-list';

/**
 * 
 */
@Component({
    templateUrl: 'menu.html'
})
export class MenuComponent {
  
    /**
     * 
     */
    @ViewChild(Nav) 
    private navigation:Nav;
    /**
     * 
     */
    private rootPage:any = AutenticacaoView;
    /**
     * 
     */
    private menus:Array<{title: string, view: any}>;

    /**
     * 
     */
    constructor(
        private platform:Platform, 
        private menu:MenuController,
        private autenticacaoService:AutenticacaoService) {
        
        // Okay, so the platform is ready and our plugins are available.
        this.platform.ready().then(() => {
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });

        this.createMenus();
    }
    
    private createMenus():void{
        this.menus = [
            { title: 'Moradias', view: MoradiaListView },
        ];
    }

    /**
     * 
     */
    public onGoToView( view ):void {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.navigation.setRoot( view );
    }
    
    /**
     * 
     */
    public onSair():void {
        this.autenticacaoService.sair();
        this.onGoToView(AutenticacaoView);
    }
}
