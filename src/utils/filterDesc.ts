export function filterDesc(desc: string) {
  if (!desc || desc.length < 20) {
    return desc;
  }

  return `${desc.substring(0, 20)}...`;
}