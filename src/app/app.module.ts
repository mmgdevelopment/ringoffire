import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { MatButtonModule } from '@angular/material/button';
import { AddPlayerComponent } from './add-player/add-player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerCardComponent } from './player-card/player-card.component';
import { A11yModule } from '@angular/cdk/a11y';







@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameScreenComponent,
    DialogCardComponent,
    AddPlayerComponent,
    PlayerCardComponent
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
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
