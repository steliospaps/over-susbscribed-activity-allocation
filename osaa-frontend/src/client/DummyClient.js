export default class DummyClient {

  constructor(){
    this.userPools={
      poolId1: {
        name: "pool1 Name",
        users: {
          userId1:{credential: "cred1", extId:"extId1"},
          userId2:{credential: "cred2", extId:"extId2"},
        }
      }
    }
  }

  getUserPoolById(id) {
    return new Promise((resolve,reject)=> {
      setTimeout(()=> resolve(this.userPools[id]),1000)
    })
  }
}