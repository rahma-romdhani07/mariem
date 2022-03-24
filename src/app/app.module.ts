import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule} from'@angular/common/http';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    HomeComponent,
    ProduitDetailComponent,
    PageNotFoundComponent,
    AddProduitComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
