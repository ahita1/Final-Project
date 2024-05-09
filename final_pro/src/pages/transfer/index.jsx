import { useState } from "react";
import { TextField, Button, Grid, Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

function InvoiceForm() {
  const [formData, setFormData] = useState({
    deliveryCompanyName: "",
    invoiceNo: "",
    invoiceDate: "",
    details: [
      {
        invoiceNo: "",
        productName: "",
        productCode: "",
        productModel: "",
        qty: "",
        salesPrice: "",
        total: "",
      },
    ],
    total: "",
    deliveryId: "",
    deliverysName: "",
    customerId: "",
    customerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDetailChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      details: prevState.details.map((detail, i) =>
        i === index ? { ...detail, [name]: value } : detail
      ),
    }));
  };

  const handleAddDetail = () => {
    setFormData((prevState) => ({
      ...prevState,
      details: [
        ...prevState.details,
        {
          invoiceNo: "",
          productName: "",
          productCode: "",
          productModel: "",
          qty: "",
          salesPrice: "",
          total: "",
        },
      ],
    }));
  };

  const handleRemoveDetail = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      details: prevState.details.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-screen bg-green-100  p-10">
      <form className="container bg-green-100 w-full ml-10" onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          Invoice Form
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Delivery Company Name"
              name="deliveryCompanyName"
              value={formData.deliveryCompanyName}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Invoice No"
              name="invoiceNo"
              value={formData.invoiceNo}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Invoice Date"
              type="date"
              name="invoiceDate"
              value={formData.invoiceDate}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
        </Grid>

        {/* Invoice details table */}
        <div className="card mt-6 p-4" style={{ maxWidth: 'calc(100vw - 40px)', overflowX: 'hidden' }}>
  <Typography variant="h6" gutterBottom>
    Add Product
  </Typography>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>No</TableCell>
        <TableCell>Invoice No</TableCell>
        <TableCell>Product Name</TableCell>
        <TableCell>Product Code</TableCell>
        <TableCell>Model</TableCell>
        <TableCell>Qty</TableCell>
        <TableCell>Sales Price</TableCell>
        <TableCell>Total</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {formData.details.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            <TextField
              name="invoiceNo"
              value={item.invoiceNo}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="productName"
              value={item.productName}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="productCode"
              value={item.productCode}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="productModel"
              value={item.productModel}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="qty"
              value={item.qty}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="salesPrice"
              value={item.salesPrice}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextField
              name="total"
              value={item.total}
              onChange={(e) => handleDetailChange(index, e)}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <Button onClick={() => handleRemoveDetail(index)} color="secondary">Remove</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  {/* Add Product Button */}
  <Button onClick={handleAddDetail} className="mt-3" variant="contained" color="primary">Add Product</Button>
</div>
        {/* Total */}
        <TextField
          label="Total"
          name="total"
          value={formData.total}
          onChange={handleChange}
          fullWidth
          style={{ width: 'calc(100% - 30px)' }}
          className="mt-6"
        />

        {/* Delivery Company, Delivery Name, Customer Id, Customer Name */}
        <Grid container spacing={2} className="mt-6">
          <Grid item xs={6}>
            <TextField
              label="Delivery Company ID"
              name="deliveryId"
              value={formData.deliveryId}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Delivery Company Name"
              name="deliverysName"
              value={formData.deliverysName}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Customer ID"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              fullWidth
              style={{ width: 'calc(100% - 30px)' }}
            />
          </Grid>
        </Grid>
        {/* Submit Button */}
        <div className="save pt-10 justify-center items-center">
          <Button type="submit" variant="contained" color="primary">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
