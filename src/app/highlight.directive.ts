import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input("appHighlight") highlihtColor: string;

  constructor() {}
}
