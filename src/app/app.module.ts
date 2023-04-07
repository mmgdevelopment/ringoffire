import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

@NgModule({
	declarations: [
		AppComponent,
		StartScreenComponent,
		GameScreenComponent,
		DialogCardComponent,
		AddPlayerComponent,
		PlayerCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		A11yModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule, // for firestore,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
