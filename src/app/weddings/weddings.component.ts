import { Component } from '@angular/core';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.css']
})
export class WeddingsComponent {

  public WEDDINGS :boolean = false;
  public buttonName:any = 'WEDDINGS';

  toggle() {
    this.WEDDINGS = !this.WEDDINGS;

    // Change the name of the button.
    if(this.WEDDINGS)
      this.buttonName = "WEDDING";
    else
      this.buttonName = "WEDDINGS";
  }
}
