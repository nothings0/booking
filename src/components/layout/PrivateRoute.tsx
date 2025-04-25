import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/contexts';

export default function PrivateRoute() {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!user) {
    const returnUrl = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?returnUrl=${returnUrl}`} replace />;
  }

  return <Outlet />;
}
