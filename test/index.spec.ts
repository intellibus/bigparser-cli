import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('BigParser CLI Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'bigparser-cli');
});

export const { run } = test;
