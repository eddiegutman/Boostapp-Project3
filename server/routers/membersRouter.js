const express = require('express');
const membersBLL = require('../BLL/membersBLL');

const router = express.Router();

// GET - get all members
router.get("/", async (request, response) => {
    try {
        const members = await membersBLL.getAllMembers();
        response.status(200).json(members);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get all members with their subscriptions
router.get("/subs", async (request, response) => {
    try {
        const members = await membersBLL.getAllMembersWithSubs();
        response.status(200).json(members);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// GET - get member by id
router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const member = await membersBLL.getMemberByID(id);
        response.status(200).json(member);
    } catch (error) {
        return response.status(500).json(error);
    }
});



// POST - add a new member
router.post("/", async (request, response) => {
    try {
        const member = request.body;
        const status = await membersBLL.addMember(member);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// PUT - update existing member
router.put("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const member = request.body;
        const status = await membersBLL.updateMember(id, member);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

// DELETE - delete a member
router.delete("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const status = await membersBLL.deleteMember(id);
        response.status(200).json(status);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;