const core = require('@actions/core');

try {
  const rts = core.getInput('rts');
  console.log(`Hello, ${rts}`);
} catch (error) {
  core.setFailed(error.message);
}
