import  { useState } from 'react';

const Model19formF = () => {
    const [formData, setFormData] = useState({
        deliveryCampanyName: '',
        invoiceNo: '',
        invoiceDate: '',
        total: 0,
        customerName: '',
        customerId: '',
        deliveryAddress: '',
        deliverysName: '',
        deliveryId: '',
        detials: []
    });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const handleSaveInvoice = (e) => {
        e.preventDefault();
        console.log(formData); // Implement save functionality
    };

    const handleAddProduct = () => {
        const newProduct = { invoiceNo: '', productName: '', productCode: '', productModel: '', qty: 1, salesPrice: 0, total: 0 };
        setFormData({
            ...formData,
            detials: [...formData.detials, newProduct]
        });
    };

    const handleRemoveProduct = (index) => {
        const updatedDetials = formData.detials.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            detials: updatedDetials
        });
    };

    const handleProductChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDetials = [...formData.detials];
        updatedDetials[index] = {
            ...updatedDetials[index],
            [name]: value
        };
        setFormData({
            ...formData,
            detials: updatedDetials
        });
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="all">
            <div className="flex justify-end bg-white w-full">
                <button className="print bg-blue m-10" onClick={handlePrint}>print</button>
                <button className="btn-dialog-close flex justify-center items-center" tabIndex="-1">
                    <span className="bg-white">close</span>
                </button>
            </div>
            <form className="container bg-white w-full ml-10" onSubmit={handleSaveInvoice}>
                {/* Form content */}
                {/* Product details */}
                {formData.detials.map((product, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="invoiceNo"
                            value={product.invoiceNo}
                            onChange={(e) => handleProductChange(index, e)}
                        />
                        {/* Add other input fields for product details */}
                        <button type="button" onClick={() => handleRemoveProduct(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddProduct}>Add Product</button>
                <button type="submit">Save Invoice</button>
            </form>
        </div>
    );
};

export default Model19formF;
