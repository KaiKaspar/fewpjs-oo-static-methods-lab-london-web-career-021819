class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  static titleize(string) {
    let keywords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(" ")
    let output = array.map(function(word){
      if (keywords.includes(word)) {
                return word
      } else {
          return Formatter.capitalize(word)
        }
    }).join(" ")
    return output.charAt(0).toUpperCase() + output.slice(1);
  }
}
