

const Replicate = require("replicate");
// Create the client
const replicate = new Replicate({
  auth:'' // Replace with your API token
});

// Run a model and await the result
async function runModel() {
  const model = "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
  const input = {
    prompt: "A dog",//insert prompt here 
  };

  try {
    const output = await replicate.run(model, { input });
    console.log(output);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runModel();

