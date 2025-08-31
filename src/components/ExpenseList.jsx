// // import React from "react";
// // import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Paper } from "@mui/material";

// // const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
// //   return (
// //     <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "2rem auto" }}>
// //       <Typography variant="h6" textAlign="center" mt={2}>
// //         Expense List
// //       </Typography>
// //       <Table>
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>Title</TableCell>
// //             <TableCell>Amount</TableCell>
// //             <TableCell align="center">Actions</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {expenses.map((expense) => (
// //             <TableRow key={expense.id}>
// //               <TableCell>{expense.title}</TableCell>
// //               <TableCell>${expense.amount}</TableCell>
// //               <TableCell align="center">
// //                 <Button
// //                   variant="outlined"
// //                   color="primary"
// //                   size="small"
// //                   onClick={() => onEditExpense(expense)}
// //                   sx={{ marginRight: "0.5rem" }}
// //                 >
// //                   Edit
// //                 </Button>
// //                 <Button
// //                   variant="outlined"
// //                   color="error"
// //                   size="small"
// //                   onClick={() => onDeleteExpense(expense.id)}
// //                 >
// //                   Delete
// //                 </Button>
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //   );
// // };

// // export default ExpenseList;






// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Paper } from "@mui/material";

// const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "2rem auto" }}>
//       <Typography variant="h6" textAlign="center" mt={2}>
//         Expense List
//       </Typography>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Title</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {expenses.map((expense) => (
//             <TableRow key={expense.id}>
//               <TableCell>{expense.title}</TableCell>
//               <TableCell>${expense.amount}</TableCell>
//               <TableCell align="center">
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   size="small"
//                   onClick={() => onEditExpense(expense)}
//                   sx={{ marginRight: "0.5rem" }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   size="small"
//                   onClick={() => onDeleteExpense(expense.id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ExpenseList;



// import React from "react";
// import { Box, Button, Card, CardContent, Typography } from "@mui/material";

// const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
//   return (
//     <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
//       {expenses.map((expense) => (
//         <Card
//           key={expense.id}
//           sx={{
//             marginBottom: "1rem",
//             boxShadow: 3,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
//               {expense.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "0.5rem" }}>
//               Category: Entertainment {/* Replace with dynamic category */}
//             </Typography>
//             <Typography variant="body1" fontWeight="bold">
//               ₹{expense.amount}
//             </Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 size="small"
//                 onClick={() => onEditExpense(expense)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 size="small"
//                 onClick={() => onDeleteExpense(expense.id)}
//               >
//                 Delete
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default ExpenseList;




