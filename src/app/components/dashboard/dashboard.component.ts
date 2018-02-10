import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from '../../services/stocks.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  private subscription: Subscription;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.subscription = this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
