


 function copyText() {
    const textArea = document.getElementById("translateText");
    textArea.select();
    document.execCommand("copy");
    alert("Text copied!");
  }