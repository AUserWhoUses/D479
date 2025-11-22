(function(window, undefined) {
  var dictionary = {
    "2e3dc22e-dc1a-4d44-853a-a4e7013622e6": "Food",
    "c2f77e71-1568-4c80-9579-485b3ee4f88d": "Transportation",
    "72019e2c-f9fe-48ef-80ff-8a8db5ff1e32": "Attractions",
    "58ca9b0d-837c-41a7-9602-2f91250b9680": "Lodging",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "790d8548-a50d-4dbe-ab40-524b268753d6": "FAQs",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);