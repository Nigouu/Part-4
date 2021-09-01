

const dummy = (blogs) => {
  return 1

//   const reducer = (sum, item) => {
//     return sum + item
//   }
//   return blogs.length === 0
//     ? 0
//     : blogs.reduce(reducer, 0) / blogs.length
}

const totalLikes = (blogs) => {
  var sum = 0
  console.log('summan före loopen är', sum);
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      sum = sum + addition
      console.log('summan innanför loopen är', sum);
  }
  return sum
}

module.exports = {
  dummy,
  totalLikes
}