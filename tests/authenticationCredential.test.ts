import { expect } from 'chai'
import Did from '../ts/identity/did'
import * as AuthenticationCredential from '../ts/identity/authenticationCredential'
import testData from './testData'

describe('Authentication credential' , () => {
  const publicKey = Buffer.from(testData.testUserPublicKey, 'utf8')
  const did = new Did(publicKey)
  let authCredential = AuthenticationCredential.ecdsaAuthenticationCredentials(testData.testUserPublicKey, did)

  it('Should include owners Did', () => {
    expect(authCredential.owner).to.equal(did)
  })
})

