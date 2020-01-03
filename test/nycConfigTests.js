
const fs = require('fs');
const { promisify } = require('util');
const path = require('path')

const t = require('tap');

const readdir = promisify(fs.readdir);

const instrumentedCliDir = path.resolve(__dirname, '../instrumented-cli');
const instrumentedNycrcDir = path.resolve(__dirname, '../instrumented-nycrc');
const instrumentedPackageJsonDir = path.resolve(__dirname, '../instrumented-package-json');

// Run snapshot tests against each
t.test('nyc uses the expected configuration file', async t => {
    const filesCli = await readdir(instrumentedCliDir);
    const filesNycrc = await readdir(instrumentedNycrcDir);
    const filesPackageJson = await readdir(instrumentedPackageJsonDir);

    t.matchSnapshot(filesCli, 'output');
    t.matchSnapshot(filesNycrc, 'output');
    t.matchSnapshot(filesPackageJson, 'output');
});
