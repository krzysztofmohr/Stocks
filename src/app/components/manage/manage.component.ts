import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  stock: string;
  symbols: Array<string>;
  private subscription: Subscription;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

}
