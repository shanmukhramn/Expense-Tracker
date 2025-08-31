



// import React, { useState, useEffect } from "react";
// import { TextField, Button, Box, Typography, Card, CardContent } from "@mui/material";

// const ExpenseForm = ({ onAddExpense, onUpdateExpense, editExpense }) => {
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     if (editExpense) {
//       setTitle(editExpense.title);
//       setAmount(editExpense.amount); // Make sure the amount is being set properly
//     }
//   }, [editExpense]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const expenseData = { title, amount: parseFloat(amount) }; // Ensure amount is parsed as a number
//     if (editExpense) {
//       onUpdateExpense(editExpense.id, expenseData); // Pass ID for updating
//     } else {
//       onAddExpense(expenseData);
//     }
//     setTitle("");
//     setAmount("");
//   };

//   return (
//     <Card sx={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
//       <CardContent>
//         <Typography variant="h5" textAlign="center" mb={2}>
//           {editExpense ? "Edit Expense" : "Add Expense"}
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
//         >
//           <TextField
//             label="Expense Title"
//             variant="outlined"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <TextField
//             label="Amount"
//             variant="outlined"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ textTransform: "none" }}
//           >
//             {editExpense ? "Update Expense" : "Add Expense"}
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ExpenseForm;




// import React, { useState, useEffect } from "react";
// import { TextField, Button, Box, Typography, Card, CardContent } from "@mui/material";

// const ExpenseForm = ({ onAddExpense, onUpdateExpense, editExpense }) => {
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");

//   useEffect(() => {
//     if (editExpense) {
//       setTitle(editExpense.title);
//       setAmount(editExpense.amount);
//     }
//   }, [editExpense]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const expenseData = { title, amount: parseFloat(amount) };
//     if (editExpense) {
//       onUpdateExpense(editExpense.id, expenseData);
//     } else {
//       onAddExpense(expenseData);
//     }
//     setTitle("");
//     setAmount("");
//   };

//   return (
//     <Card sx={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", boxShadow: 3 }}>
//       <CardContent>
//         <Typography variant="h5" textAlign="center" mb={2}>
//           {editExpense ? "Edit Expense" : "Add Expense"}
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
//         >
//           <TextField
//             label="Expense Title"
//             variant="outlined"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <TextField
//             label="Amount"
//             variant="outlined"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ textTransform: "none" }}
//           >
//             {editExpense ? "Update Expense" : "Add Expense"}
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ExpenseForm;





import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Card, CardContent, MenuItem } from "@mui/material";

const categories = ["Food", "Travel", "Entertainment", "Shopping", "Utilities"];

const ExpenseForm = ({ onAddExpense, onUpdateExpense, editExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setDate(editExpense.date);
      setCategory(editExpense.category);
    }
  }, [editExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { 
      title, 
      amount: parseFloat(amount), 
      date, 
      category 
    };

    if (editExpense) {
      onUpdateExpense(editExpense.id, expenseData);
    } else {
      onAddExpense(expenseData);
    }

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" textAlign="center" mb={2}>
          {editExpense ? "Edit Expense" : "Add Expense"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="Expense Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            {editExpense ? "Update Expense" : "Add Expense"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
