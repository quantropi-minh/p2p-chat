import { Auth0Provider } from "@auth0/auth0-react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => (
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
    authorizationParams={{
      redirect_uri: window ? `${window.location.origin}/chat` : ""
    }}
  >
    {children}
  </Auth0Provider>
)