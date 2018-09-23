import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryListComponent } from '../category-list/category-list.component';

const routes: Routes = [
  {
    path: "category-add",
    component: CategoryAddComponent
  },
  {
    path: "category-list",
    component: CategoryListComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AdminRoutingModule {}