const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { skills } = req.body;

        if (!skills || skills.length === 0) {

            return res.status(400).json({
                message: "Skills required"
            });
        }

        let questions = [];

        skills.forEach(skill => {

            questions.push(
                `Explain ${skill}?`
            );

            questions.push(
                `What are important concepts in ${skill}?`
            );

            questions.push(
                `What are advantages of ${skill}?`
            );

        });

        questions.push(
            "What is OOP?"
        );

        questions.push(
            "Explain inheritance."
        );

        questions.push(
            "Difference between stack and queue?"
        );

        res.json({
            questions: questions.join("\n\n")
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error generating questions"
        });
    }
});

module.exports = router;