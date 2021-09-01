const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  var sum = 0
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      sum = sum + addition
  }
  return sum
}


const favoriteBlog = (blogs) => {
  sum = 0
  const obj = {
    title:'',
    author:'',
    likes:0
  }
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      if (addition > sum) {
        sum = addition
        obj.title = blogs[i].title
        obj.author = blogs[i].author
        obj.likes = blogs[i].likes
      }
  }
  return obj
}


const mostBlogs = (blogs) => {
  sum = 0
  const obj = {
    author:'',
    blogsAmount:0
  }
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].blogsAmount
      if (addition > sum) {
        sum = addition
        obj.author = blogs[i].author
        obj.blogsAmount = blogs[i].blogsAmount
      }
  }
  return obj
}


const mostLikes = (blogs) => {
  sum = 0
  const obj = {
    author:'',
    likes:0
  }
  console.log(obj);
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      console.log('summan av nuvarande', addition);
      if (addition > sum) {
        sum = addition
        obj.author = blogs[i].author
        obj.likes = blogs[i].likes
        console.log('nuvarande objektet', obj);
      }
  }
  console.log('slutliga', obj);
  return obj
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}