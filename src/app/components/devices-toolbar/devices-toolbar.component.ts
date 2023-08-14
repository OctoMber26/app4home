import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-devices-toolbar',
  templateUrl: './devices-toolbar.component.html',
  styleUrls: ['./devices-toolbar.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class DevicesToolbarComponent {}
