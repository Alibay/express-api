import request from 'supertest';
import app from './../../../app';

describe('ProjectController', function() {

  describe('GET /projects', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/api/v1/projects')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /projects/:id', function() {

    it('responds with json', function(done) {
      request(app)
        .get('/api/v1/projects')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('responds with 404', function(done) {
      request(app)
        .get('/api/v1/projects')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
