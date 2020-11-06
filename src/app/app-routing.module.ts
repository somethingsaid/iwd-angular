import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
