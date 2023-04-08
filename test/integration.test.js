const request = require('supertest');
const assert = require('assert');
const app = require('../index');




describe('POST /signup  integration test', function() {
  it('integration test for signup New user', function(done) {
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

});



describe("GET /news/user   integration test", function(){


  it("Integration test for /news/{user} api", function(done) {
    request(app)
    .get('/news/abcd')
    .expect(200)
    .end(function(err, res){

      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});




describe("GET /news/user  integration test", function(){


  it("Integration test for /news/{user} api, when user is not authorized", function(done) {
    request(app)
    .get('/news/abcd2')
    .expect(401)
    .end(function(err, res){

      if (err) return done(err);
      assert.equal(res.statusCode, 401);
      done();
    });
  });
});




describe("GET /category/{category}   integration test", function(){


  it("Integration test for /category/{category}", function(done) {
    request(app)
    .get('/category/health')
    .expect(200)
    .end(function(err, res){

      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});

describe("GET /category/{category}   integration test", function(){


  it("Integration test for /category/{category}", function(done) {
    request(app)
    .get('/category/business')
    .expect(200)
    .end(function(err, res){

      if (err) return done(err);
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});



