const rollup = require('rollup');
const util = require('util');

async function build(){
  const bundle = await rollup.rollup({
    input: ['./src/index2.js'],
  })
  const result = await bundle.generate({
    format: 'es',
  })
  console.log('result:', result);
}

build();