import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { SearchComponent } from './app/components/search/search.component';
import { ArtistComponent } from './app/components/artist/artist.component';

export const ROUTES:Routes = [
    {path:"home", component:HomeComponent},
    {path:"search", component:SearchComponent},
    {path:"artist/:id", component:ArtistComponent},
    {path:"**", redirectTo:"/home"}
];