$(document).ready(function () {
    const age = parseInt(prompt("How old are you???"));
    if (age >= 21) {
        $("#eligible").show();
    }
    else {
        $("#non-eligible").show();
    }
    $("#vote").click(function () {
        alert("VOTE SUCCESSFUL");

    });
});







