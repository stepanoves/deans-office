import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-preloading-spinner",
  templateUrl: "./preloading-spinner.component.html",
  styleUrls: ["./preloading-spinner.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreloadingSpinnerComponent {
  @Input("dataStream") dataStream$: Observable<any>;
}
