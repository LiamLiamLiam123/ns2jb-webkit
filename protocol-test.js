(() => {
  const output = document.querySelector("#protocol-results");

  function report(name, passed, detail = "") {
    const item = document.createElement("p");
    item.textContent =
      `${name}: ${passed ? "PASS" : "FAIL"} ${detail}`;
    output.appendChild(item);
  }

  try {
    const buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);

    view.setUint32(0, 0x12345678, true);

    report(
      "Little-endian encoding",
      view.getUint32(0, true) === 0x12345678
    );

    const bytes = new Uint8Array(buffer);

    report(
      "Typed array conversion",
      bytes.length === 16 && bytes[0] === 0x78
    );

    const message = {
      type: "diagnostic",
      version: 1,
      message: "hello"
    };

    const decoded = JSON.parse(JSON.stringify(message));

    report(
      "JSON round trip",
      decoded.message === "hello"
    );

    const text = new TextEncoder().encode("NS2JB WebKit");

    report(
      "UTF-8 encoding",
      new TextDecoder().decode(text) === "NS2JB WebKit"
    );

  } catch (error) {
    report("Protocol tests", false, error.message);
  }
})();

