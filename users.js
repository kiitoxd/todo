$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
        console.log(response);
    }
});