import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('PriceComponent - ngOnInit');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent - ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('PriceComponent - ngOnDestroy');

  }

}
