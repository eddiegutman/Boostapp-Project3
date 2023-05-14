const express = require('express');
const usersBLL = require('../BLL/usersBLL');

const router = express.Router();

// GET - get all users
router.get("/", async (request, response) => {
    try {
        const users = await usersBLL.getAllUsers();
        response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get user by id
router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const user = await usersBLL.getUserByID(id);
        response.status(200).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});


// POST - add a new user
router.post("/register", async (request, response) => {
    try {
        const user = request.body;
        const registeredUser = await usersBLL.register(user);
        request.login(registeredUser, err => {
            if (err) return next(err);
            response.status(200).json({
                success: true,
                message: 'Registration completed successfully'
            });
        })
    } catch (error) {
        return response.json({
            success: false,
            message: error
        });
    }
});

// POST - change user's password
router.post("/changePassword/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const data = request.body;
        const status = await usersBLL.changePassword(id, data);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error.message);
    }
});

// PUT - update existing user
router.put("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const { fullname, email } = request.body;
        const user = { fullname: fullname, email: email };
        const status = await usersBLL.updateUserData(id, user);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// DELETE - delete a user
router.delete("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const status = await usersBLL.deleteUser(id);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;