$("#submit").click(function () {
    $.post("/api/user/new", {})
        .then((res)=> {
            console.log(res);
        })
/*
    //todo check username and email
    $.post("/check_for_new_user", {
        email:      $("#email").val(),
        user_name:  $("#username").val()
    },function (res) {
        if (res.msg !== "ok")
        {
            alert(res.msg);
            return (0);
        }
        $.post("/signin", {
            email:      $("#email").val(),
            full_name:  $("#name").val(),
            user_name:  $("#username").val(),
            password:   $("#password").val()
        },function (res) {
            console.log(res);
        });
        $("#email-send-modal").modal();
    });*/
});
