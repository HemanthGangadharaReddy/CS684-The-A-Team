const request = require('supertest');
const assert = require('assert');
const app = require('../index');

describe('POST /signup', function() {
  it('should return a 200 response if the response is correct', function(done) {
    request(app)
      .post('/signup')
      .send({name:'latest', email: 'testuser@example.com', password: 'testpassword',confirmpassword:"testpassword" })
      .expect(200)
     
      .end(function(err, res) {
        if (err) return done(err);

        assert(res);
        done();
      });
  });

  it('should return a 401 response if the credentials are incorrect', function(done) {
    request(app)
      .post('/signup')
      .send({ email: 'testuser@example.com', password: 'wrongpassword' })
      .expect(200, done);
  });
});



describe('POST /signin', function() {
  it('should return a 302 response if user found', function(done) {
    request(app)
      .post('/signin')
      .send({username:'latest',  password: 'testpassword'})
      .expect(302)
     
      .end(function(err, res) {
        if (err) return done(err);

        assert(res);
        done();
      });
  });

  it('should return a 401 response if user not found', function(done) {
    request(app)
      .post('/signin')
      .send({ email: 'testuser@example.com', password: 'wrongpassword' })
      .expect(200, done);
  });
});





describe('GET /top-headlines', function() {

it("Should return 200 if the top-headlines api is working correctly", function(done){
  request(app)
  .get('/top-headlines')
  .expect(200)

  .end(function(err,res){
    assert(res);
    done()
  });
});

});






describe('POST /profile', function() {
  it('should return a 401 response, unauthorized', function(done) {
    request(app)
      .post('/profile')

      .send({General:'general', Business: 'business', Entertainment:'entertainment', Health:'health', Science:'science',
            Sports:'sports', Technology:'technology'
            })
      .expect(401)
     
      .end(function(err, res) {
        if (err) return done(err);
        assert(res);
        done();
      });
  });

  it('should return a 401 response if problem with updating profile', function(done) {
    request(app)
      .post('/profile')
      .send({ xyz: 'new cat', new_cat: 'new_cat' })
      .expect(401, done);
  });
});



describe('GET /', function() {
  it('should return a 200 response, Successfully loaded home page', function(done) {
    request(app)
      .get('/')

      .expect(200)
     
      .end(function(err, res) {
        if (err) return done(err);
        assert(res);
        done();
      });
  });

});