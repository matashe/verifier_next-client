'use server'

import { azureConfig } from '@/config/azure.config'

export const getAzureLoginUrl = async () => {
  const { authUrl, clientId, redirectUri } = azureConfig

  if (!clientId || !redirectUri) {
    throw new Error('Missing Azure configuration')
  }

  const requestUrl = new URL(authUrl)
  requestUrl.searchParams.append('client_id', clientId)
  requestUrl.searchParams.append('response_type', 'code')
  requestUrl.searchParams.append('redirect_uri', redirectUri)
  requestUrl.searchParams.append('response_mode', 'query')
  requestUrl.searchParams.append('scope', 'user.read offline_access openid')

  return requestUrl.toString()
}
