process.env.NODE_ENV = 'test';

var Promise = require('promise')
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');

chai.use(chaiHttp)

describe('My GreenPlaces routes', function() {

  it('the GreenPlaces GET route should return an array of zipcodes via app.locals.greenPlaces', function(done) {
    chai.request(server)
    .get('/api/greenplaces')
    .end(function(err, res) {
      res.should.have.status(200)
      res.body.should.be.a('array')
      res.body.length.should.equal(3)
    done()
    })
  });

  it('the GreenPlaces DELETE route should delete a greenPlace from app.locals.greenPlaces', function(done) {
    chai.request(server)
    .delete('/api/greenplaces/81301')
    .end(function(err, res) {
      res.should.have.status(200)
      res.body.should.be.a('array')
      res.body.length.should.equal(2)
      done()
    })
  });

  it('the GreenPlaces POST route should add a greenPlace to app.locals.greenPlaces', function(done) {

    let greenPlace = {
      name: "01921",
      cap: 45.6,
      cost: 32.1,
      count: 83
    }
    chai.request(server)
    .post('/api/greenplaces')
    .send({greenPlace: greenPlace})
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.json;
      res.body.should.be.a('array');
      res.body.length.should.equal(3)
      res.body[2].name.should.equal("01921")
      done()
    })
  });
});

describe('PvInstalls routes', function() {
  this.timeout(8000)
  xit('the GET by zip PvInstall route should return an array with one PvInstall object', function(done) {
    chai.request(server)
    .get('/api/pvinstalls/80301')
    .then(function(res) {
        res.result.should.have.status(200)
        res.should.be.json;
        res.result.should.be.a('array');
        res.result.length.should.equal(1)
        done()
    })
  });
});
