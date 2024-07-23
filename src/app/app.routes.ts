import { Routes } from '@angular/router';
import { CreateColorsComponent } from './features/colors/create-colors/create-colors.component';
import { CreateCategoriesComponent } from './features/categories/create-categories/create-categories.component';
import { ViewColorsComponent } from './features/colors/view-colors/view-colors.component';
import { ViewClothesComponent } from './features/clothes/view-clothes/view-clothes.component';
import { CreateClothesComponent } from './features/clothes/create-clothes/create-clothes.component';
import { CreateLocalComponent } from './features/local/create-local/create-local.component';
import { ViewCategoriesComponent } from './features/categories/view-categories/view-categories.component';
import { ViewLocalComponent } from './features/local/view-local/view-local.component';
import { ViewLocalIndexComponent } from './features/local/view-local-index/view-local-index.component';
 
export const routes: Routes = [
    // ruras de categorias
    { path: 'createCategories', component: CreateCategoriesComponent}, 
    { path: 'editeCategorie/:id', component: CreateCategoriesComponent},
    { path: 'viewCategories', component: ViewCategoriesComponent},
    // rutas de colors
    { path: 'viewColors', component: ViewColorsComponent},
    { path: 'createColors', component: CreateColorsComponent},  
    { path: 'editeColors/:id', component: CreateColorsComponent},
    // rutas de prendas
    { path: 'viewClothes', component: ViewClothesComponent},
    { path: 'createClothes', component: CreateClothesComponent},  
    { path: 'editeClothes/:id', component: CreateClothesComponent},
    // rutas locales
    // { path: 'viewColors', component: ViewColorsComponent},
    { path: 'createLocales', component: CreateLocalComponent},  
    { path: 'viewLocales', component: ViewLocalComponent},
    { path: 'editelocales/:id', component: CreateLocalComponent},

    { path: '', component: ViewLocalIndexComponent},
];
