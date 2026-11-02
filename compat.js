(() => {
  const tests = {
    typedArrays: typeof Uint8Array !== "undefined",
    arrayBuffer: typeof ArrayBuffer !== "undefined",
    dataView: typeof DataView !== "undefined",
    bigInt: typeof BigInt !== "undefined",
    textEncoder: typeof TextEncoder !== "undefined",
    textDecoder: typeof TextDecoder !== "undefined",
    webAssembly: typeof WebAssembly !== "undefined",
    webSocket: typeof WebSocket !== "undefined",
    fetch: typeof fetch !== "undefined",
    indexedDB: typeof indexedDB !== "undefined",
    crypto: !!globalThis.crypto?.subtle
  };

  const output = document.querySelector("#compat-results");

  for (const [name, available] of Object.entries(tests)) {
    const item = document.createElement("p");
    item.textContent = `${name}: ${available ? "AVAILABLE" : "UNAVAILABLE"}`;
    output.appendChild(item);
  }
})();

