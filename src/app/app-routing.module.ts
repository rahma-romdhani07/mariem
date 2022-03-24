import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { HomeComponent } from './home/home.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';


const routes: Routes = [
{path:"products" , component:ListeProduitComponent},
{path:"update/:id" , component:UpdateProduitComponent},
{path:"add" , component:AddProduitComponent},
{path:"detail" , component:ProduitDetailComponent},
//{path:"delete/:id" ,component:DeleteComponent},
{path:"productsDetail/:id",component:ProduitDetailComponent},//ProduitDetailComponent},ListeProduitComponent
{path:"home" , component:HomeComponent},
{path:"" , redirectTo:"/home",pathMatch:'full'},
{path:"**" , component:PageNotFoundComponent} 
] ;

@NgModule({                
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 
