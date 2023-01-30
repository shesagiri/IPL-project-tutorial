function pas() {
  console.log("hello");
}
function showForm() {
  console.log("asdf as");
  document.getElementById("form1").style.display = "block";
}
function showplayer() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("showPlayers").innerHTML = "";
  let allTeams = new Array();
  allPlayers = JSON.parse(localStorage.getItem("allPlayers"))
    ? JSON.parse(localStorage.getItem("allPlayers"))
    : [];

  if (allPlayers) {
    for (let i = 0; i < allPlayers.length; i++) {
      var table = `<tr>
                <td>${allPlayers[i].fullName}</td>
                <td>${allPlayers[i].teamName}</td>
                <td>${allPlayers[i].price}</td>
                <td>${allPlayers[i].role}</td>
                <td>${allPlayers[i].status}</td>
                </tr>`;
      document.getElementById("showPlayers").innerHTML += table;
    }
  }
}
function savePlayerName() {
  let fullName = document.getElementById("fullName").value;
  let teamName = document.getElementById("teamName").value;
  let price = document.getElementById("price").value;
  let role = document.getElementById("role").value;
  let status = document.getElementById("status").value;

  let allPlayers = new Array();
  allPlayers = JSON.parse(localStorage.getItem("allPlayers"))
    ? JSON.parse(localStorage.getItem("allPlayers"))
    : [];
  if (teamName === "") {
    alert("Enter the team name don't enter a blank space");
  } else {
    if (
      allPlayers.some((v) => {
        return v.teamName == teamName;
      })
    ) {
      alert("This Team Already Exits");
    } else {
      allPlayers.push({
        fullName: fullName,
        teamName: teamName,
        price: price,
        role: role,
        status: status,
      });
      localStorage.setItem("allPlayers", JSON.stringify(allPlayers));
    }
    showplayer();
  }
}
