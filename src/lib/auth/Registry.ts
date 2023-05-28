const PUBLIC_OIDC_URL="http://localhost:8080"
const PUBLIC_OIDC_CLIENT_ID="Ecommerce"
const PUBLIC_OIDC_REALM="fullChatGPT"

import { Auth } from './Auth';

export class Registry {
	public static auth: Auth = new Auth({
		url: PUBLIC_OIDC_URL,
		realm: PUBLIC_OIDC_REALM,
		clientId: PUBLIC_OIDC_CLIENT_ID
	});
}
