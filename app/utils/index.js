const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function caseInsensitiveMatch(string1, string2) {
  var regex = new RegExp('^' + string1 + '$', 'i');
  var bool = regex.test(string2);
  return bool;
}

export function capitalize(string) {
  string = string[0].toUpperCase() + string.substring(1, string.length);
  return string;
}

export function handleError(response) {
  if (!response.ok && response.status > 300) {
    throw response;
  }
  return response;
}

export function parseJson(response) {
  return response.json();
}

export function setTitle(title) {
  document.title = `Privatir | ${title}`
}

function includeMethod(method) {
  return method !== '' && (method === 'post' || method === 'delete' || method === 'put');
}

export function buildHeaders(method = '', credentials = false, body = null) {
  let base = { headers: defaultHeaders }

  if (includeMethod(method)) {
    base = {
      ...base,
      method: method
    }
  }
  if (credentials) {
    base = {
      ...base,
      credentials: 'include'
    }
  }
  if (body !== null) {
    base = {
      ...base,
      body: JSON.stringify(body)
    }
  }
  return base;
}

export function fmtSize(data) {
  let fmt;
  let size = parseInt(data);
  if (!size) {
    fmt = '0 B';
  } else if ((size / 1000).toFixed(1) < 1) {
    fmt = (size).toString() + ' B';
  } else if ((size / 1000000).toFixed(1) < 1) {
    fmt = ((size / 1000).toFixed(1)).toString() + ' KB';
  } else if ((size / 1000000000).toFixed(1) < 1) {
    fmt = ((size / 1000000).toFixed(1)).toString() + ' MB';
  } else if ((size / 1000000000000).toFixed(1) < 1) {
    fmt = ((size / 1000000000).toFixed(1)).toString() + ' GB';
  } else {
    fmt = ((size / 1000000000000).toFixed(1)).toString() + ' TB';
  }
  return fmt;
}
