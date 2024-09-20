import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input({transform:
 booleanAttribute,alias:"aria-disabled"
 })
  ariaDisabled:boolean| undefined = false

  onAction1(){}
}
