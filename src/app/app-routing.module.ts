import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/index.component';
import { JoinComponent } from './join/join.component';
import { PasswordComponent } from './password/password.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccountComponent } from './account/account.component';
import { MembershipComponent } from './membership/membership.component';
import { TermsComponent } from './terms/terms.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AboutComponent } from './about/about.component';
import { Offer1Component } from './offer1/offer1.component';
import { Offer2Component } from './offer2/offer2.component';
import { Offer3Component } from './offer3/offer3.component';
import { Offer4Component } from './offer4/offer4.component';
import { Offer5Component } from './offer5/offer5.component';
import { Offer6Component } from './offer6/offer6.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { PopupComponent } from './popup/popup.component';
import { VisionComponent } from './vision/vision.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { TeamComponent } from './team/team.component';
import{EventsComponent} from'./events/events.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'accomodation', component: AccomodationComponent},
  {
    path: 'food-and-beverage',
    component: FoodAndBeverageComponent,
    children: [
      { path: '', redirectTo: 'food-and-beverage', pathMatch: 'full' },
      { path: 'bars', component: BarsComponent },
      { path: 'restaurants', component: RestaurantComponent },
    ],
  },
 {path:'foodandbeverage', redirectTo:'food-and-beverage'},
  {path:'lifestyle', component: LifestyleComponent},
  {path:'weddings', component: WeddingsComponent},
  {path:'offers', component: OffersComponent},
  {path:'home', component: HomeComponent},
  {path:'password',component:PasswordComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'account',component:AccountComponent},
  {path:'membership',component:MembershipComponent},
  {path:'terms',component:TermsComponent},
  {path:'join',component:JoinComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'setpassword',component:SetpasswordComponent},
  {path:'booking-form',component:BookingFormComponent},
  {path:'about',component:AboutComponent},
  {path:'offer1',component:Offer1Component},
  {path:'offer2',component:Offer2Component},
  {path:'offer3',component:Offer3Component},
  {path:'offer4',component:Offer4Component},
  {path:'offer5',component:Offer5Component},
  {path:'offer6',component:Offer6Component},
  {path:'offer-form',component:OfferFormComponent},
  {path:'popup',component:PopupComponent},
  {path:'vision',component:VisionComponent},
  {path:'team',component:TeamComponent},
  {path:'events',component:EventsComponent},
  {path:'meetings',component:MeetingsComponent},
  {path:'celebration',component:CelebrationComponent},
  {path:'contact',component:ContactComponent}
  // {
  //   path: 'join',component:JoinComponent,
  //   children: [
  //     {path:'', component:JoinComponent},
  //     {path:'signup', component: SignupComponent},
  //     { path: 'signin', component: SigninComponent},
  //   ],
  // //  canActivate:[AuthGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
