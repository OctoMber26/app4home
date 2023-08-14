import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-floors-configurator-toolbar",
  templateUrl: "./floors-configurator-toolbar.component.html",
  styleUrls: ["./floors-configurator-toolbar.component.scss"],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class FloorsConfiguratorToolbarComponent {}
