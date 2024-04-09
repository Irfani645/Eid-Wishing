document.getElementById("wishBtn").addEventListener("click", function() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
      var message = "Eid Ul Fitr Mubarak 2024, " + name + "!";
      document.getElementById("message").innerText = message;
    } else {
      alert("Please enter a valid name!");
    }
  });
  