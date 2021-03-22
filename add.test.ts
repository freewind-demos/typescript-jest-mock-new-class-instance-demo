import add from './add';
import {Builder} from './Builder';
import {mocked} from 'ts-jest';

jest.mock('./Builder')

describe('test', () => {
  const buildMock = mocked<Builder['build']>(jest.fn())
  beforeEach(() => {
    mocked(Builder).mockImplementation((name: string) => ({
      name,
      build: buildMock
    }))
  })

  it('mocks the build methods', () => {
    buildMock.mockReturnValue('HELLO')
    expect(add("aaa", "bbb")).toBe("HELLO");
  })
})
