import React, { useState } from 'react';
import { X } from 'lucide-react'; 

function ProductModeration() {
  // Dummy Data for Products
  const [products, setProducts] = useState([
    { id: 1, name: 'Eco-Solar Panel 300W', provider: 'GreenTech Inc.', price: 250, status: 'Pending Moderation', category: 'Panels', date: '2025-07-22', description: 'Highly efficient solar panel, great for residential use.' },
    { id: 2, name: 'Smart Inverter Pro', provider: 'PowerUp Solutions', price: 1200, status: 'Approved', category: 'Inverters', date: '2025-07-21', description: 'Advanced inverter with smart grid capabilities.' },
    { id: 3, name: 'Compact Solar Battery 10kWh', provider: 'Bright Future Co.', price: 5000, status: 'Pending Moderation', category: 'Batteries', date: '2025-07-20', description: 'Long-lasting battery storage for off-grid systems.' },
    { id: 4, name: 'Mounting Kit Universal', provider: 'SolarMounts Ltd.', price: 150, status: 'Rejected', category: 'Mounting', date: '2025-07-19', description: 'Universal mounting kit, compatible with various panels.', rejectionReason: 'Incomplete product specifications.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [actionType, setActionType] = useState(null); // 'view', 'approve', 'reject', 'edit'
  const [rejectionReason, setRejectionReason] = useState('');
  const [editedProduct, setEditedProduct] = useState(null); // For edit form state

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setActionType('view');
    setIsModalOpen(true);
  };

  const handleApproveClick = (product) => {
    setSelectedProduct(product);
    setActionType('approve');
    setIsModalOpen(true);
  };

  const handleRejectClick = (product) => {
    setSelectedProduct(product);
    setActionType('reject');
    setIsModalOpen(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct({ ...product });
    setActionType('edit');
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const confirmAction = () => {
    // In a real app, send API request here
    if (!selectedProduct) return;

    let updatedProducts = [...products];
    let message = "";

    if (actionType === 'approve') {
      updatedProducts = updatedProducts.map(p => p.id === selectedProduct.id ? { ...p, status: 'Approved' } : p);
      message = `Product '${selectedProduct.name}' approved!`;
    } else if (actionType === 'reject') {
      if (!rejectionReason) {
        alert('Please provide a rejection reason.');
        return;
      }
      updatedProducts = updatedProducts.map(p => p.id === selectedProduct.id ? { ...p, status: 'Rejected', rejectionReason: rejectionReason } : p);
      message = `Product '${selectedProduct.name}' rejected.`;
    } else if (actionType === 'edit' && editedProduct) {
        updatedProducts = updatedProducts.map(p => p.id === editedProduct.id ? editedProduct : p);
        message = `Product '${editedProduct.name}' updated!`;
    } else {
        return; // Should not happen
    }

    setProducts(updatedProducts);
    setIsModalOpen(false);
    setRejectionReason('');
    setEditedProduct(null);
    alert(message + " (Simulated)");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Moderation</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.provider}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      product.status === 'Pending Moderation' ? 'bg-yellow-100 text-yellow-800' :
                      product.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleViewDetails(product)} className="text-blue-600 hover:text-blue-900 mr-2">View</button>
                    {product.status === 'Pending Moderation' && (
                      <>
                        <button onClick={() => handleApproveClick(product)} className="text-green-600 hover:text-green-900 mr-2">Approve</button>
                        <button onClick={() => handleRejectClick(product)} className="text-red-600 hover:text-red-900 mr-2">Reject</button>
                      </>
                    )}
                    <button onClick={() => handleEditClick(product)} className="text-purple-600 hover:text-purple-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {actionType === 'view' ? 'Product Details' :
                 actionType === 'approve' ? 'Confirm Approval' :
                 actionType === 'reject' ? 'Reject Product' :
                 actionType === 'edit' ? 'Edit Product' : 'Action'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {actionType === 'view' && (
                <>
                  <p><strong>Name:</strong> {selectedProduct.name}</p>
                  <p><strong>Provider:</strong> {selectedProduct.provider}</p>
                  <p><strong>Price:</strong> ${selectedProduct.price}</p>
                  <p><strong>Category:</strong> {selectedProduct.category}</p>
                  <p><strong>Status:</strong> {selectedProduct.status}</p>
                  <p><strong>Description:</strong> {selectedProduct.description}</p>
                  {selectedProduct.rejectionReason && <p className="text-red-600"><strong>Rejection Reason:</strong> {selectedProduct.rejectionReason}</p>}
                </>
              )}
              {actionType === 'approve' && (
                <p>Are you sure you want to approve **{selectedProduct.name}**?</p>
              )}
              {actionType === 'reject' && (
                <div>
                  <p>Please provide a reason for rejecting **{selectedProduct.name}**:</p>
                  <textarea
                    className="w-full mt-2 p-2 border rounded resize-y"
                    rows="3"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Enter reason here..."
                  />
                </div>
              )}
              {actionType === 'edit' && editedProduct && (
                <form>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" value={editedProduct.name} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" value={editedProduct.description} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="3"></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" value={editedProduct.price} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" value={editedProduct.category} onChange={handleEditChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                </form>
              )}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
              {actionType !== 'view' && (
                <button onClick={confirmAction} className={`px-4 py-2 rounded text-white ${
                  actionType === 'approve' ? 'bg-green-600 hover:bg-green-700' :
                  (actionType === 'reject' || actionType === 'edit') ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}>
                  {actionType === 'approve' ? 'Approve' :
                   actionType === 'reject' ? 'Confirm Reject' :
                   actionType === 'edit' ? 'Save Changes' : 'Action'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModeration;