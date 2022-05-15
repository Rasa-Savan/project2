import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function GetDataFromFirebase() {
  const getDataHandler = async () => {
    const docRef = doc(db, "Branches", "BB4eaKgtZYv3hzLbTDOB");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <button onClick={getDataHandler}>Get data from firebase</button>
    </div>
  );
}

export default GetDataFromFirebase;
