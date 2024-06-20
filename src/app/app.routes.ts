import { Routes } from '@angular/router';
import { CreateColorsComponent } from './features/colors/create-colors/create-colors.component';
import { CreateCategoriesComponent } from './features/categories/create-categories/create-categories.component';
import { EditCategoriesComponent } from './features/categories/edit-categories/edit-categories.component';
import { ViewColorsComponent } from './features/colors/view-colors/view-colors.component';
import { EditColorsComponent } from './features/colors/edit-colors/edit-colors.component';
import { ViewClothesComponent } from './features/clothes/view-clothes/view-clothes.component';
import { EditClothesComponent } from './features/clothes/edit-clothes/edit-clothes.component';
import { CreateClothesComponent } from './features/clothes/create-clothes/create-clothes.component';
import { EditLocalComponent } from './features/local/edit-local/edit-local.component';
import { CreateLocalComponent } from './features/local/create-local/create-local.component';
 
export const routes: Routes = [
    // ruras de categorias
    { path: 'createCategories', component: CreateCategoriesComponent}, 
    { path: 'editCategories', component: EditCategoriesComponent},
    { path: 'editeColors/:id', component: EditColorsComponent},
    // rutas de colors
    { path: 'viewColors', component: ViewColorsComponent},
    { path: 'createColors', component: CreateColorsComponent},  
    { path: 'editeColors/:id', component: EditColorsComponent},
    // rutas de prendas
    { path: 'viewClothes', component: ViewClothesComponent},
    { path: 'createClothes', component: CreateClothesComponent},  
    { path: 'editeClothes/:id', component: EditClothesComponent},
    // rutas locales
    // { path: 'viewColors', component: ViewColorsComponent},
    { path: 'createLocales', component: CreateLocalComponent},  
    { path: 'editeLocales', component: EditLocalComponent},
];
