// function helloJavaScript() {
//     var userResponse = "";
//     var userName=prompt("Hello, friend.  What is your name?");
//     var userNum=Number(prompt("Enter a number 1-10"));
//     switch(userNum) {
//         case 1: 
//             alert("Thank you! " +userName);
//             userResponse="This is the FIRST case in your JavaScript quest!"
//             console.log(userResponse);
//             break;
//         case 2:
//             alert("Thank you! " +userName);
//             userResponse="This is case 2";
//             userResponse="JavaScript rules!"
//             console.log(userResponse);
//             break;
//         case 3:
//             alert("Thank you! " +userName);
//             userResponse="This is case 3";
//             userResponse="JavaScript is the best!"
//             console.log(userResponse);
//             break;
//         case 4:
//             alert("Thank you! " +userName);
//             userResponse="This is case 4";
//             userResponse="JavaScript does it the best!!"
//             console.log(userResponse);
//             break;
//         case 5:
//             alert("Thank you! " +userName);
//             userResponse="This is case 5";
//             userResponse="JavaScript is my sparring partner!!"
//             console.log(userResponse);
//             break;
//         case 6:
//             alert("Thank you! " +userName);
//             userResponse="This is case 6";
//             userResponse="JavaScript knows what's up!"
//             console.log(userResponse);
//             break;
//         case 7:
//             alert("Thank you! " +userName);
//             userResponse="This is case 7";
//             userResponse="JavaScript has it all and a bag of chips!"
//             console.log(userResponse);
//             break;
//         case 8:
//             alert("Thank you! " +userName);
//             userResponse="This is case 8";
//             userResponse="JavaScript is my friend and confidant!!"
//             console.log(userResponse);
//             break;
//         case 9:
//             alert("Thank you! " +userName);
//             userResponse="This is case 9";
//             userResponse="JavaScript knows me like I know peanut butter sandwiches!"
//             console.log(userResponse);
//             break;
//         case 10:
//             alert("Thank you! " +userName);
//             userResponse="This is case 10";
//             userResponse="JavaScript understands me!"
//             console.log(userResponse);
//             break;
//         default:
//             alert("Thank you! " +userName);
//             console.log("This is the default pal!!")
//     }
// }

// helloJavaScript();


// function goalOrientedRobot({place,parcels},route) {
//     if (route.length == 0) {
//         let parcel = parcels[0];
//         if (parcel.place != place) {
//             route = findRoute(roadGraph,place,parcel.place);
//          } else {
//              route = findRoute(roadGraph,place,parcel.address);
//          }
//     }
//     return {direction: route[0],memory: route.slice(1) };


// function makeRabbit(type) {
//     let rabbit=Object.create(protoRabbit);
//     rabbit.type=type;
//     return rabbit;
// }

// makeRabbit("dog");



// function passArray(arr,item) {
//     console.log(arr,item);

// }

// passArray([true,null,{"char1":3,2:"char2",false:true},[33,44,55,66,77,88,true],29,'this is a string'],'second item');

// console.log(passArray(typeof[0],null))