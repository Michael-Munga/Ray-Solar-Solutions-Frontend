import React, { useState } from 'react';
import { Plus, Edit, Trash2, Image, DollarSign, Package } from 'lucide-react';
import ProductForm from './ProductForm';

const ProductsManager = ({ products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDeleteProduct(id);
    }
  };

  const handleFormSubmit = (productData) => {
    if (editingProduct) {
      onUpdateProduct(editingProduct.id, productData);
    } else {
      onAddProduct(productData);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products Manager</h1>
          <p className="text-gray-600">Manage your solar products catalog</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all shadow-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-600 mr-1" />
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Power Output</p>
                    <p className="font-semibold">{product.powerOutput || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Warranty</p>
                    <p className="font-semibold">{product.warranty || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-600 mb-4">No Products Yet</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Start building your solar products catalog. Add solar panels, inverters, batteries, and accessories to begin earning from sales.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all shadow-lg text-lg font-semibold"
          >
            <Plus className="w-6 h-6 mr-3" />
            Add Your First Product
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsManager;