const mapping: Record<string, string> = {
  documents: 'document',
  organizations: 'organization',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
