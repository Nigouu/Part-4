const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('../utils/test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blogs')


beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})


test('4.8 blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('4.8 correct number of blogs', async () => {
  const response = await api.get('/api/blogs')
  console.log(response.body);
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})


test('4.9 id is present', async () => {
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r._id)
  expect(contents).toBeDefined()
})


test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})


test('the first blog is about...', async () => {
  const response = await api.get('/api/blogs')
  // expect(response.body[0].author).toBe('Michael Chan')
  const contents = response.body.map(r => r.title)
  expect(contents).toContain(
    "Go To Statement Considered Harmful"
  )
})


test('4.10 a blog can be added', async () => {
  const newBlog = {
    _id: "b54a6ert76234d17f7",
    title: "vem är snog?",
    author: "Sniguli",
    url: "https://reacttttpatterns.com/",
    likes: 8,
    __v: 0
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  const contents = blogsAtEnd.map(n => n.title)
  expect(contents).toContain(
    "vem är snog?"
  )
})


// test('4.11 what is the like value', async () => {
//   const response = await api.get('/api/blogs')
//   const contents = response.body.map(r => r.likes)
//   expect(contents).toContain(0)
// })


test('4.12 blog without content is not added', async () => {
  const newBlog = {
    author:"Snoggeliboi",
    likes: 5
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

test('a specific blog can be viewed', async () => {
  const notesAtStart = await helper.blogsInDb()

  const noteToView = notesAtStart[0]

  const resultNote = await api
    .get(`/api/blogs/${noteToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const processedNoteToView = JSON.parse(JSON.stringify(noteToView))

  expect(resultNote.body).toEqual(processedNoteToView)
})

// test('a blog can be deleted', async () => {
//   const notesAtStart = await helper.blogsInDb()
//   const noteToDelete = notesAtStart[0]
//   await api
//     .delete(`/api/notes/${noteToDelete.id}`)
//     .expect(204)
//   const notesAtEnd = await helper.blogsInDb()
//   expect(notesAtEnd).toHaveLength(
//     helper.initialBlogs.length - 1
//   )
//   const contents = notesAtEnd.map(r => r.title)
//   expect(contents).not.toContain(noteToDelete.title)
// })

afterAll(() => {
  mongoose.connection.close()
})