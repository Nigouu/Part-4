

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  var sum = 0
  // console.log('summan före loopen är', sum);
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      sum = sum + addition
      // console.log('summan innanför loopen är', sum);
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
  // console.log('summan före favorit loopen är', obj);
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].likes
      // console.log('summan är', addition);
      if (addition > sum) {
        sum = addition
        // console.log(sum, 'summan sätts inne i loopen om den är större');
        obj.title = blogs[i].title
        obj.author = blogs[i].author
        obj.likes = blogs[i].likes
        // console.log('summan innanför loopen är', obj);
      }
  }
  // console.log(obj, 'summan efter att allt är klart');
  return obj
}

const mostBlogs = (blogs) => {
  sum = 0
  const obj = {
    author:'',
    blogsAmount:0
  }
  // console.log(obj);
  for (var i = 0; i < blogs.length; i++){
      var addition = blogs[i].blogsAmount
      // console.log('summan av nuvarande', addition);
      if (addition > sum) {
        sum = addition
        obj.author = blogs[i].author
        obj.blogsAmount = blogs[i].blogsAmount
        // console.log('nuvarande objektet', obj);
      }
  }
  // console.log('slutliga', obj);
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