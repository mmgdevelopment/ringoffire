import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-start-screen',
	templateUrl: './start-screen.component.html',
	styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
	constructor(private router: Router, private database: DatabaseService) {}

	startGame(): void {
		this.router.navigateByUrl('game');
		this.database.createGame();
	}
}
