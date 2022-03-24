import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private router :Router , private service :ProduitService) { }

  ngOnInit() {
  }
  ajouterProduit(f:NgForm){
    this.service.addProduit(f.value).subscribe(()=>{
      this.router.navigate(['/products'])
    })
  }
}
