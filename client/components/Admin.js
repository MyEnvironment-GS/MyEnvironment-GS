import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AllProductsAdmin from './AllProductsAdmin';
import Users from './Users';

export default function Admin() {
  return (
    <div className="admin-container">
      <div>
        <h2>Users</h2>
        <div>
          <Users />
        </div>
      </div>
      <h2>Products</h2>
      <div>
        <AllProductsAdmin />
      </div>
    </div>
  );
}
