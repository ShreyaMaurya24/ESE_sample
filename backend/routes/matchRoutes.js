const express = require("express");
const router = express.Router();
const Candidate = require("../models/temp");

router.post("/", async (req, res) => {

    const { requiredSkills, minExperience } = req.body;

    const candidates = await Candidate.find();

    const ranked = candidates.map(candidate => {

        const matchedSkills = candidate.skills.filter(skill =>
            requiredSkills.includes(skill)
        );

        const score =
            matchedSkills.length / requiredSkills.length;

        return {
            ...candidate._doc,
            matchedSkills,
            matchScore: score * 100
        };

    }).filter(c =>
        c.experience >= minExperience
    ).sort((a, b) =>
        b.matchScore - a.matchScore
    );

    res.json(ranked);
});

module.exports = router;