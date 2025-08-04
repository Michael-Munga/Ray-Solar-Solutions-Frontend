from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request
from models import db, Transaction

class TransactionResource(Resource):
    @jwt_required()
    def get(self):
        """Get all transactions for the current user"""
        user_id = get_jwt_identity()
        transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.created_at.desc()).all()
        return [transaction.to_dict() for transaction in transactions], 200

class TransactionDetailResource(Resource):
    @jwt_required()
    def get(self, transaction_id):
        """Get a specific transaction for the current user"""
        user_id = get_jwt_identity()
        transaction = Transaction.query.filter_by(id=transaction_id, user_id=user_id).first_or_404()
        return transaction.to_dict(), 200

class TransactionCallbackResource(Resource):
    def post(self):
        """Handle M-Pesa transaction callback"""
        data = request.get_json()
        # Process callback data here
        # For example, update transaction status based on callback
        transaction_id = data.get('transaction_id')
        status = data.get('status')
        if transaction_id and status:
            transaction = Transaction.query.get(transaction_id)
            if transaction:
                transaction.status = status
                db.session.commit()
                return {"message": "Transaction updated"}, 200
        return {"message": "Invalid callback data"}, 400
