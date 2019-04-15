console.log("hello")

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  canPaint: function(colorChoice) {
      console.log("The clients choose " + colorChoice)
  }
}

painter.canPaint("green")


//Listing key and value pairs
addPainterKey("paint");
for (key in painter) {
    console.log(key, ":", painter[key]);
;}

//Add new key
function addPainterKey (newPaint) {
  painter[newPaint] = []
};

//Function to add to empty array with new key
function pushPaint (newPaint) {
    painter.paint.push(newPaint)
};

//Add new colors
pushPaint("blue");
pushPaint("lavendar");
pushPaint("yellow");

//Add more tools
function addTools (newTool) {
  painter.tools.push(newTool)
}

addTools("hammer")