import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Gif Material
import { GifsMaterialModule } from './gifs-material.module';
// Declarações
import { ListGifsComponent } from './list/list.component';
import { gifsRoutes } from './gifs.routing';
import { AddGifsComponent } from './add/add.component';

@NgModule({
  declarations: [ListGifsComponent, AddGifsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(gifsRoutes),
    GifsMaterialModule,
  ],
})
export class GifsModule {}
