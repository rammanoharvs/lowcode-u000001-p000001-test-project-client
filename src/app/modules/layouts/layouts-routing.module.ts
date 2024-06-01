import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { TestPageComponent } from './components/test-page/test-page.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'test-page', component : TestPageComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
