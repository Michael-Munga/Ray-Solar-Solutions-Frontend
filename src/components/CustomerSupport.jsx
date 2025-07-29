import React, { useState } from 'react';
import { MessageSquare, User, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const CustomerSupport = ({ tickets, setTickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [response, setResponse] = useState('');

  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const statusColors = {
    open: 'bg-blue-100 text-blue-800 border-blue-200',
    resolved: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  const handleResponseSubmit = (e) => {
    e.preventDefault();
    if (!response.trim()) return;

    // Add response to ticket
    const updatedTickets = tickets.map(ticket => 
      ticket.id === selectedTicket.id 
        ? { 
            ...ticket, 
            responses: [...(ticket.responses || []), {
              id: Date.now(),
              message: response,
              timestamp: new Date().toISOString(),
              isStaff: true
            }],
            status: 'pending'
          }
        : ticket
    );
    
    setTickets(updatedTickets);
    setResponse('');
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id));
  };

  const updateTicketStatus = (ticketId, newStatus) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket(updatedTickets.find(t => t.id === ticketId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Customer Support</h1>
          <p className="text-gray-600">Manage customer inquiries and support tickets</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow border border-gray-200">
            <span className="text-sm text-gray-600">Open Tickets: </span>
            <span className="font-bold text-blue-600">{tickets.filter(t => t.status === 'open').length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Support Tickets</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {tickets.length > 0 ? tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedTicket?.id === ticket.id ? 'bg-green-50 border-r-4 border-green-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 text-sm">{ticket.subject}</h4>
                    <div className="flex space-x-1">
                      <span className={`px-2 py-1 text-xs rounded-full border ${priorityColors[ticket.priority]}`}>
                        {ticket.priority}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full border ${statusColors[ticket.status]}`}>
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{ticket.customer}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {ticket.date}
                  </div>
                </div>
              )) : (
                <div className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-600 mb-2">No Support Tickets</h4>
                  <p className="text-sm text-gray-500">Customer inquiries will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ticket Details */}
        <div className="lg:col-span-2">
          {selectedTicket ? (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{selectedTicket.subject}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateTicketStatus(selectedTicket.id, 'pending')}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-sm hover:bg-yellow-200 transition-colors"
                    >
                      Mark Pending
                    </button>
                    <button
                      onClick={() => updateTicketStatus(selectedTicket.id, 'resolved')}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm hover:bg-green-200 transition-colors flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Resolve
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedTicket.customer}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedTicket.date}
                  </div>
                  <span className={`px-2 py-1 rounded-full border text-xs ${priorityColors[selectedTicket.priority]}`}>
                    {selectedTicket.priority} priority
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
                {/* Original Message */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{selectedTicket.customer}</p>
                      <p className="text-xs text-gray-500">{selectedTicket.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {selectedTicket.subject === 'Installation Query' 
                      ? 'Hi, I need help with the installation process for the solar panels I ordered. Can you provide detailed instructions or arrange a technician visit?'
                      : 'I would like to know more about the technical specifications of your solar products. Specifically, I need information about efficiency ratings and compatibility.'
                    }
                  </p>
                </div>

                {/* Responses */}
                {selectedTicket.responses?.map((response) => (
                  <div key={response.id} className={`rounded-lg p-4 ${response.isStaff ? 'bg-green-50 ml-8' : 'bg-gray-50'}`}>
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${response.isStaff ? 'bg-green-500' : 'bg-blue-500'}`}>
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {response.isStaff ? 'Support Team' : selectedTicket.customer}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(response.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">{response.message}</p>
                  </div>
                ))}
              </div>

              {/* Response Form */}
              <div className="p-6 border-t border-gray-200">
                <form onSubmit={handleResponseSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Response
                    </label>
                    <textarea
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Type your response to the customer..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg"
                    >
                      Send Response
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a Ticket</h3>
              <p className="text-gray-500">Choose a support ticket from the list to view details and respond</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Open Tickets</p>
              <p className="text-2xl font-bold text-blue-600">{tickets.filter(t => t.status === 'open').length}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{tickets.filter(t => t.status === 'pending').length}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Resolved</p>
              <p className="text-2xl font-bold text-green-600">{tickets.filter(t => t.status === 'resolved').length}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Response Rate</p>
              <p className="text-2xl font-bold text-purple-600">100%</p>
            </div>
            <MessageSquare className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;