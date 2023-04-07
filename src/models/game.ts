export class Game {
	public players: string[] = [];
	public player_images: string[] = [];
	public stack: string[] = [];
	public playedCards: string[] = [];
	public cardAnimation = false;
	public currentPlayer = 0;
	public currentCard = '';
	public currentTitle = 'Take a Card';
	public currenDescription = 'Click on the Card stack and take your first Card';

	public gameRules = [
		{
			title: 'Waterfall',
			description:
				'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.',
		},
		{ title: 'You', description: 'You decide who drinks' },
		{ title: 'Me', description: 'Congrats! Drink a shot!' },
		{
			title: 'Category',
			description:
				'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.',
		},
		{
			title: 'Bust a jive',
			description:
				'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ',
		},
		{ title: 'Chicks', description: 'All girls drink.' },
		{
			title: 'Heaven',
			description: 'Put your hands up! The last player drinks!',
		},
		{
			title: 'Mate',
			description:
				'Pick a mate. Your mate must always drink when you drink and the other way around.',
		},
		{ title: 'Thumbmaster', description: '' },
		{ title: 'Men', description: 'All men drink.' },
		{ title: 'Quizmaster', description: '' },
		{
			title: 'Never have i ever...',
			description:
				'Say something you nnever did. Everyone who did it has to drink.',
		},
		{
			title: 'Rule',
			description:
				'Make a rule. Everyone needs to drink when he breaks the rule.',
		},
	];

	toJSON() {
		return {
			players: this.players,
			player_images: this.player_images,
			stack: this.stack,
			playedCards: this.playedCards,
			currentPlayer: this.currentPlayer,
			currentCard: this.currentCard,
			cardAnimation: this.cardAnimation,
			currentTitle: this.currentTitle,
			currenDescription: this.currenDescription,
		};
	}

	update(data) {
		this.players = data.players;
		this.player_images = data.player_images;
		this.stack = data.stack;
		this.playedCards = data.playedCards;
		this.currentPlayer = data.currentPlayer;
		this.currentCard = data.currentCard;
		this.cardAnimation = data.cardAnimation;
		this.currentTitle = data.currentTitle;
		this.currenDescription = data.currenDescription;
	}
	constructor() {
		for (let i = 1; i < 14; i++) {
			this.stack.push('spade_' + i);
			this.stack.push('hearts_' + i);
			this.stack.push('clubs_' + i);
			this.stack.push('diamonds_' + i);
		}
		shuffle(this.stack);
	}

	getCurrentCardNumber() {
		return this.currentCard.split('_')[1];
	}

	showRules() {
		this.currentTitle = this.gameRules[this.getCurrentCardNumber()].title;
		this.currenDescription =
			this.gameRules[this.getCurrentCardNumber()].description;
	}
}

function shuffle(array: string[]) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
