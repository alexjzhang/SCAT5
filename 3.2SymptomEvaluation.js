var app = new Vue({
  el: "#app",
  data: {
    form1: {
      evalType: '',

      submitted: false,
    },
    form2: {  
      headache: 0, 
      pressureInHead: 0,
      neckPain: 0, 
      nausea: 0, 
      dizziness: 0, 
      blurredVision: 0, 
      balance: 0,   
      sensitivityLight: 0, 
      sensitivityNoise: 0, 
      slowed: 0, 
      fog: 0, 
      feelRight: 0, 
      concentrating: 0, 
      remembering: 0, 
      fatigue: 0, 
      confusion: 0, 
      drowsiness: 0, 
      emotional: 0, 
      irritability: 0, 
      sadness: 0, 
      nervous: 0, 
      sleep: 0,
    },
    form3: {
      worsePhysical: '',
      worseMental: '',
      normal: 0,
      not100: '',
    }
  },
  computed: {
    totalSymptoms () {
      return Object.values(this.form2).reduce((sum, val) =>
          sum += (val > 0) ? 1 : 0, 0)
    },
    totalSeverity () {
      return Object.values(this.form2).reduce((sum, val) => sum += Number(val), 0)
    }
  }
})