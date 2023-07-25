import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  public activeMenu: boolean = false;

  public cartCounter: number = 0;

  public constructor(private storeService: StoreService)
  { }

  public ngOnInit(): void
  {
    this.storeService.cart$.subscribe(products =>
    {
      this.cartCounter = products.length;
    });
  }

  public toggleMenu() : void
  {
    this.activeMenu = !this.activeMenu;
  }

  public cartEmpty(): boolean
  {
    return (this.cartCounter === 0) ? true : false;
  }
}
