var app = new Vue({
  el: "#app",
  data: {
    form: {
      time: '',
      numOfWords: 5,
      wordsRecalled: '',

      submitted: false,
    },
  },
  computed: {
    numberOfWords () {
      return this.form.numOfWords
    },
    numWordsRecalled () {
      if(this.form.wordsRecalled.length==0) {
        return 0
      }
      return this.form.wordsRecalled.trim(this.form.wordsRecalled.replace(/ +(?= )/g,'')).split(' ').length
      // letter_Count = 0;
      // if(this.form.wordsRecalled.length==0) {
      //   return 0
      // }
      // for (position = 0; position < this.form.wordsRecalled.length; position++) {
      //     if (this.form.wordsRecalled.charAt(position) == ',') {
      //       if(letter_Count != this.form.numOfWords){
      //         letter_Count++
      //       }
      //     }
      // }
      // return letter_Count+1
    },
  },
})