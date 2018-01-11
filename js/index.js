$(function () {
    setInterval(() => {
        let myDate = new Date();
        let dataTime = myDate.getFullYear() + '-' + (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-' + (myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()) + ' ' + (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()) + ':' + (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()) + ':' + (myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds());
        // console.log(moment().format('YYYY-MM-DD HH:MM:SS'));
        // $("#dateTime").text(moment().format('YYYY-MM-DD HH:MM:SS'));
        $("#dateTime").text(dataTime);
    }, 1000);
})