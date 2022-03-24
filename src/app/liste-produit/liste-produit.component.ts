import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Params,Router} from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-produit',  //balise pour appeller le composant 
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
id : number ;  
valeurB : string = "masquer" ;
product :Produit;
tab :Produit[];
produitF : Produit[] ;
 url="http://localhost:8080/api/getImage/";

  constructor(private ar:ActivatedRoute ,private router:Router , private service:ProduitService) { }


  ngOnInit():void { 
     this.service.getAllProduits().subscribe(data=>{
      this.produitF=data;
    this.ar.paramMap.subscribe((x:Params)=>{
      this.id =+ x.get('id');
      console.log (""+this.id+"") ;
     this.product=  this.produitF.find(elt=>(elt.id==this.id));
       console.log(this.product.nom);
  }) ; 
    });
  }
    
   afficher(){
   if (this.valeurB=="masquer")
     this.valeurB="afficher" ; 
    else 
    this.valeurB="masquer" }



 getColor(x : number):string
{
  if (x==0)
    return "red"  
  return "black"
}
retour(){
  this.router.navigate(["/products"]);}





set texte (chaine:string){
  this.produitF=this.filtrer(chaine);
}


filtrer(sousChaine:string){
  return this.produitF.filter(e=>e.nom.indexOf(sousChaine)!=-1) // e produit 
}
supprimer(id :number){
  
  this.service.deleteProduit(id).subscribe(()=>{this.getAllProduct()
  console.log("ok")
  }
  );    

}
getAllProduct(){
  this.service.getAllProduits().subscribe(data=>{
    this.produitF=data;
  });
}
}

