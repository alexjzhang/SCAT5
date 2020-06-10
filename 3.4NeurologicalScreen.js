var app = new Vue({
  el: "#app",
  data: {
    form: {
      readAloud: '',
      cSpineRange: '',
      eyeMovement: '',
      fingerNose: '',
      tandemGait: '',
      foot: '',
      testingSurface: '',
      footwear: '',
      doubleLegError: 0,
      singleLegError: 0,
      tandemError: 0,

      submitted: false,
    },
  },
  computed: {
    totalBalanceError () {
      return Number(this.form.doubleLegError) + Number(this.form.singleLegError) + Number(this.form.tandemError)
    }
  },
})