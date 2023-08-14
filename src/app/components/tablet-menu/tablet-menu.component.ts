import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablet-menu',
  templateUrl: './tablet-menu.component.html',
  styleUrls: ['./tablet-menu.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class TabletMenuComponent {}
