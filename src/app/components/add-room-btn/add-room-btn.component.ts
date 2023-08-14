import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-room-btn',
  templateUrl: './add-room-btn.component.html',
  styleUrls: ['./add-room-btn.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class AddRoomBtnComponent {}
