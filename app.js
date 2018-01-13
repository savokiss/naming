var app = new Vue({
  el: '#app',
  data: {
    seperator: ' ',
    first: '酷 智 乐 好 优 简 易 逸',
    middle: '学 思 教',
    last: '云 课',
    results: []
  },
  methods: {
    handleApply () {
      this.results = []
      var firstArr = this.first.split(this.seperator)
      var middleArr = this.middle.split(this.seperator)
      var lastArr = this.last.split(this.seperator)
      for (var i = 0; i < firstArr.length; i++) {
        for (var j = 0; j < middleArr.length; j++) {
          for (var k = 0; k < lastArr.length; k++) {
            this.results.push(firstArr[i] + middleArr[j] + lastArr[k])
          }
        }
      }
    }
  }
})