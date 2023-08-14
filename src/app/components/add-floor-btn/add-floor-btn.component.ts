import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-add-floor-btn",
  templateUrl: "./add-floor-btn.component.html",
  styleUrls: ["./add-floor-btn.component.scss"],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class AddFloorBtnComponent {}
