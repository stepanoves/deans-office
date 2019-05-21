import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[stopPropagation]"
})
export class StopPropagationDirective {
  @HostListener("keydown", ["$event"])
  keyDown(event) {
    if (event.keyCode === 32) event.stopPropagation();
  }
}
