import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { AccomodationComponent } from 'src/app/accomodation/accomodation.component';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent {
  isFoodAndBeverageActive: boolean = false;
  isRestaurantActive: boolean = false;
  isBarsActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFoodAndBeverageActive = this.router.isActive('/foodandbeverage', false);
        this.isRestaurantActive = this.router.isActive('/foodandbeverage/restaurant', false);
        this.isBarsActive = this.router.isActive('/foodandbeverage/bars', false);
      }
    });
  }

}
