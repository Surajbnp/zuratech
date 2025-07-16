import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addTeam = async (teamData) => {
  try {
    const docRef = await addDoc(collection(db, "teams"), teamData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding team:", error);
    throw error;
  }
};