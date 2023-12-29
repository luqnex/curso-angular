import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExampleComponent } from './pages/example/example.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'list/:id', component: ItemDetailComponent },
];
