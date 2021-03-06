import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "main",
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
