import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardMenuBarComponent } from './card-menu-bar/card-menu-bar.component';
import { CardListContainerComponent } from './card-list-container/card-list-container.component';
import { CardListItemComponent } from './card-list-container/card-list-item/card-list-item.component';
import { CardListDetailComponent } from './card-list-container/card-list-detail/card-list-detail.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [{ path: '', component: CardListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardListRoutingModule {}