import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
  return (
    <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
      {expenses.map((expense) => (
        <Card
          key={expense.id}
          sx={{
            marginBottom: "1rem",
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              {expense.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {expense.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {expense.category}
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              ₹{expense.amount}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => onEditExpense(expense)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ExpenseList;





// import React, { useMemo } from "react";
// import { Box, Card, CardContent, Typography, Divider } from "@mui/material";

// // Helper to get month names
// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December",
// ];

// const ExpenseList = ({ expenses }) => {
//   // Sort expenses by date (frontend only)
//   const sortedExpenses = useMemo(() => {
//     return [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
//   }, [expenses]);

//   // Get the current year
//   const currentYear = new Date().getFullYear();

//   // Calculate total expenses for the current year
//   const totalYearExpenses = useMemo(() => {
//     return sortedExpenses
//       .filter((expense) => new Date(expense.date).getFullYear() === currentYear)
//       .reduce((sum, expense) => sum + expense.amount, 0);
//   }, [sortedExpenses, currentYear]);

//   // Calculate month-wise expenses
//   const monthWiseExpenses = useMemo(() => {
//     const groupedByMonth = {};

//     sortedExpenses.forEach((expense) => {
//       const date = new Date(expense.date);
//       const year = date.getFullYear();
//       const month = date.getMonth();

//       if (year === currentYear) {
//         if (!groupedByMonth[month]) {
//           groupedByMonth[month] = 0;
//         }
//         groupedByMonth[month] += expense.amount;
//       }
//     });

//     return groupedByMonth;
//   }, [sortedExpenses, currentYear]);

//   return (
//     <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
//       {/* Yearly and Monthly Overview */}
//       <Card sx={{ marginBottom: "1rem", boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" textAlign="center">
//             Yearly and Monthly Overview
//           </Typography>
//           <Divider sx={{ marginY: "1rem" }} />
//           <Typography variant="h6">
//             Total Expenses for {currentYear}: ₹{totalYearExpenses}
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: "1rem" }}>
//             Month-wise Breakdown:
//           </Typography>
//           <Box sx={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
//             {Object.entries(monthWiseExpenses).map(([month, total]) => (
//               <Typography key={month} variant="body1">
//                 {monthNames[month]}: ₹{total}
//               </Typography>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Sorted Expenses List */}
//       <Typography variant="h5" textAlign="center" sx={{ marginBottom: "1rem" }}>
//         Expenses (Sorted by Date)
//       </Typography>
//       {sortedExpenses.map((expense) => (
//         <Card
//           key={expense.id}
//           sx={{
//             marginBottom: "1rem",
//             boxShadow: 3,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
//               {expense.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Date: {new Date(expense.date).toLocaleDateString()}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Category: {expense.category}
//             </Typography>
//             <Typography variant="body1" fontWeight="bold">
//               ₹{expense.amount}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default ExpenseList;




// import React, { useMemo } from "react";
// import { Box, Card, CardContent, Typography, Divider, Button } from "@mui/material";

// // Helper to get month names
// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December",
// ];

// const ExpenseList = ({ expenses, onEdit, onDelete }) => {
//   // Sort expenses by date
//   const sortedExpenses = useMemo(() => {
//     return [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
//   }, [expenses]);

//   // Get the current year
//   const currentYear = new Date().getFullYear();

//   // Calculate total expenses for the current year
//   const totalYearExpenses = useMemo(() => {
//     return sortedExpenses
//       .filter((expense) => new Date(expense.date).getFullYear() === currentYear)
//       .reduce((sum, expense) => sum + expense.amount, 0);
//   }, [sortedExpenses, currentYear]);

//   // Calculate month-wise expenses
//   const monthWiseExpenses = useMemo(() => {
//     const groupedByMonth = {};

//     sortedExpenses.forEach((expense) => {
//       const date = new Date(expense.date);
//       const year = date.getFullYear();
//       const month = date.getMonth();

//       if (year === currentYear) {
//         if (!groupedByMonth[month]) {
//           groupedByMonth[month] = 0;
//         }
//         groupedByMonth[month] += expense.amount;
//       }
//     });

//     return groupedByMonth;
//   }, [sortedExpenses, currentYear]);

//   return (
//     <Box sx={{ maxWidth: 600, margin: "2rem auto" }}>
//       {/* Yearly and Monthly Overview */}
//       <Card sx={{ marginBottom: "1rem", boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" textAlign="center">
//             Yearly and Monthly Overview
//           </Typography>
//           <Divider sx={{ marginY: "1rem" }} />
//           <Typography variant="h6">
//             Total Expenses for {currentYear}: ₹{totalYearExpenses}
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: "1rem" }}>
//             Month-wise Breakdown:
//           </Typography>
//           <Box sx={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
//             {Object.entries(monthWiseExpenses).map(([month, total]) => (
//               <Typography key={month} variant="body1">
//                 {monthNames[month]}: ₹{total}
//               </Typography>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Sorted Expenses List */}
//       <Typography variant="h5" textAlign="center" sx={{ marginBottom: "1rem" }}>
//         Expenses (Sorted by Date)
//       </Typography>
//       {sortedExpenses.map((expense) => (
//         <Card
//           key={expense.id}
//           sx={{
//             marginBottom: "1rem",
//             boxShadow: 3,
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
//               {expense.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Date: {new Date(expense.date).toLocaleDateString()}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Category: {expense.category}
//             </Typography>
//             <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: "1rem" }}>
//               ₹{expense.amount}
//             </Typography>

//             {/* Edit and Delete Buttons */}
//             <Box sx={{ display: "flex", gap: "1rem" }}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 size="small"
//                 onClick={() => onEdit(expense)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="error"
//                 size="small"
//                 onClick={() => onDelete(expense.id)}
//               >
//                 Delete
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default ExpenseList;
