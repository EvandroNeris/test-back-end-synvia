import User from "./user"

describe('User unit tests', () => {
  it('should return error when id is empty', () => {
    expect(() => {
      new User('', 'teste@email.com', '12345678')
    }).toThrowError('Id is required')
  })

  it('should return error when email is empty', () => {
    expect(() => {
      new User('123', '', '12345678')
    }).toThrowError('Email is required')
  })

  it('should return error when password is empty', () => {
    expect(() => {
      new User('123', 'test@email.com', '')
    }).toThrowError('Password is required')
  })

  it('should return error when password is less than 8 digits', () => {
    expect(() => {
      new User('123', 'test@email.com', '1234567')
    }).toThrowError('Password needs to be equal or greater than 88 characters')
  })
})