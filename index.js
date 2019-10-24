module.exports = Franz => class Instagram extends Franz {
  overrideUserAgent() {
    return 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G935T Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36';
  }
}