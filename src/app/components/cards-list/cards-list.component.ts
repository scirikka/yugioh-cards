import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import {Card} from '../../entities/entities'

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  cards : Card[] = [];

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(data => this.cards = data);
  }

}
