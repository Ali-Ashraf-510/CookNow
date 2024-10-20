import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  Recipes: any[] = []; 
  

  constructor(public _DataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // جلب الوصفات عند تهيئة الكومبوننت
    this._DataService.getAllRecipes().subscribe((data) => {
      this.Recipes = data.recipes;
    });
  }

  // دالة عامة لإعادة الترتيب العشوائي
  shuffleArray(array: any[]): any[] {
    return array.sort(() => 0.5 - Math.random());
  }

  // جلب 4 وصفات عشوائية
  randomRecipes(): any[] {
    return this.shuffleArray(this.Recipes).slice(0, 4);
  }


  healthyRecipeIds: number[] = [2, 6, 9, 17, 18, 21, 25];
  // فلترة الوصفات الصحية وإرجاع 3 وصفات عشوائية منها
  randomHealthyRecipes(): any[] {
    const filteredRecipes = this.Recipes.filter(recipe => 
      this.healthyRecipeIds.includes(recipe.id)
    );
    return this.shuffleArray(filteredRecipes).slice(0, 3);
  }
}








