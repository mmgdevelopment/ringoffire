import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/models/game';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
	mousehovered = false;
	game = new Game();

	constructor(public dialog: MatDialog, private database: DatabaseService) {}

	ngOnInit() {
		this.database.setChangeListener(this.database.getIdFromURL());
		this.database.game$.subscribe((gameFromDatabase) => {
			this.game.update(gameFromDatabase);
		});
	}

	takeCard() {
		if (!this.game.cardAnimation) {
			this.game.cardAnimation = true;
			this.game.currentCard = this.game?.stack.pop();
			setTimeout(() => {
				this.game.cardAnimation = false;
				this.mousehovered = false;
				this.game.playedCards.push(this.game.currentCard);
				this.game.currentPlayer =
					(this.game.currentPlayer + 1) % this.game.players.length;
				this.game.showRules();
				this.database.updateGame(this.game);
			}, 1500);
			this.database.updateGame(this.game);
		}
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(AddPlayerComponent);

		dialogRef.afterClosed().subscribe((name: string) => {
			if (name && name.length > 0) {
				this.game.players.push(name);
				this.game.player_images.push('1.webp');
				this.database.updateGame(this.game);
			}
		});
	}
}
