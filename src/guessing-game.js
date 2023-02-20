class GuessingGame {

    constructor() {
   }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let result = Math.ceil((this.min + this.max) / 2);
        console.log('guess: '+ result);
        return result;
    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2);
        console.log('lower: ');
    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2);
        console.log('greater: ');
    }
}

module.exports = GuessingGame;
