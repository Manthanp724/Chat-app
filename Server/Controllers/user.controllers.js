const express = require("express");
const User = require("../Models/user.model");
const bcrypt = require("bcrypt")

const HandleRegister = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // hashing and salting of password

        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password , saltRound);

        // Create and save the new user
        const newUser = await User.create({ username, email, password : hashedPassword });

        // Send success response
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { HandleRegister };
