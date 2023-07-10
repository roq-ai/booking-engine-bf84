const mapping: Record<string, string> = {
  reservations: 'reservation',
  restaurants: 'restaurant',
  'time-slots': 'time_slot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
