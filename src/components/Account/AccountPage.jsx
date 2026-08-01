import { useQuery } from 'convex/react';
import { useAuthActions } from '@convex-dev/auth/react';
import { api } from '../../../convex/_generated/api';
import { SkeletonBox, SkeletonText } from '../common/Skeleton';
import './AccountPage.css';

function AccountPage({ onLoggedOut }) {
  const viewer = useQuery(api.users.viewer);
  const { signOut } = useAuthActions();

  const handleLogout = async () => {
    await signOut();
    onLoggedOut?.();
  };

  return (
    <section className="section account-page-section">
      <div className="container account-page-container">
        <div className="account-page">
          {viewer === undefined ? (
            <>
              <SkeletonBox style={{ width: 72, height: 72, borderRadius: '999px' }} />
              <SkeletonText width="60%" />
              <SkeletonText width="40%" />
            </>
          ) : (
            <>
              <span className="account-page__avatar" aria-hidden="true">
                {(viewer?.name || viewer?.email || '?').charAt(0).toUpperCase()}
              </span>
              <h1 className="account-page__name">{viewer?.name || 'Kulan member'}</h1>
              <p className="account-page__email">{viewer?.email}</p>
              <button className="account-page__logout" type="button" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
