import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../_modal';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-list-detail',
  templateUrl: './card-list-detail.component.html',
  styleUrls: ['./card-list-detail.component.css'],
})
export class CardListDetailComponent implements OnInit {
  region: any;

  @Input() cardInput: any;

  ngOnChanges() {

    if (this.cardInput != null) {

      this.cardService.getRegion(this.cardInput.regionRef).subscribe((data) => {
        console.log(data);
        this.region = data;
        
      });
    }
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }

 

  constructor(
    private modalService: ModalService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {}
}
