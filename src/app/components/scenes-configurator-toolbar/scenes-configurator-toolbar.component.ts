import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-scenes-configurator-toolbar",
  templateUrl: "./scenes-configurator-toolbar.component.html",
  styleUrls: ["./scenes-configurator-toolbar.component.scss"],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ScenesConfiguratorToolbarComponent {}
