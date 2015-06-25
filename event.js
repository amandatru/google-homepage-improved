function getSearch() {
  var input = document.getElementById("search").value;
  var keywords = input.split(" ").join("+");
  var searchURL = "www.google.com" + "#q=" + keywords;
  window.location.href = "http://www.google.com/#q=" + keywords;
}




