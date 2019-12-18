const debug = require('debug')('test-backend:user')
const User = require('../models/user')

/**
 * User Controller
 * @type {{get: get, create: create, update: update, remove: remove}}
 */
// TODO: can be a controller class
module.exports = {

    create: async (req, res, next) => {
        try {
            // TODO: input validation
            User.create(req.body, (err, doc) => {
                if (err) return next(err);
                res.send(doc);
                next();
            });
        } catch (e) {
            // TODO: standard error handler use restify
            next(new Error(e));
        }
    },

    get: async (req, res, next) => {
        try {
            let user = await User.findById(req.params.id);
            res.send(user);
            next();
        } catch (e) {
            // TODO: standard error handler use restify
            next(new Error(e));
        }
    },

    update: async (req, res, next) => {
        try {
            // TODO: validation
            User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
                if (err) return next(err);
                res.send(doc);
                next();
            });
        } catch (e) {
            // TODO: standard error handler use restify
            next(new Error(e));
        }
    },

    remove: async (req, res, next) => {
        try {
            // TODO: validation
            await User.deleteOne({id: req.params.id});
            res.send();
            next();
        } catch (e) {
            // TODO: standard error handler use restify
            next(new Error(e));
        }
    }
}
