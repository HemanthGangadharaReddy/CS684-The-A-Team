// const assert = require('assert');
// const request = require('supertest');
// const app = require('../index'); // assuming your app is defined in a separate file

// describe('Authentication API', () => {
//   let userToken;

//   describe('POST /signup', () => {
//     it('should create a new user', (done) => {
//       request(app)
//         .post('/signup')
//         .send({ name: 'testuser',email:'testing2@gmail.com',password: 'testpassword',confirmpassword:"testpassword" })
//         .expect(200)
//         .end((err, res) => {
//           if (err) return done(err);
//           console.log(res.body.name);
//           assert(res.body.name === 'testuser');
//           done();
//         });
//     });
//   });

//   describe('POST /signin', () => {
//     it('should authenticate a user and return a token', (done) => {
//       request(app)
//         .post('/signin')
//         .send({ username: 'testuser', password: 'testpassword' })
//         .expect(200)
//         .end((err, res) => {
//           if (err) return done(err);
//           assert(res.body.token);
//           userToken = res.body.token; // save the token for later use
//           done();
//         });
//     });
//   });

//   describe('GET /protected', () => {
//     it('should return a protected resource when authenticated', (done) => {
//       request(app)
//         .get('/protected')
//         .set('Authorization', `Bearer ${userToken}`)
//         .expect(200)
//         .end((err, res) => {
//           if (err) return done(err);
//           assert(res.body.message === 'Hello, testuser!');
//           done();
//         });
//     });

//     it('should return 401 when not authenticated', (done) => {
//       request(app)
//         .get('/protected')
//         .expect(401, done);
//     });
//   });
// });
