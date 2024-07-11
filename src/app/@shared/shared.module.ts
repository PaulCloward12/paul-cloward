import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailComponent } from './components/email/email.component';
import { PhoneComponent } from './components/phone/phone.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { ContactComponent } from './components/navbar/contact/contact.component';
import { HeaderComponent } from './components/navbar/header/header.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const components = [
  NavbarComponent,
  EmailComponent,
  PhoneComponent,
  SocialLinksComponent,
  LogoComponent,
  ContactComponent,
  HeaderComponent,
  MenuComponent,
  BtnComponent,
  NotFoundComponent
];

const modules = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    components
  ]
})
export class SharedModule { }
