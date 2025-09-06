import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc,
  onSnapshot,
  orderBy,
  query
} from 'firebase/firestore';
import { db } from '../firebase/config';

const TASKS_COLLECTION = 'tasks';

export const taskService = {
  // Add a new task
  async addTask(title) {
    try {
      const docRef = await addDoc(collection(db, TASKS_COLLECTION), {
        title,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return {
        id: docRef.id,
        title,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Get all tasks
  async getTasks() {
    try {
      const q = query(collection(db, TASKS_COLLECTION), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting tasks:', error);
      throw error;
    }
  },

  // Update task completion status
  async updateTask(taskId, updates) {
    try {
      const taskRef = doc(db, TASKS_COLLECTION, taskId);
      await updateDoc(taskRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  // Delete a task
  async deleteTask(taskId) {
    try {
      await deleteDoc(doc(db, TASKS_COLLECTION, taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  // Subscribe to real-time updates
  subscribeToTasks(callback) {
    const q = query(collection(db, TASKS_COLLECTION), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (querySnapshot) => {
      const tasks = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(tasks);
    });
  }
};