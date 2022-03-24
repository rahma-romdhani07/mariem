import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
 id : number ;

 produit :Produit;
 p : Produit ; 
  constructor(private ar:ActivatedRoute , private router:Router ,private service:ProduitService) { }
 
  
  ngOnInit():void {
   let id:number
    this.ar.paramMap.subscribe((params)=>{
    id=+params.get('id')
    this.service.getProduitById(id).subscribe(data=>{
    this.produit=data;

    
});

});

// pour mettre produit  dans un autre composant 
    /*this.id=+this.ar.snapshot.params.id ;
    console.log("id ="+this.id);
   for( let p of this.products){
      if(p.id==this.id)
        {this.produit=p;
           
         }
    }  /*
   /* this.produit=this.products.find(elt=>(elt.id==this.id));*/
  }
retour(){
  this.router.navigate(["/products"]);


}

}
