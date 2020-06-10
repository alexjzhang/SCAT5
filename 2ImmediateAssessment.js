var app = new Vue({
  el: "#app",
  data: {
    form: {
      witnessed: [],
      motionless: '',
      balance: '',
      disorientation: '',
      blankLook: '',
      facialInjury: '',
      whatHappened: '',
      venue: '',
      half: '',
      scored: '',
      lastTeam: '',
      lastWin: '',

      submitted: false,
    },
    form2: {
      time: '',
      date: '',
      eyeResponse: 0,
      verbalResponse: 0,
      motorResponse: 0,
      neckPain: '',
      fullRange: '',
      limbStrength: '',
    },
  },
  computed: {
    glasgowComaScore () {
      return Number(this.form2.eyeResponse) + Number(this.form2.verbalResponse) + Number(this.form2.motorResponse)
    },
  }
})