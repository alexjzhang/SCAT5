var app = new Vue({
  el: "#app",
  data: {
    form: {
      month: 0,
      date: 0,
      dayOfWeek: 0,
      year: 0,
      time: 0,

      submitted: false,
    },
    form2: {
      wordList: 0,
      memorizedWords1: [],
      memorizedWords2: [],
      memorizedWords3: [],
      time: "",
    },
    form3: {
      numList: 0,
      memorizedNumbers: [],
      months: 0,
    },
    wordNumLists: {
      wordLists: [
        ["Finger", "Penny", "Blanket", "Lemon", "Insect"],
        ["Candle", "Paper", "Sugar", "Sandwich", "Wagon"],
        ["Baby", "Monkey", "Perfume", "Sunset", "Iron"],
        ["Elbow", "Apple", "Carpet", "Saddle", "Bubble"],
        ["Jacket", "Arrow", "Pepper", "Cotton", "Movie"],
        ["Dollar", "Honey", "Mirror", "Saddle", "Anchor"],
        ["Finger", "Penny", "Blanket", "Lemon", "Insect", "Candle", "Paper", "Sugar", "Sandwich", "Wagon"],
        ["Baby", "Monkey", "Perfume", "Sunset", "Iron", "Elbow", "Apple", "Carpet", "Saddle", "Bubble"],
        ["Jacket", "Arrow", "Pepper", "Cotton", "Movie", "Dollar", "Honey", "Mirror", "Saddle", "Anchor"],
      ],
      numLists: [
        ["First: 4-9-3 | Second: 6-2-9", "First: 3-8-1-4 | Second: 3-2-7-9", "First: 6-2-9-7-1 | Second: 1-5-2-8-6", "First: 7-1-8-4-6-2 | Second: 5-3-9-1-4-8"],
        ["First: 5-2-6 | Second: 4-1-5", "First: 1-7-9-5 | Second: 4-9-6-8", "First: 4-8-5-2-7 | Second: 6-1-8-4-3", "First: 8-3-1-9-6-4 | Second: 7-2-4-8-5-6"],
        ["First: 1-4-2 | Second: 6-5-8", "First: 6-8-3-1 | Second: 3-4-8-1", "First: 4-9-1-5-3 | Second: 6-8-2-5-1", "First: 3-7-6-5-1-9 | Second: 9-2-6-5-1-4"],
        ["First: 7-8-2 | Second: 9-2-6", "First: 4-1-8-3 | Second: 9-7-2-3", "First: 1-7-9-2-6 | Second: 4-1-7-5-2", "First: 2-6-4-8-1-7 | Second: 8-4-1-9-3-5"],
        ["First: 3-8-2 | Second: 5-1-8", "First: 2-7-9-3 | Second: 2-1-6-9", "First: 4-1-8-6-9 | Second: 9-4-1-7-5", "First: 6-9-7-3-8-2 | Second: 4-2-7-9-3-8"],
        ["First: 2-7-1 | Second: 4-7-9", "First: 1-6-8-3 | Second: 3-9-2-4", "First: 2-4-7-5-8 | Second: 8-3-9-6-4", "First: 5-8-6-2-4-9 | Second: 3-1-7-8-2-6"],
      ],
    }
  },
 
  watch: {
    wordListSelection: function() {
      this.form2.memorizedWords1 = []
      this.form2.memorizedWords2 = []
      this.form2.memorizedWords3 = []
    },
    numListSelection: function() {
      this.form3.memorizedNumbers = []
    },
  },
  computed: {
    orientationScore () {
      return Object.values(this.form).reduce((sum, val) => sum += Number(val), 0)
    },
    wordListSelection () {
      return this.wordNumLists.wordLists[Number(this.form2.wordList)]
    },
    immediateMemoryScore () {
      return this.form2.memorizedWords1.length + this.form2.memorizedWords2.length + this.form2.memorizedWords3.length
    },
    numListSelection () {
      return this.wordNumLists.numLists[Number(this.form3.numList)]
    },
    digitsScore () {
      return this.form3.memorizedNumbers.length
      // score = 0
      // count = 0
      // length = 0
      // for (i = 0; i < this.form3.memorizedNumbers.length; i++) { 
      //   length = this.form3.memorizedNumbers[i].length
      //   for (j = i; j < this.form3.memorizedNumbers.length; j++) {
      //     if(this.form3.memorizedNumbers[j].length==length) {
      //       count++
      //     }
      //   }
      //   if(count==2) {
      //     score++
      //   }
      //   count = 0
      // }
      // return score
    },
    monthsScore () {
      if(this.form3.months==true) {
        return 1
      }
      return 0
    },
    concentrationTotalScore () {
      return this.digitsScore+this.monthsScore
    }
  }
})