"use client";
import React, { useState } from "react";
import { app, db } from "./firebaseConfig";
import {collection, addDoc} from 'firebase/firestore'
export default function Home() {
  const [data, setData] = useState({ fname: "", lname: "" });
  let collectionRef = collection(db, "userData")
  let handleChange = (e) => {
    if (e.target.name) {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  let handle = () => {
    console.log(data);
    addDoc(collectionRef, data);
  };
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="border-[4px] rounded-md border-blue-300 w-[400px]">
          <div className="flex flex-row gap-3 p-3">
            <label className="p-2">First Name</label>
            <input
              type="text"
              name="fname"
              className="rounded-md p-2"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="flex flex-row gap-3 p-3">
            <label htmlFor="last name" className="p-2">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              className="rounded-md p-2"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="text-center">
            <button
              className="p-2 border-blue-300 m-2 border-[4px] rounded-lg"
              onClick={() => {
                handle();
              }}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
