var today = dayjs().format("dddd, MMMM D YYYY ");

var now = dayjs().format("H A");

$("#currentDay").text(today);

// var planWorkday = [
//     {
//         time: "9 AM",
//         event: "" 
//     },
//     {
//         time: "10 AM",
//         event: ""
//     }, 
//     {
//         time: "11 AM",
//         event: ""
//     },
//     {
//         time: "12 AM",
//         event: ""
//     },
//     {
//         time: "1 PM",
//         event: ""
//     },
//     {
//         time: "2 PM",
//         event: ""
//     },
//     {
//         time: "3 PM",
//         event: ""
//     },
//     {
//         time: "4 PM",
//         event: ""
//     },
//     {
//         time: "5 PM",
//         event: ""
//     },
// ];

// var workEvents = JSON.parse(localStorage.getItem('workDay'));
// if (workEvents) {
//     planWorkday = workEvents
// };