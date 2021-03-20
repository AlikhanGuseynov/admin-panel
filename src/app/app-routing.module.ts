import { NgModule } from '@angular/core';
import {PageComponent} from './page/page.component';
import {RouterModule, Routes} from '@angular/router';
import {AllArticlesComponent} from './all-articles/all-articles.component';

const routes: Routes = [
  {path: 'new-article', component: PageComponent},
  {path: 'all-articles', component: AllArticlesComponent},
  {path: '', component: AllArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

