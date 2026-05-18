const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/shortlist", async (req, res) => {

    try {

        const { candidates, job } = req.body;

        const prompt = `
Job requires:
${job.requiredSkills.join(", ")}

Candidates:
${JSON.stringify(candidates)}

Rank candidates and explain why.
`;

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-5.2",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    Authorization:
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;