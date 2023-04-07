import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Game } from 'src/models/game';

@Injectable({
	providedIn: 'root',
})
export class DatabaseService {
	public id$ = new Subject();
	// public id = '';
	public game$ = new Observable();
	private collectioRef: AngularFirestoreCollection;
	private dbPath = 'games';
	constructor(private db: AngularFirestore, private router: Router) {
		this.collectioRef = db.collection(this.dbPath);
	}

	createGame() {
		const game = new Game();
		this.collectioRef
			.add(game.toJSON())
			.then((gameInfo) => {
				this.id$.next(gameInfo.id);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	updateGame(game: Game) {
		this.collectioRef.doc(this.getIdFromURL()).update(this.toJSON(game));
	}

	setChangeListener(id: string) {
		this.game$ = this.collectioRef.doc(id).valueChanges();
	}

	toJSON(object: Game): JSON {
		return JSON.parse(JSON.stringify(object));
	}
	getIdFromURL() {
		return this.router.url.split('/game/')[1];
	}
}
