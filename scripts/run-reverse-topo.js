'use-strict';

/**
 * This script will run a subcommand for each package in reverse-topology order.
 *
 * The command will be ran once per package, you can use the __PACKAGE__ tag in
 * your command and arguments and it will get replaced by the current package
 * from the iteration.
 */

// @ts-check
const cp = require('child_process');

/** {LernaPackage[]} */
const LERNA_SORT = JSON.parse(cp.execSync('yarn --silent lerna ls --sort --json').toString());

/** {{ [key: string]: YarnWorkspace  }} */
const YARN_WORKSPACES = JSON.parse(cp.execSync('yarn --silent workspaces info').toString());

// reverse topology order
LERNA_SORT.reverse();

for (const item of LERNA_SORT) {
    const workspace = YARN_WORKSPACES[item.name];
    const command = process.argv[2];
    const args = process.argv.slice(3).map(arg => arg.replace(/__PACKAGE__/g, item.name));
    console.log(`${item.name}: $ ${command} ${args.join(' ')}`);
    cp.spawnSync(command, args, {
        stdio: ['ignore', 'ignore', 'inherit'],
        cwd: workspace.location,
    });
}
