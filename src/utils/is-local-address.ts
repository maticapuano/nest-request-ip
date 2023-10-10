export const isLocalAddress = (ip: string): boolean => {
  const localAddressRegex = /^(127\.0\.0\.1|::1|fe80(:1)?::1(%.*)?)$/i;

  return localAddressRegex.test(ip);
};
