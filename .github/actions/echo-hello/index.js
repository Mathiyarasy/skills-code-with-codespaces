const core = require('@actions/core');

try {
  const rts = process.env.rts;
  console.log(`Hello, ${rts}`);
} catch (error) {
  core.setFailed(error.message);
}
