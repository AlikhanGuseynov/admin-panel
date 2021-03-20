import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import {FormsModule} from '@angular/forms';
import {CrudService} from './services/crud.service';
import {NewTranslateComponent} from './new-translate/new-translate.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AllArticlesComponent } from './all-articles/all-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NewTranslateComponent,
    AllArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
