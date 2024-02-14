const { execSync } = require('child_process');

function git(command) {
  return execSync(`git ${command}`, { stdio: 'inherit' });
}

git('checkout dev');
git('merge main');
git('push');