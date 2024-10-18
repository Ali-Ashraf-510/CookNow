import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allrecipes',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './allrecipes.component.html',
  styleUrls: ['./allrecipes.component.css']
})
export class AllrecipesComponent {
  Recipes: any[] = [];
  param: any;
  searchTerm: string = '';

  constructor(public _dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._dataService.getAllRecipes().subscribe((data) => {
      this.Recipes = data.recipes;
      console.log(this.Recipes);
    });
  }

  filteredRecipes(): any[] {
    if (!this.Recipes || !Array.isArray(this.Recipes)) {
      return [];
    }
    
    if (!this.searchTerm) {
      return this.Recipes;
    }

    return this.Recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
