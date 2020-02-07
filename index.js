const core = require('@actions/core');
const ncu = require('npm-check-updates');

try {
    // `ncu-options` input defined in action metadata file
    const ncuOptions = core.getInput('ncu-options');
    console.log(`Running ncu with the options ${ncuOptions}!`);

    // Run the ncu command
    // TODO : add other options
    ncu.run({
        packageManager: 'npm'
    }).then((upgraded) => {
        if (Object.keys(upgraded).length > 0) {
            core.setFailed(`dependencies to upgrade: ${upgraded}`);
        } else {
            console.log('Everything is up to date. Enjoy!');
        }
    });
} catch (error) {
    core.setFailed(error.message);
}
