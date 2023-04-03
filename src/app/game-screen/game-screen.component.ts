import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/models/game';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
	mousehovered = false;
	cardTaken = false;
	gameStarted = false;
	game: Game = new Game();

	title = 'Take a Card';
	description = 'Click on the Card stack and take your first Card';

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		// this.newGame();
	}

	takeCard() {
		if (!this.cardTaken) {
			this.cardTaken = true;
			this.game.currentCard = this.game?.stack.pop();
			setTimeout(() => {
				this.cardTaken = false;
				this.mousehovered = false;
				this.gameStarted = true;
				this.game.playedCards.push(this.game.currentCard);
				this.game.currentPlayer =
					(this.game.currentPlayer + 1) % this.game.players.length;
				this.showRules();
			}, 1500);
		}
	}

	newGame() {
		this.game = new Game();
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(AddPlayerComponent);

		dialogRef.afterClosed().subscribe((name: string) => {
			if (name && name.length > 0) {
				this.game.players.push(name);
				this.game.player_images.push('1.webp');
			}
		});
	}

	showRules() {
		this.title = this.game.gameRules[this.getCurrentCardNumber()].title;
		this.description =
			this.game.gameRules[this.getCurrentCardNumber()].description;
	}

	getCurrentCardNumber() {
		return this.game.currentCard.split('_')[1];
	}
}
