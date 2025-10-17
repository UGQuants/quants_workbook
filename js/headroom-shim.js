(function () {
  if (!window.Headroom) return; // Quarto loads Headroom before DOMContentLoaded
  const Original = window.Headroom;

  window.Headroom = function (el, opts) {
    const desired = {
      // <- your values
      offset: 120,
      tolerance: { up: 20, down: 10 },
    };
    const merged = Object.assign({}, opts, desired);
    const inst = new Original(el, merged);
    try {
      el._headroom = inst;
    } catch (_) {} // handy handle for later (toggle/freeze)
    return inst;
  };

  // Preserve static props & prototype
  Object.assign(window.Headroom, Original);
  window.Headroom.prototype = Original.prototype;
})();
