// referrence at this link https://developer.mozilla.org/zh-CN/docs/Glossary/Base64

function b64Encode(str: string): string {
  if (!str) return '';
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str));
}

function b64Decode(str: string): string {
  if (!str) return '';
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str));
}

export { b64Encode, b64Decode };
