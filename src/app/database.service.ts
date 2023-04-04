import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Game } from 'src/models/game';

@Injectable({
	providedIn: 'root',
})
export class DatabaseService {
	constructor(private firestore: Firestore) {}

	private collectioRef = collection(this.firestore, 'games');
	private game = new Game();
	private ID: string;

	createGame() {
		const gameData = JSON.parse(JSON.stringify(this.game));
		addDoc(this.collectioRef, { game: gameData })
			.then((gameInfo) => {
				this.ID = gameInfo.id;
				console.log('Sucessfully created new Game', gameInfo, this.ID);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
