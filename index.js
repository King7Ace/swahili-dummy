class SwahiliDummy {

	constructor(wordCount){

		this.dummyText = "Akiba haiozi Akipenda chongo huita kengeza Akufukuzae hakwambii toka Ala Kumbe Asiyekujua hakuthamini Bahati ni upepo sasa upo kwangu Chanda chema huvikwa pete Chokochoko mchokoe pwez binadamu hutamweza Dua la kuku halimpati mwewe Dunia duar Fadhila za punda ni matek Haba na hab hujaza kibaba Hata ukinichukia la kweli nitakwambia Kazi mwanamandanda, kulala njaa kupenda . ! ?";

		this.wordCount = wordCount;

		this.randomDummyTextArray = [];

	}

	get arrayOfWords(){

		return this.dummyText.split(' ');
	}

	get randomPosition(){

		return Math.floor((Math.random() * this.arrayOfWords.length));
	}

	get randomWord(){

		return this.arrayOfWords[this.randomPosition];

	}

	get lastWord(){

		return this.randomDummyTextArray.length ? this.randomDummyTextArray[this.randomDummyTextArray.length - 1] : false;

	}

	get lastLetter(){

		return this.lastWord[this.lastWord.length -1];
	}

	get dummy(){

		return this.composeRandomText().join(' ');
	}

	get capatilize(){

		let theWord = this.randomWord;

		//check if the word is the same as the prev word
		//while the word generated is the same as
		//the previous word
		//generate another
		while(theWord === this.lastWord){

			theWord = this.randomWord;

		}

		return this.lastLetter === '.' || this.lastLetter === '?' || this.lastLetter === '!' || !this.randomDummyTextArray .length ? theWord.split('')[0].toUpperCase() + theWord.split('').slice(1, theWord.length).join('') : theWord;

	}

	composeRandomText(){

		let randomWord = this.capatilize;

		//check that same words do not come together
		while(this.randomDummyTextArray.length < this.wordCount){

			this.randomDummyTextArray.push(randomWord);

			this.composeRandomText();

		}

		return this.randomDummyTextArray;
	}

	

}

function swahiliDummy(wordCount = 50){

	//init SwahiliDummy
	const dummyTextGenerator = new SwahiliDummy(wordCount);

	return dummyTextGenerator.dummy;
}

module.exports.swahiliDummy = swahiliDummy;