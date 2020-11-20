const todolist = new Vue({
  el:"#root",
  data:{
    inputs: [],
    text:"",

  },

  methods: {
   addText: function() {
      inputs.push(this.text)
  },
   removeText: function() {
    inputs.splice(this.text)
    }
  }

  })
