process.env.NODE_ENV = 'test';

const server = require ('./server');
const db = require ('./app/models/db');
const admin = require ('./app/controllers/admin.controller');
const pass = require ('./app/controllers/pass.controller');
const assert = require ('assert');
const chai = require ('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('healthcheck', () => {
    it('should assure end-to-end connectivity between database and admin', (done) => {
        chai.request(server)
        .get('/interoperability/api/admin/healthcheck')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

describe('resetpasses', () => {
    it('should initialize passes table', (done) => {
        chai.request(server)
        .post('/interoperability/api/admin/resetpasses')
        .end((err, res) => {
            res.should.have.status(200);
        done();
        });
    });
});

describe('resetstations', () => {
    it('should initialize stations table', (done) => {
        chai.request(server)
        .post('/interoperability/api/admin/resetstations')
        .end((err, res) => {
            res.should.have.status(200);
        done();
        });   
    });
});

describe('resetvehicles', () => {
    it('should initialize vehicles table', (done) => {
        chai.request(server)
        .post('/interoperability/api/admin/resetvehicles')
        .end((err, res) => {
            res.should.have.status(200);
        done();
        });
    
    });
});

/*describe('Passes pes Station', () => {
    it('should return Passes per Station', (done) => {
        chai.request(server)
        .get('/interoperability/api/PassesPerStation/:stationID/:date_from/:date_to')
        .end((err, res) => {
            res.should.have.status(200);
            (done);
        });
    });
});

describe('Get Passes analysis', () => {
    it('should return number of passes and passes list between two operators in a certain time period', (done) => {
        chai.request(server)
        .get('/interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to')
        .end((err, res) => {
            res.should.have.status(200);
            (done);
        });
    });
});

describe('Get Passes Cost', () => {
    it('should return number of passes with op2 tags through op1 stations and charges from op2 to op1', (done) => {
        chai.request(server)
        .get('/interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to')
        .end((err, res) => {
            res.should.have.status(200);
            (done);
        });
    });
});

describe('Get Charges by', () => {
    it('should return number of passes and charges from other operators to op', (done) => {
        chai.request(server)
        .get('/interoperability/api/ChargesBy/:op_ID/:date_from/:date_to')
        .end((err, res) => {
            res.should.have.status(200);
            (done);
        });
    });
});*/