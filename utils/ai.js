// Import the Groq SDK from npm
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Send a prompt to the Groq model and return the AI reply text
export async function generateResponse(prompt) {

    // Groq expects a messages array, where each message has:
    // - role: who is sending the message
    // - content: the actual text
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        model: "openai/gpt-oss-20b", // model used to generate the reply
        temperature: 1,
        max_completion_tokens: 300, // max number of tokens allowed in the reply
        top_p: 1,
        stream: false, // wait for the full response before returning
        reasoning_effort: "medium",
    });

    // Return only the text from the first reply option
    return chatCompletion.choices[0].message.content;
}

