const { execSync } = require('child_process');

function git(command) {
  return execSync(`git ${command}`, { stdio: 'inherit' });
}

git('checkout main');
git('merge dev');
git('push');