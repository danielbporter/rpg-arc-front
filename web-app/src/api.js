const BASE_URL = '/api/';

module.exports= {

    get(resource){
        $.ajax({
            type: 'GET',
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
            },
            url: BASE_URL + resource,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (data) {
                console.log(JSON.stringify(data));
                console.log("success");
                return data;
            },
            error: function () {
                console.log("Failed to create campaign")
            }
        })
    },

    post(resource, data){
        $.ajax({
            type: 'POST',
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
            },
            url: BASE_URL + resource,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function () {
                console.log("success");
            },
            error: function () {
                console.log("Failed to create campaign")
            }
        })
    }

};