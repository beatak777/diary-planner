var today = dayjs().format("dddd, MMMM DD YYYY ");

var now = dayjs().format("H A");

$("#currentDay").text(today);

//current hour and timeblocks
var currentHour = dayjs().hour();

$(".time-block").each(function () {
    var blockHour = parseInt($(this).data("hour"));
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// saving option for save button
saveBtnEl.on("click", function (e) {
    e.preventDefault();

    let content = $(this).siblings(".description").val();
    let time = $(this).parent().attr("data-hour");
    localStorage.setItem(time, content);
})


//to retrieve the data from ls

timeblockEl.each(function () {
    $(this).children(".description").val(localStorage.getItem($(this).attr("data-hour")))

})