import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
      path: 'ingreso-usuario',
      loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then(m => m.IngresoUsuarioPageModule)
    },
    {
      path: 'restablecer-contrasena',
      loadChildren: () => import('./restablecer-contrasena/restablecer-contrasena.module').then(m => m.RestablecerContrasenaPageModule)
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
