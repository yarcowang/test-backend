const restify = require('restify-clients');
const chai = require('chai');
const expect = require('chai').expect;

describe('user CRUD operation testing', () => {
    let client = restify.createJsonClient({url: 'http://127.0.0.1:8080'});

    it("should return a user with name 'yarco'", () => {
        client.get('/users/5df9fbe0813c951952f526dd', (err, req, res, obj) => {
            expect(obj.name).equals('yarco');
        });
    });
});
