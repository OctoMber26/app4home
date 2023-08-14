import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-devices-card',
  templateUrl: './devices-card.component.html',
  styleUrls: ['./devices-card.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class DevicesCardComponent {}
