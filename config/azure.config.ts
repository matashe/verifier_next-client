export const azureConfig = {
  authUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  clientId: process.env.AZURE_CLIENT_ID,
  redirectUri: process.env.AZURE_REDIRECT_URI,
}
