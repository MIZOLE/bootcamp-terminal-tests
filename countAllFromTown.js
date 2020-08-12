module.exports = function countAllFromTown(reg, loc) {
  //you functions logic here
  var cope = reg.split(",")
  var AllFromTown = ""
  var array4 = []
  console.log(array4)

  for (var i = 0; i < cope.length; i++) {
    if (cope[i].trim().startsWith(loc)) {
      array4.push(cope[i].trim())
    }

  }
  console.log(array4)
  return array4.length
}
