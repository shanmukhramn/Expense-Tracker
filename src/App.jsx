import React, { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "./services/api";
import { TextField, Box, Typography } from "@mui/material";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  // Fetch expenses on mount
  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Filter expenses based on search query
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddExpense = async (expense) => {
    try {
      await addExpense(expense);
      fetchExpenses();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleUpdateExpense = async (id, updatedExpense) => {
    try {
      await updateExpense(id, updatedExpense); // Pass the ID to update the correct expense
      fetchExpenses(); // Fetch expenses again after updating
      setEditExpense(null); // Clear the form
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* Search bar for filtering expenses */}
      <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
        <TextField
          label="Search Expenses"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{
            marginBottom: "1rem",
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
        />
      </Box>

      <ExpenseForm
        onAddExpense={handleAddExpense}
        onUpdateExpense={handleUpdateExpense}
        editExpense={editExpense}
      />
      <ExpenseList
        expenses={filteredExpenses}  
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={(expense) => setEditExpense(expense)} // Set the expense to edit
      />
    </div>
  );
};

export default App;




// import React, { useEffect, useState } from "react";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import { getExpenses, addExpense, updateExpense, deleteExpense } from "./services/api";
// import { TextField, Box } from "@mui/material";

// const App = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [editExpense, setEditExpense] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(""); // For search functionality

//   // Fetch expenses on mount
//   const fetchExpenses = async () => {
//     try {
//       const response = await getExpenses();
//       setExpenses(response.data);
//     } catch (error) {
//       console.error("Error fetching expenses:", error);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   // Filter expenses based on search query
//   const filteredExpenses = expenses.filter((expense) =>
//     expense.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Add expense handler
//   const handleAddExpense = async (expense) => {
//     try {
//       await addExpense(expense);
//       fetchExpenses();
//     } catch (error) {
//       console.error("Error adding expense:", error);
//     }
//   };

//   // Update expense handler
//   const handleUpdateExpense = async (id, updatedExpense) => {
//     try {
//       await updateExpense(id, updatedExpense); // Ensure the correct expense is updated
//       fetchExpenses();
//       setEditExpense(null); // Clear the edit form
//     } catch (error) {
//       console.error("Error updating expense:", error);
//     }
//   };

//   // Delete expense handler
//   const handleDeleteExpense = async (id) => {
//     try {
//       await deleteExpense(id); // Ensure API delete call works
//       setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id)); // Update state
//     } catch (error) {
//       console.error("Error deleting expense:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Expense Tracker</h1>

//       {/* Search bar */}
//       <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
//         <TextField
//           label="Search Expenses"
//           variant="outlined"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           fullWidth
//           sx={{
//             marginBottom: "1rem",
//             backgroundColor: "#fff",
//             borderRadius: "4px",
//           }}
//         />
//       </Box>

//       {/* Expense Form */}
//       <ExpenseForm
//         onAddExpense={handleAddExpense}
//         onUpdateExpense={handleUpdateExpense}
//         editExpense={editExpense}
//       />

//       {/* Expense List */}
//       <ExpenseList
//         expenses={filteredExpenses}
//         onDeleteExpense={handleDeleteExpense} // Pass delete function
//         onEditExpense={(expense) => setEditExpense(expense)} // Pass edit function
//       />
//     </div>
//   );
// };

// export default App;
