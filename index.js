const { execSync } = require('child_process');

const dynamicImport = async (path) => {
  try {
    // const execResult = execSync(`tsc ${path}`);

    const module = await import('./exports.js');

    console.log(module.default.default.name);
  } catch (e) {
    console.error(e);
  }
};

dynamicImport(`./exports.tsx`);
