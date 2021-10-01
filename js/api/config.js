$('.booking').on("click", function () {
    debugger;
    let key = 'Appointment_IsVisitorCanBooking';
    let sCanBooking = ajaxGetSystemConfig(key);
    let isCanBooking = sCanBooking.bool();
    debugger;
    if (isCanBooking)
    {
        //window.open('/Booking', '_blank');
        window.location.href = '/Booking';
        $("#staticBackdrop").hide();
    }
    //post code
})

String.prototype.bool = function () {
    return (/^true$/i).test(this);
};
String.prototype.format = function () {
    a = this;
    for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}

let controllerName = 'SystemConfig';
function ajaxGetSystemConfig(key) {
    let url = '/api/{0}/Get/{1}'.format(controllerName, key);
    debugger;
    let value = '';
    $.ajax({
        url: url,
        async: false,
    }).fail(function (result, textStatus, errorThrown) {
        debugger;
        if (typeof result != typeof undefined && result != null && result.responseJSON != null && result.responseJSON.isLogout) {
            window.location.href = '/Error/NotFound';
        }
    }).done(function (result) {
        debugger;
        value = result;
    });
    return value;
}
//function ajaxGetSystemConfig(key) {
//    let url = '/api/{0}/Get/{1}'.format(controllerName, key);
//    //let url = '/Booking/GetSystemConfig';
//    debugger;
//    //let data = { ConfigKey: key }
//    //let data = { key: key };
//    let value = '';
//    $.ajax({
//        url: url,
//        //type: 'POST',
//        async: false,
//        //data: data
//    }).fail(function (result, textStatus, errorThrown) {
//        debugger;
//        if (typeof result != typeof undefined && result != null && result.responseJSON != null && result.responseJSON.isLogout) {
//            window.location.href = '/Error/NotFound';
//        }
//    }).done(function (result) {
//        debugger;
//        //if (result.length > 0) {
//        if (result.Success) {
//            debugger;
//            value = result.Data.value;
//        }
//        else
//            console.log('取得Config錯誤:' + key);
//    });
//    return value;
//}