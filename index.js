

function submitData(username, password) {
    fetch("http://localhost:3000/users", {
        method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: username,
        email: password,
    }),
})
    .then((response) => response.json())
    .then((jsonReturned) => console.log(jsonReturned.id))
    .catch(function (error) {
        alert("Bad things!");
        console.log(error.message);
      })};