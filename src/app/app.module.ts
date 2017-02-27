import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFire, AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AutenticacaoService } from './service/autenticacao-service';

import { MenuComponent } from './views/menu.component';
import { AutenticacaoView } from './views/autenticacao/autenticacao';
import { MoradiaListView } from './views/moradia/moradia-list';
import { MoradiaDetailView } from './views/moradia/moradia-detail';

/**
 *
 */
const firebaseConfig:FirebaseAppConfig = {
  apiKey: 'AIzaSyDseJcZFqgfrEZfSZXl5zR0ugKRJS9IRwQ',
  authDomain: 'facool-b6b9b.firebaseapp.com',
  databaseURL: 'https://facool-b6b9b.firebaseio.com',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};

/**
 * 
 */
@NgModule({
    bootstrap: [IonicApp],
    imports: [
        IonicModule.forRoot(MenuComponent),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        MenuComponent,
        AutenticacaoView,
        MoradiaListView,
        MoradiaDetailView
    ],
    entryComponents: [
        MenuComponent,
        AutenticacaoView,
        MoradiaListView,
        MoradiaDetailView
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AutenticacaoService
    ]
})
export class AppModule {
    constructor( angularFire:AngularFire ) {
        window["angularFire"] = angularFire;
    }
}