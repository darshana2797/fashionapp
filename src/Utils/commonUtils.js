export async function request(url, opts) {
  var reqOpts = {
    method: opts.method,
    headers: {}
  };

  if (opts.method === "POST" || opts.method === "PUT") {
    reqOpts.headers["Accept"] = "application/json";
    reqOpts.headers["Content-Type"] = "application/json";
  }
  if (opts.method === "FILEPOST") {
    reqOpts.method = "POST";
    reqOpts.body = opts.formData;
  }

  if (opts.body) {
    reqOpts.body = JSON.stringify(opts.body);
  }

  const response = await fetch(url, reqOpts);
  const body = await response.json();

  if (response.status < 200 || response.status >= 300) {
    if (body.message !== null) throw body.message;
  }

  return body;
}
