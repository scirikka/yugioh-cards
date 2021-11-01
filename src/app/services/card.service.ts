import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, CardObject } from '../entities/entities';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"

  constructor(private http : HttpClient) { }

  getCards() : Observable<CardObject> {
    return this.http.get<CardObject>(this.url)
  }
}
