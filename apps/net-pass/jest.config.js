module.exports = {
  name: 'net-pass',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/net-pass',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
