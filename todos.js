$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function (response) {
        console.log(response);
    }
});