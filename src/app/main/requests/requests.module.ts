import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RequestsComponent} from "./requests.component";

const routes: Routes = [
  {
    path: "", component: RequestsComponent
  }
];

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestsModule {
}
