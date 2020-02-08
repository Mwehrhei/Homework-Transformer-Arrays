var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];
//for loop containing everything and giving the container/variable a name
for (var i = 0; i < chrs.length; i++){ 
  var box =document.createElement("div"); 

//box to hold all of the text and the text inside in a big innerHTML  
box.id = i;
box.innerHTML= "Name: "+chrs[box.id].name+"<br>"+
               "Class: "+chrs[box.id].class.toUpperCase()+"<br>"+
               "Affiliation: "+chrs[box.id].afl.toUpperCase()+"<br>"+
               "Type of Vehicle: "+chrs[box.id].vehicle.toUpperCase();
document.body.appendChild(box);
box.classList.add("character");

//time to make the logos appear  
if (chrs[i].afl == "autobot"){
    var img = document.createElement("img");
    img.src=" https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    box.appendChild(img);
    box.classList.add("autobot");}

//same as above but for the baddies  
 if (chrs[i].afl == "decepticon"){
    var img = document.createElement("img");
    img.src=" https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    box.appendChild(img);
    box.classList.add("decepticon");}
//here is how we decide what color to change the text to based on type of vehicle
if (chrs[i].vehicle == "truck"){box.style.color="blue";} 
if (chrs[i].vehicle == "tank"){box.style.color="green";}   
if (chrs[i].vehicle == "car"){box.style.color="gold";} 
if (chrs[i].vehicle == "plane"){box.style.color="white";}
}  



// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png
// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')
// in the characters' "vehicle" data, change the color of that value in the div based on its value

// truck=blue
// tank=green
// card=gold
// plane=white

//classlist w3schools
  //var transName =document.createElement("div");
  //var transClass =document.createElement("div");
  //var transAfl =document.createElement("div");
  //var transVehicle =document.createElement("div");