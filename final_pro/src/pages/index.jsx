import React, { useState } from "react";
import { TextField, Button, Typography, Table, TableHead, TableBody, TableRow, TableCell, Select, MenuItem } from "@mui/material";

function InvoiceForm() {
  const suppliers = ["Supplier A", "Supplier B", "Supplier C"]; // Demo data for suppliers
  const receivers = ["Receiver A", "Receiver B", "Receiver C"]; // Demo data for receivers

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
        supplier: suppliers[0], // Set the default supplier as the first item
        receiver: receivers[0], // Set the default receiver as the first item
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
          supplier: suppliers[0], // Set the default supplier as the first item
          receiver: receivers[0], // Set the default receiver as the first item
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
    <div className="h-screen bg-green-100 p-10">
      <form className="container h-screen  ml-10" onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          Invoice Form
        </Typography>

        {/* Invoice details table */}
        <div className="card mt-6 p-4" style={{ maxWidth: 'calc(100vw - 40px)', overflowX: 'hidden' }}>
          <Typography variant="h6" gutterBottom>
            Add Product
          </Typography>
          <Table>
            <TableHead className="bg-green-400">
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Invoice No</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Code</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Sales Price</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Receiver</TableCell>
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
                    <Select
                      value={item.supplier}
                      onChange={(e) => handleDetailChange(index, { target: { name: "supplier", value: e.target.value } })}
                      fullWidth
                    >
                      {suppliers.map((supplier, i) => (
                        <MenuItem key={i} value={supplier}>
                          {supplier}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={item.receiver}
                      onChange={(e) => handleDetailChange(index, { target: { name: "receiver", value: e.target.value } })}
                      fullWidth
                    >
                      {receivers.map((receiver, i) => (
                        <MenuItem key={i} value={receiver}>
                          {receiver}
                        </MenuItem>
                      ))}
                    </Select>
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

        {/* Submit Button */}
        <div className="save pt-10 justify-center items-center">
          <Button type="submit" variant="contained" color="primary">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
