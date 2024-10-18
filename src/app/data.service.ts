import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
isLogined= new BehaviorSubject(false)


constructor(private _HttpClient:HttpClient){
  let savedCount=this.getSavedCountFromStorage();
    if(savedCount!=null){
      this.savedItemCount.next(savedCount);
    }
} 
  
private savedItemCount=new  BehaviorSubject<number>(0)
savedCount$=this.savedItemCount.asObservable()
addToSaved(item:any){
let currentCount=this.savedItemCount.value
this.savedItemCount.next(currentCount+1)
this.setSavedCountToStoeage(currentCount+1);

}
removeToSaved(item:any){
  let currentCount=this.savedItemCount.value
 if (currentCount>0){
  this.savedItemCount.next(currentCount-1)
  this.setSavedCountToStoeage(currentCount-1);

 }

  
  }
  private getSavedCountFromStorage():number{
    let value=localStorage.getItem('SavedCount');
    return value?JSON.parse(value):0;
  }
  private setSavedCountToStoeage(count: number) {
    localStorage.setItem('SavedCount', JSON.stringify(count)); 
}




  getAllRecipes(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/recipes');
  }
  
  getRecipeById(id: number): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/recipes/${id}`);
  }
}
