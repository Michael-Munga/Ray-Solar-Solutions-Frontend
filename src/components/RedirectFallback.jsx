import { useLocation, Navigate } from 'react-router-dom';

const RedirectFallback = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.startsWith('/admin')) {
    return <Navigate to="/admin/dashboard" replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default RedirectFallback;
