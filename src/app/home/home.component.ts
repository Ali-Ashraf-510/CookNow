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
  
  

  
  constructor(public _DataService: DataService, private route: ActivatedRoute) {
    // هنا بنستخدم الـDataService علشان نجيب البيانات من السيرفر (الـAPI)
    // و ActivatedRoute علشان نتعامل مع معلومات الراوت (زي قراءة البارامترات اللي بتيجي في الـURL)
  }

  ngOnInit(): void {
    // دي دالة Angular بتنادي عليها أول ما الكومبوننت يبدأ يشتغل
    this._DataService.getAllRecipes().subscribe((data) => {
      // هنا بننادي على دالة getAllRecipes من DataService علشان نجيب البيانات من الـAPI
      this.Recipes = data.recipes;  // بعد ما البيانات ترجع، بنخزنها في مصفوفة Recipes
    });
  }

  randomRecipes() {
    const shuffled = this.Recipes.sort(() => 0.5 - Math.random()); 
    // الدالة دي بتعيد ترتيب مصفوفة Recipes بشكل عشوائي باستخدام Math.random
    return shuffled.slice(0, 4);  
    // بعد إعادة الترتيب، بنرجع أول 4 وصفات عشوائية من المصفوفة
  }

  healthyRecipes = [
    { id: 2 }, { id: 6 }, { id: 9 }, { id: 17 }, 
    { id: 18 }, { id: 21 }, { id: 25 }, { id: 29 }
  ]; 
  // دي مصفوفة IDs للوصفات الصحية اللي عايزين نعرضها في الكومبوننت

  randomHealthyRecipes() {
    const ids = this.healthyRecipes.map(recipe => recipe.id);
    // بنجيب كل الـIDs اللي موجودة في healthyRecipes
    const filteredRecipes = this.Recipes.filter(recipe => ids.includes(recipe.id));
    // بنفلتر الوصفات اللي موجودة في Recipes علشان نجيب الوصفات اللي الـIDs بتاعتها موجودة في healthyRecipes
    const shuffled = filteredRecipes.sort(() => 0.5 - Math.random());
    // بنعمل Shuffle للوصفات الصحية اللي طلعناها من الفلترة
    return shuffled.slice(0, 3);  
    // بنرجع أول 3 وصفات صحية بشكل عشوائي
  }
}
// الشرح باختصار داخل الكود:
// استيراد المكونات والخدمات اللي هنحتاجها في الكومبوننت.
// تعريف الكومبوننت HomeComponent علشان يعرض الوصفات اللي بتيجي من السيرفر.
// استخدام دالة ngOnInit علشان نجيب البيانات أول ما الصفحة تفتح.
// دوال زي randomRecipes و randomHealthyRecipes بتستخدم لإعادة ترتيب الوصفات بشكل عشوائي وعرض بعض الوصفات الصحية بناءً على IDs معينة.









