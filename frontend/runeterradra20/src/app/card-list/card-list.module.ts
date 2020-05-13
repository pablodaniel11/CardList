import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuBarComponent } from './card-menu-bar/card-menu-bar.component';
import { CardListContainerComponent } from './card-list-container/card-list-container.component';
import { CardListItemComponent } from './card-list-container/card-list-item/card-list-item.component';
import { CardListDetailComponent } from './card-list-container/card-list-detail/card-list-detail.component';
import { CardListRoutingModule } from '../card-list/card-list-routing.module';
import { CardService } from '../card.service';
import { CardListComponent } from './card-list/card-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    CardMenuBarComponent,
    CardListContainerComponent,
    CardListItemComponent,
    CardListDetailComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    InfiniteScrollModule,
    ModalModule,
  ],
  providers: [CardService],
  exports: [
    CardMenuBarComponent,
    CardListContainerComponent,
    CardListItemComponent,
    CardListDetailComponent,
  ],
})
export class CardListModule {}
