import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// import { getFirestore,addDoc,collection,doc,getDoc,setDoc } from "firebase/firestore";

import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZkY2s-793MtfdaZh4uQy4JGUjT_gKrTk",
    authDomain: "clone-war.firebaseapp.com",
    projectId: "clone-war",
    storageBucket: "clone-war.appspot.com",
    messagingSenderId: "262435848381",
    appId: "1:262435848381:web:db31642338f370067877d4",
    measurementId: "G-WQ8KBD5WRZ"
};

const FirebaseContext = createContext(null)
export const useFirebase = ()=>useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const FirebaseProvider = (props)=>{
    const [user,setUser] = useState('')
    // const [error,setError] = useState("")

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
          if (user) {
            setUser(user)
          }else{
            setUser("")
          }
        })
    },[user])

    const isLoggedIn = user? true:false ;

    const createUser=async(email,password)=>{
        try {
            const userCredetial =await createUserWithEmailAndPassword(firebaseAuth,email,password)
            const user = userCredetial.user

            await setDoc(doc(db,`users`,user.uid),{
                uid:user.uid,
                email:user.email,
                displayName:user.displayName?user.displayName:'',
                photoURL:user.photoURL?user.photoURL:"",
                createdAt:new Date(),
                roll:"user"
            })
      } catch (error) {
         console.log(error);
      }
    }
    const createLawyer=async(data)=>{
        try {
            const userCredetial =await createUserWithEmailAndPassword(firebaseAuth,data.email,data.password)
            const user = userCredetial.user

          const Lawyer=  await setDoc(doc(db,`lawyers`,user.uid),{
                uid:user.uid,
                name:data.name,
                phone:data.phone,
                email:user.email,
                specialization:data.specialization,
                photoURL:user.photoURL?user.photoURL:"",
                experience:data.experience,
                barAssociation:data.barAssociation,
                createdAt:new Date(),
                roll:"lawyer",
                approval:false,
            })
            console.log(Lawyer);
            
      } catch (error) {
         console.log(error);
      }
    }
    const signIn=async(email,password)=>{
        const User = signInWithEmailAndPassword(firebaseAuth,email,password)
        return User
    }
    const SignInWithGoogle =async()=>{
        try {
            const userCredential=await signInWithPopup(firebaseAuth,googleProvider)
            const user = userCredential.user
    
            const userDocRef = doc(db,'users',user.uid)
            const userDocSnap = await getDoc(userDocRef)
    
            if (!userDocSnap.exists()) {
                await setDoc(doc(db,`users`,user.uid),{
                    uid:user.uid,
                    email:user.email,
                    displayName:user.displayName?user.displayName:'',
                    photoURL:user.photoURL?user.photoURL:"",
                    createdAt:new Date()
                })
            }
           } catch (error) {
            console.log(error);
           } 
    }
    const SignInWithGitHub =async()=>{
        try {
            const userCredential=await signInWithPopup(firebaseAuth,githubProvider)
            const user = userCredential.user
    
            const userDocRef = doc(db,'users',user.uid)
            const userDocSnap = await getDoc(userDocRef)
    
            if (!userDocSnap.exists()) {
                await setDoc(doc(db,`users`,user.uid),{
                    uid:user.uid,
                    email:user.email,
                    displayName:user.displayName?user.displayName:'',
                    photoURL:user.photoURL?user.photoURL:"",
                    createdAt:new Date()
                })
            }
           } catch (error) {
            console.log(error);
           } 
      }
    return(
        <FirebaseContext.Provider value={{
            user,isLoggedIn,createUser,signIn,SignInWithGoogle,SignInWithGitHub,createLawyer
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}