import { DataService } from './../data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: any=[]; 

  constructor(private route: ActivatedRoute, private _dataService: DataService,private router:Router) {}

  ngOnInit(): void {
    const recipeId = + this.route.snapshot.params['id']; // Get recipe ID from URL
    this._dataService.getRecipeById(recipeId).subscribe((data) => {
      this.recipe = data; 
      console.log(this.recipe); 
    });
  }
  copyLink() {
    const pageUrl = window.location.href;
  
    navigator.clipboard.writeText(pageUrl)
      
     Swal.fire({
          title: 'Link Copied!',
          text: 'The link has been copied to your clipboard.',
          icon: 'success',
          timer: 3000,

          confirmButtonText: 'OK',
          customClass: {
            title: 'custom-title', 
          }
      });
     
    
    }
  saveRecipe(product:any) {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    savedRecipes.push(this.recipe); 
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes)); 
    this.router.navigate(['/saved-recipes']);
    this._dataService.addToSaved(product)

  }  
  
}
