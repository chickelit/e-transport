import * as jest from "jest";

async function runTests() {
  const options = {
    // Any Jest CLI options can be passed here
    projects: [process.cwd()],
    silent: true,
  };

  const result = await jest.runCLI(options as any, options.projects);
  const passed = result.results.success;

  process.stdout.write(`passed: ${passed}`);
}

runTests();

