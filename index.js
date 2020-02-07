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
        console.log('dependencies to upgrade:', upgraded);
    });
} catch (error) {
    core.setFailed(error.message);
}
