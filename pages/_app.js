import '../styles/globals.css'
import {UserContext} from '../components/context'
import React , {useState} from 'react';

const initalState = {
 loading: false,
 tableData: [
   {
     horseName: 'A graham Neighton',
     result: 'a',
     lockResult: false
   },
   {
     horseName: 'v graham Neighton',
     result: 'a',
     lockResult: false
   },
   {
     horseName: 'R graham Neighton',
     result: 'a',
     lockResult: false
   },
   {
     horseName: 'X graham Neighton',
     result: 'a',
     lockResult: false
   },
 ]
}
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(initalState)
  console.log(user)
  return (
  <UserContext.Provider value={{ user, setUser }}>
  <Component {...pageProps} />
</UserContext.Provider>)
}

export default MyApp
