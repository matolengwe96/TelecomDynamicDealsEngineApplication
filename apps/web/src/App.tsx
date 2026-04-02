import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type LoginForm = {
  email: string;
  password: string;
};

type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roles: string[];
  };
};

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
const SESSION_STORAGE_KEY = 'dde.auth.session';

export function App() {
  const [result, setResult] = useState<string>('Not authenticated');
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      email: 'admin@dde.local',
      password: 'Admin@DDE1!',
    },
  });

  const subtitle = useMemo(
    () => `Gateway endpoint: ${API_URL}`,
    [],
  );

  useEffect(() => {
    const storedSession = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (!storedSession) {
      return;
    }

    try {
      setSession(JSON.parse(storedSession) as AuthSession);
      setResult('Recovered saved session from local storage.');
    } catch {
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, []);

  const persistSession = (nextSession: AuthSession | null) => {
    setSession(nextSession);

    if (!nextSession) {
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextSession));
  };

  const fetchProfile = async (accessToken: string) => {
    const response = await axios.get(`${API_URL}/api/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.data as AuthSession['user'];
  };

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/auth/login`, data);
      const payload = response.data.data as AuthSession;
      const profile = await fetchProfile(payload.accessToken);
      const nextSession: AuthSession = {
        ...payload,
        user: profile,
      };

      persistSession(nextSession);
      setResult(`Authenticated as ${profile.email} (${profile.roles.join(', ')})`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResult(`Request failed: ${error.response?.status ?? 'network error'}`);
      } else {
        setResult('Request failed: unknown error');
      }
    }
  };

  const handleRefreshProfile = async () => {
    if (!session) {
      return;
    }

    setIsFetchingProfile(true);
    try {
      const profile = await fetchProfile(session.accessToken);
      persistSession({ ...session, user: profile });
      setResult(`Profile refreshed for ${profile.email}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResult(`Profile refresh failed: ${error.response?.status ?? 'network error'}`);
      } else {
        setResult('Profile refresh failed: unknown error');
      }
    } finally {
      setIsFetchingProfile(false);
    }
  };

  const handleLogout = async () => {
    if (!session) {
      persistSession(null);
      setResult('Session cleared.');
      return;
    }

    setIsLoggingOut(true);
    try {
      await axios.post(
        `${API_URL}/api/v1/auth/logout`,
        { refreshToken: session.refreshToken },
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        },
      );
      setResult('Session revoked and cleared.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResult(`Logout returned ${error.response?.status ?? 'network error'}; local session cleared.`);
      } else {
        setResult('Logout encountered an unknown error; local session cleared.');
      }
    } finally {
      persistSession(null);
      setIsLoggingOut(false);
    }
  };

  const tokenPreview = session ? `${session.accessToken.slice(0, 24)}...` : 'No token issued';

  return (
    <div className="layout">
      <section className="hero">
        <h1>DDE Enterprise</h1>
        <p>Deals Data Engine Control Center</p>
        <small>{subtitle}</small>
        <div className="hero-meta">
          <span className={session ? 'pill success' : 'pill idle'}>
            {session ? 'Authenticated' : 'Anonymous'}
          </span>
          <span className="token-preview">{tokenPreview}</span>
        </div>
      </section>

      <section className="panel">
        <h2>Gateway Smoke Test</h2>
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            void handleSubmit(onSubmit)(event);
          }}
        >
          <label>
            Email
            <input
              type="email"
              placeholder="admin@dde.local"
              {...register('email', { required: true })}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              {...register('password', { required: true, minLength: 8 })}
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Login'}
          </button>
        </form>
        <p className="result">{result}</p>
        <div className="actions">
          <button type="button" onClick={() => void handleRefreshProfile()} disabled={!session || isFetchingProfile}>
            {isFetchingProfile ? 'Refreshing...' : 'Fetch /auth/me'}
          </button>
          <button type="button" className="secondary" onClick={() => void handleLogout()} disabled={isLoggingOut}>
            {isLoggingOut ? 'Clearing...' : 'Logout'}
          </button>
        </div>
      </section>

      <section className="panel panel-wide">
        <h2>Current Session</h2>
        {session ? (
          <div className="session-grid">
            <div className="session-card">
              <span className="label">User</span>
              <strong>{session.user.email}</strong>
              <p>
                {(session.user.firstName ?? 'System')} {(session.user.lastName ?? 'User')}
              </p>
            </div>
            <div className="session-card">
              <span className="label">Roles</span>
              <strong>{session.user.roles.join(', ')}</strong>
              <p>Protected gateway calls are now available.</p>
            </div>
            <div className="session-card">
              <span className="label">Refresh Token</span>
              <strong>{session.refreshToken.slice(0, 18)}...</strong>
              <p>Expires in {session.expiresIn} seconds from issuance.</p>
            </div>
          </div>
        ) : (
          <p className="result">No active session in browser storage.</p>
        )}
      </section>
    </div>
  );
}
