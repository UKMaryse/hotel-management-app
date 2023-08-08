import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FlexLayoutModule} from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/index.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { JoinComponent } from './join/join.component';
import { PasswordComponent } from './password/password.component';
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
import { StandardRoomsComponent } from './standard-rooms/standard-rooms.component';
import { DeluxeRoomsComponent } from './deluxe-rooms/deluxe-rooms.component';
import { SuperiorRoomsComponent } from './superior-rooms/superior-rooms.component';
import { PrimeRoomsComponent } from './prime-rooms/prime-rooms.component';
import { JuniorSuiteComponent } from './junior-suite/junior-suite.component';
import { PopupComponent } from './popup/popup.component';
import { VisionComponent } from './vision/vision.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    FoodAndBeverageComponent,
    BarsComponent ,
    RestaurantComponent,
    GalleryComponent,
    JoinComponent,
    PasswordComponent,
    AccountComponent,
    MembershipComponent,
    TermsComponent,
    SetpasswordComponent,
    BookingFormComponent,
    AboutComponent,
    Offer1Component,
    Offer2Component,
    Offer3Component,
    Offer4Component,
    Offer5Component,
    Offer6Component,
    OfferFormComponent,
    StandardRoomsComponent,
    DeluxeRoomsComponent,
    SuperiorRoomsComponent,
    PrimeRoomsComponent,
    JuniorSuiteComponent,
    PopupComponent,
    VisionComponent,
    TeamComponent,
    EventsComponent,
    MeetingsComponent,
    CelebrationComponent,
    ContactComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
