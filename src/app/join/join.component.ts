import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { sidebar } from './sidebar';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  @Output() closeSideNavigation = new EventEmitter ();

  OnToggleClose(){
    this.closeSideNavigation.emit();
  }

  
  // SideBar = sidebar;

  // constructor(
  //   public router: Router
  // ) { }

  // ngOnInit(): void {
  // }

  // onNav(event: any) {
  //   this.router.navigate([event.routelink]);
  // }
}
