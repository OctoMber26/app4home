import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabletMenuComponent } from './components/tablet-menu/tablet-menu.component';
import { IonicModule } from '@ionic/angular';
import { DevicesToolbarComponent } from './components/devices-toolbar/devices-toolbar.component';
import { DevicesCardComponent } from './components/devices-card/devices-card.component';
import { RoomsConfiguratorToolbarComponent } from './components/rooms-configurator-toolbar/rooms-configurator-toolbar.component';
import { AddRoomBtnComponent } from './components/add-room-btn/add-room-btn.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    TabletMenuComponent,
    DevicesToolbarComponent,
    DevicesCardComponent,
    RoomsConfiguratorToolbarComponent,
    AddRoomBtnComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
