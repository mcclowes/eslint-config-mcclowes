var config = require('../index')

describe('eslint config', () => {
  it('exports correctly', () => {
    expect(config.rules).toMatchSnapshot()
  })
})