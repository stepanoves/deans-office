import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-table-select-counter",
  templateUrl: "./table-select-counter.component.html",
  styleUrls: ["./table-select-counter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSelectCounterComponent {
  @Input("dataStream") dataStream$: Observable<any>;
}
