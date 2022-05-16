import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Gif Material
import { GifsMaterialModule } from './gifs-material.module';
// Declarações
import { GifsListComponent } from './list/list.component';
import { gifsRoutes } from './gifs.routing';

@NgModule({
  declarations: [GifsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(gifsRoutes),
    GifsMaterialModule,
  ],
})
export class GifsModule {}
