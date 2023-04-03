import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dialog-card',
	templateUrl: './dialog-card.component.html',
	styleUrls: ['./dialog-card.component.scss'],
})
export class DialogCardComponent {
	@Input() title = '';
	@Input() description = '';
}
