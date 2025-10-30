import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { UserProductsComponent } from './pages/website/user-products/user-products.component';

const routes: Routes = [
  {
    path:'',redirectTo:'shop',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'', component:LandingComponent,
    children:[
      {
        path:'shop',
        component:UserProductsComponent
      },{
        path:'products/:id',component:CategoryProductsComponent
      },
    ]
  },  
  {
    path:'',component:LayoutComponent,  //triggered by admin login
    children:[
      {
        path:'categories',component:CategoriesComponent
      },{
        path:'products',component:ProductsComponent
      }
    ]
  }, { path:'**', redirectTo:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
