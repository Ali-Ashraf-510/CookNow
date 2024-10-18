import { DataService } from './../data.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './saved-recipes.component.html',
  styleUrl: './saved-recipes.component.css'
})
export class SavedRecipesComponent {
  savedRecipes: any[] = [];
constructor(private router:Router,private _DataService:DataService){}
ngOnInit(): void {
    this.loadSavedRecipes();
  }

  loadSavedRecipes() {
    const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    this.savedRecipes = saved;
  }
  delete(index: number) {
    this.savedRecipes.splice(index, 1);
    localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
    this._DataService.removeToSaved(index); 
  }
  
}
