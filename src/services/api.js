import axios from "axios";

const API_URL = "http://localhost:3001/expenses";

export const getExpenses = async () => await axios.get(API_URL);
export const addExpense = async (expense) => await axios.post(API_URL, expense);
export const updateExpense = async (id, updatedExpense) =>
  await axios.put(`${API_URL}/${id}`, updatedExpense); // Correct API endpoint for updating
export const deleteExpense = async (id) => await axios.delete(`${API_URL}/${id}`);
