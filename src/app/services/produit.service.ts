import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../modele/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  host ="http://localhost:3000/produits/"
//host ="http://localhost:8080/api/produits/"
//host1 ="http://localhost:8080/api/produit/"
  constructor(private client:HttpClient) { }
  public getAllProduits():Observable<Produit[]>{
    return this.client.get<Produit[]>(this.host);
  }
  public getProduitById(id):Observable<Produit>{
    return this.client.get<Produit>(this.host/*1*/+id);
  }
  public deleteProduit(id):Observable<void>{
    return this.client.delete<void>(this.host+id);
  }
  public addProduit(produit:Produit):Observable<void>
{
return this.client.post<void>(this.host,produit);
}
public updateProduit(id , produit :Produit):Observable<void>
{
  return this.client.put<void>(this.host/*1*/+id,produit);}
  }

