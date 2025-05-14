import { getDatabase, push, ref, set } from "firebase/database";
export const firebaseUpload = async (dbName = "", data = {}) => {
  const db = getDatabase();
  try {
    const upload = await set(push(ref(db, dbName.trim())), data);
    console.log(upload);
  } catch (error) {
    throw new Error(`firebase set method error ${error}`);
  }
};
