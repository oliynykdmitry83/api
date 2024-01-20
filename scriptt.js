async function generateImage(prompt) {
    const apiKey = 'brfEIPtPzoeezQ1XsLEUT3BlbkFJ0ySWLexceededpW040vA3UgWZbTT';  // Replace with your actual OpenAI API key
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';  // Update with the correct endpoint

    // Prepare the data for the request
    const requestData = {
        prompt: prompt,
        max_tokens: 100,  // Adjust as needed
        temperature: 0.7  // Adjust the temperature parameter
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch response from OpenAI. Status: ${response.status}`);
        }

        const responseData = await response.json();
        
        // Assuming the image URL is in the 'image' property of the response
        const imageUrl = responseData.choices[0].image;

        return imageUrl;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
