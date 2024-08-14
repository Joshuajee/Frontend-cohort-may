$(document).ready(()=> {

  $("#imperial-input").hide()

  $("form").submit((e) => {
    e.preventDefault()
    console.log(e.target)
    if (e.target.name == "reset") {
      e.currentTarget.reset()
      return
    }

    if($("#metric").attr("checked")) {
      calcMetric()
    } else {
      calcImperial()
    }
  })

  $("#reset").click(() => {
    $("form").trigger("reset")
  })

  $("form").change((e) => {
    const value = e.target.value
    if (e.target.name == "unit") {
      if (value == "metric"){
        $("#imperial-input").hide()
        $("#metric-input").show()
      } else if (value == "imperial") {
        $("#metric-input").hide()
        $("#imperial-input").show()
      }
      return
    }

    const target = e.target

    if (target.value.length < 1) {
      target.style.border = "1px solid red"
    }
  })

  $("#height").change(() => {
    const value = $("#height").val()
    console.log(value)
    if (value.length > 0) {
      $("#unit-ft").show()
    } else {
      $("#unit-ft").hide()
    } 
  })

  function calcMetric() {
    const height = $("#height").val()
    const weight = $("#weight").val()
    const bmi = weight * 10000 / (height ** 2)
    $("#result").text("Your BMI is " + bmi)
  }

  function calcImperial() {
    const feet = $("#feet").val()
    const inches = $("#inches").val()
    const stone = $("#stone").val()
    const pounds = $("#pounds").val()

    const totalHeight = feet * 12 + inches
    const totalWeight = stone * 14 + pounds
    
    const bmi = totalWeight * 703 / totalHeight ** 2
    $("#result").text("Your BMI is " + bmi)
  }



})