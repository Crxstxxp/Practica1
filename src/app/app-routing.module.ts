import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { CardComponent } from './components/sales/card/card.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'ProductsListComponent', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'UserListComponent', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'CardComponent', component: CardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
