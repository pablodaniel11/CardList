import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-menu-bar',
  templateUrl: './card-menu-bar.component.html',
  styleUrls: ['./card-menu-bar.component.css'],
})
export class CardMenuBarComponent implements OnInit {
  regions: [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getRegions().subscribe((data) => {
      console.log(data);
      this.regions = data._embedded.regions;
    });
  }
  myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  onKey(event: any) {
    this.cardService.setSearchWord(event.target.value);
  }

  selectRegion(region) {
    var x = document.getElementById(region);
    if (x.className === 'imageRegion') {
      var other = document.getElementsByClassName('imageRegion');
      for (var i = 0; i < other.length; i++) {
        other[i].className = 'imageRegion';
      }
      console.log('if getElement');
      console.log(x.className);
      x.className += ' active';
      this.cardService.setRegion(region);
    } else {
      console.log('else getElement');
      x.className = 'imageRegion';
      this.cardService.setRegion('');
    }
  }
}
