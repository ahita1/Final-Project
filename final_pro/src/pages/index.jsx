import { useState } from "react";

function InvoiceForm() {
  const [formData, setFormData] = useState({
    deliveryCampanyName: "",
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
    <div className="h-screen bg-green-100">
      <form className="container bg-green-100 w-full ml-10" onSubmit={handleSubmit}>
        <h3 className="text-2xl mb-4">Invoice Form</h3>

        <div>
          <table>
            <tbody>
              <tr className="flex grid-cols-2 mb-2">
                <td className="w-6/12">
                  <label>ንብረቱን የአቀረበው ድርጅትስም</label>
                </td>
                <td className="w-6/12">
                  <input
                    placeholder=""
                    name="deliveryCampanyName"
                    value={formData.deliveryCampanyName}
                    onChange={handleChange}
                    className="form-control outline-none border px-3 py-1 bg-gray-200"
                  />
                </td>
              </tr>
              <tr className="flex grid-cols-2 mb-2">
                <td className="w-6/12">
                  <label>የደረሰኝ .ቁ</label>
                </td>
                <td className="w-6/12">
                  <input
                    placeholder=""
                    name="invoiceNo"
                    value={formData.invoiceNo}
                    onChange={handleChange}
                    className="form-control outline-none border px-3 py-1 bg-gray-200"
                  />
                </td>
              </tr>
              <tr className="flex grid-cols-2 mb-2">
                <td className="w-6/12">
                  <label>ገቢ የተደረገበት ቀን</label>
                </td>
                <td className="w-6/12">
                  <input
                    type="date"
                    name="invoiceDate"
                    value={formData.invoiceDate}
                    onChange={handleChange}
                    className="form-control outline-none border px-3 py-1 bg-gray-200 w-48"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card items-center justify-center h-72">
          <table>
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 mr-10">
              <tr className="">
                <th className="px-6 py-3">ቁ</th>
                <th className="px-6 py-3">የደረሰኝ .ቁ</th>
                <th className="px-6 py-3">የእቃው ስም</th>
                <th className="px-6 py-3">ሴሪያ.ቁ</th>
                <th className="px-6 py-3">ሞደል</th>
                <th className="px-6 py-3">ብዛት</th>
                <th className="px-6 py-3">የአንዱ ዋጋ</th>
                <th className="px-6 py-3">ድምር</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {formData.details.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-400 dark:border-gray-700"
                >
                  <td>{index + 1}</td>
                  <td>
                    <input
                      name="invoiceNo"
                      value={item.invoiceNo}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-24"
                    />
                  </td>
                  <td>
                    <input
                      name="productName"
                      value={item.productName}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-32"
                    />
                  </td>
                  <td>
                    <input
                      name="productCode"
                      value={item.productCode}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-32"
                    />
                  </td>
                  <td>
                    <input
                      name="productModel"
                      value={item.productModel}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-32"
                    />
                  </td>
                  <td>
                    <input
                      name="qty"
                      value={item.qty}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-24"
                    />
                  </td>
                  <td>
                    <input
                      name="salesPrice"
                      value={item.salesPrice}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-24"
                    />
                  </td>
                  <td>
                    <input
                      name="total"
                      value={item.total}
                      onChange={(e) => handleDetailChange(index, e)}
                      className="form-control border-solid border-2 border-gray-600 w-32"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemoveDetail(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="mt-6">
                  <button
                    onClick={handleAddDetail}
                    className="mt-3 btn btn-primary"
                  >
                    Add Product
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="row mt-6">
          <div className="col-lg-5">
            <div className="grid-cols-2 p-10 flex space-x-4">
              <label>አጠቃላይ ድምር</label>
              <input
                name="total"
                value={formData.total}
                onChange={handleChange}
                placeholder=""
                className="form-control outline-none border px-3 py-1 bg-gray-200"
              />
            </div>
          </div>
        </div>

        <table className="mt-6">
          <tbody>
            <tr className="flex grid-cols-2">
              <td className="w-6/12">
                <label>ንብረት የአቀረበው .መ.ቁ</label>
              </td>
              <td className="w-6/12">
                <input
                  name="deliveryId"
                  value={formData.deliveryId}
                  onChange={handleChange}
                  placeholder=""
                  className="mb-2 form-control outline-none border px-3 py-1 bg-gray-200"
                />
              </td>
            </tr>
            <tr className="flex grid-cols-2">
              <td className="w-6/12">
                <label> ንብረት የአቀረበው ስም</label>
              </td>
              <td className="w-6/12">
                <input
                  name="deliverysName"
                  value={formData.deliverysName}
                  onChange={handleChange}
                  placeholder=""
                  className="mb-2 form-control outline-none border px-3 py-1 bg-gray-200"
                />
              </td>
            </tr>
            <tr className="flex grid-cols-2">
              <td className="w-6/12">
                <label>ንብረት ተቀባይ.መ.ቁ </label>
              </td>
              <td className="w-6/12">
                <input
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  placeholder=""
                  className="mb-2 form-control outline-none border px-3 py-1 bg-gray-200"
                />
              </td>
            </tr>
            <tr className="flex grid-cols-2">
              <td className="w-6/12">
                <label>ንብረት ተቀባይ ስም</label>
              </td>
              <td className="w-6/12">
                <input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder=""
                  className="mb-2 form-control outline-none border px-3 py-1 bg-gray-200"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="save pt-10 justify-center items-center">
          <button type="submit" className="w-20 m-10 bg-blue-200 text rounded-sm">
            አጠናቅ
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
