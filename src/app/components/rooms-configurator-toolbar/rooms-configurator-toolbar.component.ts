import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-rooms-configurator-toolbar',
  templateUrl: './rooms-configurator-toolbar.component.html',
  styleUrls: ['./rooms-configurator-toolbar.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class RoomsConfiguratorToolbarComponent {}
