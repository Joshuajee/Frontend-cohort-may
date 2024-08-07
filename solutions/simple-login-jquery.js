$(document).ready(() => {
    const email = $("#email")
    const password = $("#password")
    const emailError = $("#email-error")
    const passwordError = $("#pass-error")
    const submit = $("#submit")
    const checkbox = $("#checkbox")
    const form = $("#login")


    function noError() {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email.val().match(pattern) && password.val().length > 5) {
            submit.removeAttr("disabled")
        } else {
            submit.attr("disabled", true)
        }
    }



    email.change(function (event) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email.val().match(pattern)) {
            email.removeClass("input-error")
            emailError.text("")
            console.log("No Error")
        } else {
            email.addClass("input-error")
            console.log("Error")
            emailError.text("Invalid Email")
            emailError.addClass("error")
        }
        noError()
    })


    password.change(function (event) {
        if (password.val().length > 6) {
            password.removeClass("input-error")
            passwordError.text("")
            console.log("No Error")
        } else {
            password.addClass("input-error")
            console.log("Error")
            passwordError.text("Invalid password")
            passwordError.addClass("error")
        }
        noError()
    })


})