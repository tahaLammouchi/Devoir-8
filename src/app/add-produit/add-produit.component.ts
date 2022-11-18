import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  message : string | undefined;

  constructor(private produitService : ProduitService,
              private router : Router) { }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
    });
      this.router.navigate(['produits']).then(() => {
      window.location.reload();
      });
  }

}
