var katzDeliLine = [];


function takeANumber(katzDeliLine) {


// var i = 0;
//   while (i < katzDeliLine.length) {
//         if (name == katzDeliLine[i]) {
//           return "Welcome, " + name +  ". You are number " + parseInt(i+1) + " in line.";

//         }

//         else i++;

//   }
 
 var dailynum = 0;
 var cust = "";
 
 katzDeliLine.push(cust);
dailynum ++;
return "Welcome, " + "customer" +  ". You are number " + dailynum + ".";


}



function currentLine(katzDeliLine) {
   var i = 0;
   var line = [];

   if (katzDeliLine.length === 0){
     return "The line is currently empty.";
   }
     else        
         

   while (i < katzDeliLine.length) {
         line.push(  parseInt(i+1) + ". " + katzDeliLine[i]   )
      i++
      }
       return "The line is currently: " + line.join(", ") 
  

}


function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0){
     return "There is nobody waiting to be served!";
   }
// else console.log("Currently serving " + katzDeliLine[0] + ".");
 katzDeliLine.shift(); 
  return (`Currently serving dailynum`)
} 