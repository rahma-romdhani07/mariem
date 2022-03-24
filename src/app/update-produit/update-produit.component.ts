import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
id : number ;
produit :Produit ;
  constructor(private ar :ActivatedRoute , private router :Router , private service :ProduitService ) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((params)=>{
      this.id=+params.get('id')
      console.log("id ="+this.id);
      this.service.getProduitById(this.id).subscribe((data)=>{
       this.produit = data; }) ;
  });
  }
  modifierProduit(f:NgForm){
   
    this.service.updateProduit(this.id , this.produit).subscribe(()=>{
      this.router.navigate(["/products"]);
      console.log("id ="+this.id);
      
    });
}
}
