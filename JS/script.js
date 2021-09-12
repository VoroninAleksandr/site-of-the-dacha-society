document.getElementById("feedback-form").addEventListener(
  "submit",
  function (evt) {
    var http = new XMLHttpRequest(),
      f = this;
    evt.preventDefault();
    http.open("POST", "https://боровушка.рф/inc/contacts.php", true);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.nameL.value) == 0) {
          f.messageL.removeAttribute("value");
          f.messageFF.value = "";
        }
      }
    };
    http.onerror = function () {
      alert("Извините, данные не были переданы");
    };
    http.send(new FormData(f));
  },
  false
);

