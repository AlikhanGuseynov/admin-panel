import { NgModule } from '@angular/core';
import {PageComponent} from './page/page.component';
import {RouterModule, Routes} from '@angular/router';
import {AllArticlesComponent} from './all-articles/all-articles.component';
import {UploadFormComponent} from './upload-form/upload-form.component';
import {UploadListComponent} from './upload-list/upload-list.component';
import {NewsListComponent} from './news-list/news-list.component';

const routes: Routes = [
  {path: 'new-article', component: PageComponent},
  {path: 'all-articles', component: AllArticlesComponent},
  {path: 'upload-img', component: UploadFormComponent},
  {path: 'upload-list', component: UploadListComponent},
  {path: 'news-list', component: NewsListComponent},
  {path: '', component: AllArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

