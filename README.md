# replicate
Replicate AI makes it easy to run machine learning models in the cloud from your own code. You can use Replicate for free, but after a bit you'll be asked to enter your credit card. You pay by the second for the predictions you run. The price per second varies based on the hardware the model is run on. On a CPU it costs $0.0002 per second. On GPUs it gets more expensive.
Image generator

The Replicate AI Model Runner is a JavaScript project that allows you to run AI models using the "Replicate" library. With this project, you can easily interact with AI models and obtain their results based on the provided input prompts.
Features
Modify the prompt variable in the input object with the desired input prompt for the AI model.
The output will be a photo of the input provided
Technical Details 
The project utilizes the "Replicate" API key to authenticate a client for interacting with AI models.(Documentation – Replicate)
The output of the AI model will be logged to the console as a response to the provided input prompt.
The model used for this specific task is stability-ai/stable-diffusion
The code is written in JavaScript 
