import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-add-scene-btn",
  templateUrl: "./add-scene-btn.component.html",
  styleUrls: ["./add-scene-btn.component.scss"],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class AddSceneBtnComponent {}
