new Vue({
    el: "#app",
    data: {
        btlr: "0",
        btrr: "0",
        bblr: "0",
        bbrr: "0",
        btlrs: "0",
        btrrs: "0",
        bblrs: "0",
        bbrrs: "0",
    }
});

function copytoclipboard() {
    let textarea = document.getElementById("copiar");
    textarea.select();
    document.execCommand("copy");
    alert("Copied the text: \n" + textarea.value);
  }
