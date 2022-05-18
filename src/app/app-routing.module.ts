import { IsWalletConnectedGuard } from './core/guards/is-wallet-connected.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './modules/connect/connect.component';
import { IsWalletNotConnectedGuard } from './core/guards/is-wallet-notConnected.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gifs' },
  {
    path: 'gifs',
    loadChildren: () =>
      import('./modules/gifs/gifs.module').then((m) => m.GifsModule),
    canActivate: [IsWalletConnectedGuard],
    canLoad: [IsWalletConnectedGuard]
  },
  {
    path: 'connect',
    component: ConnectComponent,
    canActivate: [IsWalletNotConnectedGuard],
    canLoad: [IsWalletNotConnectedGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
