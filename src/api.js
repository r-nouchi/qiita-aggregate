const axios = require('axios');
const tunnel = require('tunnel');

const httpsProxy = process.env.HTTPS_PROXY;
const options = {
  baseURL: 'https://qiita.com:443',
};

const parseProxyUrl = proxyUrl => {
  const host = proxyUrl.substring(proxyUrl.indexOf('://') + 3, proxyUrl.lastIndexOf(':'));
  const port = Number(proxyUrl.substr(proxyUrl.lastIndexOf(':') + 1));
  return { host, port };
};

if(httpsProxy) {
  const { host, port } = parseProxyUrl(httpsProxy);
  const tunnelAg = tunnel.httpsOverHttp({
    proxy: {
      host: host,
      port: port
    }
  });
  options.httpsAgent = tunnelAg;
  options.proxy = false;
}

const $http  = axios.create(options);

const ajax = async ({ type = 'get', path = '', body = null }) => {
  return $http[type](path, body);
};

const get = async (path = '') => {
  return ajax({ path });
};

const api = {};
api.getItemsByUserId = async (userId) => {
  return get(`/api/v2/users/${userId}/items`);
};

exports.api = api;
