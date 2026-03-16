import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../lib/firebase";

const COLLECTION_NAME = "reviews";

export const reviewService = {
  async addReview(name, text) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        name,
        text,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, name, text };
    } catch (error) {
      console.error("Error adding review: ", error);
      throw error;
    }
  },

  async getReviews() {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
      });
      return reviews;
    } catch (error) {
      console.error("Error getting reviews: ", error);
      throw error;
    }
  }
};
