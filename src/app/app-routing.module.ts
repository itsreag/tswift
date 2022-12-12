import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('./tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'card-about',
    loadChildren: () => import('./pages/card-about/card-about.module').then( m => m.CardAboutPageModule)
  },
  {
    path: 'card-new-rel',
    loadChildren: () => import('./pages/card-new-rel/card-new-rel.module').then( m => m.CardNewRelPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
