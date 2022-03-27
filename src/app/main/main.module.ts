import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "reports",
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: "requests",
        loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)
      },
      {
        path: '', redirectTo: 'reports', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule {
}
