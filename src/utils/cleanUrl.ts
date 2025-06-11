export function cleanUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const params = parsed.searchParams;
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
      'utm_content', 'gclid', 'fbclid', 'mc_cid', 'mc_eid',
      'trk', 'ref'
    ];
    trackingParams.forEach((p) => params.delete(p));
    parsed.search = params.toString();
    return parsed.toString();
  } catch (err) {
    return url;
  }
}
