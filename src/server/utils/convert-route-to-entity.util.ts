const mapping: Record<string, string> = {
  'api-categories': 'api_category',
  'api-documentations': 'api_documentation',
  'api-listings': 'api_listing',
  'api-ratings': 'api_rating',
  'api-reviews': 'api_review',
  'api-usages': 'api_usage',
  'api-versions': 'api_version',
  companies: 'company',
  users: 'user',
  'user-subscriptions': 'user_subscription',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
