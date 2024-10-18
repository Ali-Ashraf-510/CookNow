import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { AllrecipesComponent } from './allrecipes/allrecipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { myguardGuard } from './myguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { DiscoverteamComponent } from './discoverteam/discoverteam.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component: HomeComponent  },
    { path:'aboutus', component:AboutusComponent},
    { path:'contactus', component:ContactusComponent},
    { path:'discoverteam', component:DiscoverteamComponent},
    { path:'allrecipes', component:AllrecipesComponent,canActivate:[myguardGuard]},
    { path: 'recipe/:id', component: RecipeDetailComponent,canActivate:[myguardGuard] },
    { path: 'saved-recipes', component:SavedRecipesComponent,canActivate:[myguardGuard] },
    { path: 'login', component:LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:"**",component:NotfoundComponent}


];
