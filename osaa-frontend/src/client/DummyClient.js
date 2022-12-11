import { json } from "react-router-dom";

export default class DummyClient {

  constructor(){
    this.userPools={
      poolId1: {
        name: "pool1 Name",
        userCount: 100,
      },
      poolId2: {
        name: "pool2 Name",
        userCount: 10,
      },
    }
  }

  getUserPools() {
    const result = Object.keys(this.userPools).map((k) => ({
      name: this.userPools[k].name,
      poolId: k,
    }))

    return this.private_delay(result)
  }

  getUserPoolById(id) {
    //console.log("getUserPoolById id=",id)

    const item = this.userPools[id];

    const result = item? {
      name: item.name,
      users: [...Array(item.userCount).keys()].map(i=>(i+1)).map(i => ({
        userId: `user${i}`,
        credential: `cred${i}`, 
        extId: i})
        ),
    } : null

    //console.log(`returning `, JSON.stringify(result))
    return this.private_delay(result)
  }

  private_delay(result) {
    return new Promise((resolve,reject)=> {
      setTimeout(()=> resolve(result),800*Math.random+200)
    })
  }
}