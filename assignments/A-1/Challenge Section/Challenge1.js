let start=Date.now();

function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(function() {
    console.log("Water boiled!");
    callback();
  }, 2000);
}

function addNoodles(callback) {
  console.log("Adding noodles...");
  setTimeout(function() {
    console.log("Noodles cooked!");
    callback();
  }, 3000);
}

function serveNoodles() {
  console.log("Serving noodles 🍜");
  let end = Date.now();
  console.log("Total cooking time:", (end - start) / 1000, "seconds");
}

// call them in correct order using callbacks
boilWater(()=>addNoodles(()=>serveNoodles()));

