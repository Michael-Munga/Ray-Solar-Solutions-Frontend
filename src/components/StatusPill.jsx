const StatusPill = ({ status }) => {
  const colors = {
    'Approved': 'bg-green-100 text-green-800',
    'Pending Approval': 'bg-yellow-100 text-yellow-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Deactivated': 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${colors[status] || 'bg-gray-200 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusPill;
