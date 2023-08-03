import { Component, EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinComponent } from 'src/app/join/join.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() SideNavigationToggle = new EventEmitter();
  @Output() closeSideNavigation = new EventEmitter ();

  constructor(private  dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(JoinComponent);
  }
  ngOninit(){

  }
  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();
  }
  OnToggleClose(){
    this.closeSideNavigation.emit();
  }

}
