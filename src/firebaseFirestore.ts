import { getFirestore } from "firebase/firestore";
import { auth } from "./firebase";

export const db = getFirestore(auth.app);