export default function loadBalancer(chinaDownload, USDownload) {
  const value = Promise.race([chinaDownload, USDownload]);
  return value;
}
