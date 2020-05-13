import { Component, OnInit, Input, Output } from '@angular/core';
import { CardService } from '../../card.service';
import { ModalService } from '../_modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list-container',
  templateUrl: './card-list-container.component.html',
  styleUrls: ['./card-list-container.component.css'],
})
export class CardListContainerComponent implements OnInit {
  constructor(
    private cardService: CardService,
    private modalService: ModalService
  ) {
    this.subscription = cardService.regionSelected$.subscribe((region) => {
      this.region = region;
      console.log(this.region.length);
      if (this.region == '') {
        this.cards = this.cardsTemp;
        this.list = [];
        this.contador = 0;
        this.add20ToArray();
      } else {
        /* this.cardService.getRegion(this.region).subscribe((data) => {
          console.log(data);
          this.cards = data._embedded.cards;
          this.list = [];
          this.contador = 0;
          this.add20ToArray();
        }); */

        /*  this.cardService.getCards().subscribe((data) => {
          this.cards = data;
        }); */
        this.cards = this.cardsTemp;

        this.cards = this.cards.filter((card) => {
          console.log(card.region == region);
          return card.region == region;
        });
        console.log(this.cards);
        this.list = [];
        this.contador = 0;
        this.add20ToArray();
      }
    });

    this.subscription = cardService.searchWord$.subscribe((word) => {
      if (word.length > 0) {
        this.cards = this.cardsTemp;
        console.log('word ' + word);

        this.cards = this.cards.filter((card) => {
          return (
            card.region.toLowerCase().includes(word.toLowerCase()) ||
            card.description.toLowerCase().includes(word.toLowerCase()) ||
            card.name.toLowerCase().includes(word.toLowerCase())
          );
        });
        console.log(this.cards);
        this.list = [];
        this.contador = 0;
        this.add20ToArray();
      } else {
        this.cards = this.cardsTemp;
        this.list = [];
        this.contador = 0;
        this.add20ToArray();
      }
    });
  }

  region: string;

  list: any[] = [];
  contador: number = 0;

  cards: any;

  cardsTemp: any;

  cardTemp: any;
  subscription: Subscription;

  ngOnChanges() {
    console.log('ngOnChangesContainer');
    if (this.region != null) {
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
   
    this.cardService.getCards().subscribe((data) => {
      console.log(data);
      this.cards = data;
      this.cardsTemp = data;
      this.add20ToArray();
      
    });
  }

  add20ToArray() {
    // const length = this.list.length;

    if (window.innerWidth > 1000){
      let temp = this.contador + 40;
    for (this.contador; this.contador < temp; this.contador++) {
      this.list.push(this.cards[this.contador]);
     }
    }else if (window.innerWidth > 2044){
      let temp = this.contador + 60;
    for (this.contador; this.contador < temp; this.contador++) {
      this.list.push(this.cards[this.contador]);
      }
    }else {
      let temp = this.contador + 20;
    for (this.contador; this.contador < temp; this.contador++) {
      this.list.push(this.cards[this.contador]);
    }
  }
  }
  onScrollEnd() {
    // Do something here
    console.log('scrollEnd');
    this.add20ToArray();
  }

  get disabled(): boolean {
    return false;
  }

  showDialogBox: boolean = false;

  onToggleDialogBox(card) {
    this.cardTemp = card;
    this.showDialogBox = !this.showDialogBox;

    console.log(card);
    this.openModal('cardDetail');
  }
}
