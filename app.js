/* Random project idea generator: product type × TSIC business domain.
 * No build step, no dependencies — data comes from the two files loaded before this one. */
(function () {
  "use strict";

  /* --- section lookup: TSIC division number -> section letter --- */
  var SECTION_RANGES = [
    ["A", 1, 3], ["B", 5, 9], ["C", 10, 33], ["D", 35, 35], ["E", 36, 39], ["F", 41, 43],
    ["G", 45, 47], ["H", 49, 53], ["I", 55, 56], ["J", 58, 63], ["K", 64, 66], ["L", 68, 68],
    ["M", 69, 75], ["N", 77, 82], ["O", 84, 84], ["P", 85, 85], ["Q", 86, 88], ["R", 90, 93],
    ["S", 94, 96], ["T", 97, 98], ["U", 99, 99]
  ];
  function sectionOf(divCode) {
    var n = parseInt(divCode, 10);
    for (var i = 0; i < SECTION_RANGES.length; i++) {
      if (n >= SECTION_RANGES[i][1] && n <= SECTION_RANGES[i][2]) return SECTION_RANGES[i][0];
    }
    return null;
  }

  /* --- parse the domain rows once --- */
  var DOMAINS = [];
  (function parse() {
    var rows = (window.TSIC_DOMAINS_RAW || "").split("\n");
    var problems = 0;
    for (var i = 0; i < rows.length; i++) {
      var line = rows[i].trim();
      if (!line) continue;
      var bar = line.indexOf("|");
      var code = line.slice(0, bar);
      var name = line.slice(bar + 1).trim();
      var div = code.slice(0, 2);
      var sec = sectionOf(div);
      if (bar < 0 || !/^\d{4}$/.test(code) || !name || !window.TSIC_DIVISIONS[div] || !sec) {
        problems++;
        continue;
      }
      DOMAINS.push({ code: code, name: name, div: div, sec: sec });
    }
    if (problems) console.warn("[tsic] skipped " + problems + " malformed domain row(s)");
    if (DOMAINS.length < 1000) console.warn("[tsic] only " + DOMAINS.length + " domains parsed — expected 1000+");
  })();

  var PRODUCTS = window.PRODUCT_TYPES || [];
  var CATEGORIES = PRODUCTS.map(function (p) { return p.cat; })
    .filter(function (c, i, a) { return a.indexOf(c) === i; });
  var SECTIONS_PRESENT = DOMAINS.map(function (d) { return d.sec; })
    .filter(function (s, i, a) { return a.indexOf(s) === i; })
    .sort();

  /* --- state --- */
  var state = {
    product: null,
    domain: null,
    lock: { product: false, domain: false },
    cats: CATEGORIES.slice(),
    secs: SECTIONS_PRESENT.slice(),
    kw: "",
    history: [],
    saved: load("tsicRandomizer.saved", [])
  };

  var $ = function (id) { return document.getElementById(id); };
  var SAVE_LIMIT = 100;
  var HIST_LIMIT = 12;

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      var val = raw ? JSON.parse(raw) : null;
      return Array.isArray(val) ? val : fallback;
    } catch (e) { return fallback; }
  }
  function persist() {
    try { localStorage.setItem("tsicRandomizer.saved", JSON.stringify(state.saved)); } catch (e) { /* private mode */ }
  }

  /* --- pools --- */
  function productPool() {
    return PRODUCTS.filter(function (p) { return state.cats.indexOf(p.cat) >= 0; });
  }
  function domainPool() {
    var kw = state.kw.trim().toLowerCase();
    return DOMAINS.filter(function (d) {
      if (state.secs.indexOf(d.sec) < 0) return false;
      if (!kw) return true;
      var div = window.TSIC_DIVISIONS[d.div];
      return (d.name + " " + d.code + " " + div.en + " " + div.th).toLowerCase().indexOf(kw) >= 0;
    });
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  /* Re-pick when possible so a roll visibly changes. */
  function pickDifferent(arr, current, sameFn) {
    if (arr.length > 1 && current) {
      for (var i = 0; i < 12; i++) {
        var c = pick(arr);
        if (!sameFn(c, current)) return c;
      }
    }
    return pick(arr);
  }

  /* --- rendering --- */
  function effortDots(n) {
    return "●".repeat(n) + "○".repeat(5 - n);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tsicLookupUrl(code) {
    return "https://www.google.com/search?q=" + encodeURIComponent("TSIC " + code + " รหัสธุรกิจ ประเภทกิจการ");
  }

  function renderProduct() {
    var p = state.product;
    var slot = $("slotProduct");
    if (!p) return;
    slot.innerHTML =
      '<div class="slot-emoji">' + p.emoji + "</div>" +
      '<div class="slot-main">' + esc(p.th) + "</div>" +
      '<div class="slot-sub">' + esc(p.en) + "</div>";
    $("detailProduct").innerHTML =
      "<dt>คืออะไร</dt><dd>" + esc(p.desc) + "</dd>" +
      "<dt>สแตกที่มักใช้</dt><dd>" + esc(p.stack) + "</dd>" +
      "<dt>หมวด</dt><dd>" + esc(p.cat) + "</dd>" +
      '<dt>ความยาก</dt><dd class="dots">' + effortDots(p.effort) + "</dd>";
  }

  function renderDomain() {
    var d = state.domain;
    var slot = $("slotDomain");
    if (!d) return;
    var div = window.TSIC_DIVISIONS[d.div];
    var sec = window.TSIC_SECTIONS[d.sec];
    slot.innerHTML =
      '<div class="slot-emoji">🏭</div>' +
      '<div class="slot-main">' + esc(d.name) + "</div>" +
      '<div class="slot-sub"><span class="code">TSIC ' + d.code + "</span></div>";
    $("detailDomain").innerHTML =
      "<dt>หมู่ย่อย</dt><dd>" + esc(div.th) + ' <span class="en">' + esc(div.en) + "</span></dd>" +
      "<dt>หมวด " + d.sec + "</dt><dd>" + esc(sec.th) + ' <span class="en">' + esc(sec.en) + "</span></dd>" +
      "<dt>ตรวจรหัส</dt><dd><a href=\"" + tsicLookupUrl(d.code) + '" target="_blank" rel="noopener">ค้นหา TSIC ' +
        d.code + " ↗</a></dd>";
  }

  function briefText() {
    if (!state.product || !state.domain) return "";
    return "สร้าง " + state.product.th + " (" + state.product.en + ") สำหรับ: " +
      state.domain.name + " — TSIC " + state.domain.code;
  }
  function renderBrief() {
    var el = $("brief");
    if (!state.product || !state.domain) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = "สร้าง <b>" + esc(state.product.th) + "</b> สำหรับ <b>" + esc(state.domain.name) +
      '</b> <span class="code">TSIC ' + state.domain.code + "</span>";
    ["starBtn", "copyBtn", "shareBtn"].forEach(function (id) { $(id).disabled = false; });
  }

  function renderPool() {
    var pp = productPool().length, dp = domainPool().length;
    $("poolInfo").textContent = "— กำลังสุ่มจาก " + pp + " ประเภท × " + dp + " โดเมน";
    var msgs = [];
    if (!pp) msgs.push("ยังไม่ได้เลือกหมวดของสิ่งที่จะสร้าง");
    if (!dp) msgs.push(state.kw ? 'ไม่พบโดเมนที่ตรงกับคำค้น "' + state.kw + '"' : "ยังไม่ได้เลือกหมวด TSIC");
    var w = $("warn");
    w.hidden = !msgs.length;
    w.textContent = msgs.length ? "⚠️ " + msgs.join(" · ") + " — ปรับตัวกรองก่อนสุ่ม" : "";
    return pp && dp;
  }

  function renderList(id, items, emptyText, withDelete) {
    var ul = $(id);
    if (!items.length) { ul.innerHTML = '<li class="empty">' + emptyText + "</li>"; return; }
    ul.innerHTML = items.map(function (it, i) {
      return "<li>" + '<span class="txt">' + it.emoji + " <b>" + esc(it.p) + "</b> → " + esc(it.d) +
        ' <span class="code">' + it.code + "</span></span>" +
        (withDelete ? '<button class="del" data-del="' + i + '" title="ลบ">✕</button>' : "") + "</li>";
    }).join("");
  }
  function renderSaved() {
    renderList("savedList", state.saved, "ยังไม่มีไอเดียที่เก็บไว้", true);
    $("savedCount").textContent = state.saved.length;
    $("clearSaved").hidden = !state.saved.length;
  }
  function renderHistory() {
    renderList("histList", state.history, "ยังไม่มีประวัติ", false);
  }

  /* --- rolling --- */
  function currentEntry() {
    return {
      emoji: state.product.emoji,
      p: state.product.th,
      d: state.domain.name,
      code: state.domain.code
    };
  }

  function roll(which) {
    if (!renderPool()) return;
    var pp = productPool(), dp = domainPool();
    var doProduct = which !== "domain" && !state.lock.product;
    var doDomain = which !== "product" && !state.lock.domain;
    if (which === "product" && state.lock.product) doProduct = true;   // explicit re-roll overrides lock
    if (which === "domain" && state.lock.domain) doDomain = true;

    if (doProduct) $("slotProduct").classList.add("spin");
    if (doDomain) $("slotDomain").classList.add("spin");

    var ticks = 0;
    var timer = setInterval(function () {
      ticks++;
      if (doProduct) { state.product = pick(pp); renderProduct(); }
      if (doDomain) { state.domain = pick(dp); renderDomain(); }
      if (ticks < 7) return;
      clearInterval(timer);
      if (doProduct) {
        state.product = pickDifferent(pp, state.product, function (a, b) { return a.en === b.en; });
        renderProduct();
      }
      if (doDomain) {
        state.domain = pickDifferent(dp, state.domain, function (a, b) { return a.code === b.code && a.name === b.name; });
        renderDomain();
      }
      $("slotProduct").classList.remove("spin");
      $("slotDomain").classList.remove("spin");
      renderBrief();
      state.history.unshift(currentEntry());
      state.history = state.history.slice(0, HIST_LIMIT);
      renderHistory();
    }, 55);
  }

  /* --- share links: ?p=<product en>&c=<code>&d=<domain name> --- */
  function shareUrl() {
    var u = new URL(location.href.split("?")[0].split("#")[0]);
    u.searchParams.set("p", state.product.en);
    u.searchParams.set("c", state.domain.code);
    u.searchParams.set("d", state.domain.name);
    return u.toString();
  }
  function restoreFromUrl() {
    var q = new URLSearchParams(location.search);
    var pEn = q.get("p"), code = q.get("c"), name = q.get("d");
    if (!pEn && !code) return false;
    var p = PRODUCTS.filter(function (x) { return x.en === pEn; })[0];
    var d = DOMAINS.filter(function (x) {
      return x.code === code && (!name || x.name === name);
    })[0] || DOMAINS.filter(function (x) { return x.code === code; })[0];
    if (!p || !d) return false;
    state.product = p;
    state.domain = d;
    renderProduct();
    renderDomain();
    renderBrief();
    return true;
  }

  function flash(btn, text) {
    var old = btn.textContent;
    btn.textContent = text;
    setTimeout(function () { btn.textContent = old; }, 1400);
  }
  function copyText(text, btn) {
    var done = function () { flash(btn, "✅ คัดลอกแล้ว"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { flash(btn, "❌ คัดลอกไม่สำเร็จ"); }
      document.body.removeChild(ta);
    }
  }

  /* --- filter UI --- */
  function buildFilters() {
    $("catFilters").innerHTML = CATEGORIES.map(function (c) {
      var n = PRODUCTS.filter(function (p) { return p.cat === c; }).length;
      return '<label class="chip"><input type="checkbox" data-cat="' + esc(c) + '" checked> ' +
        esc(c) + " <span class=\"en\">" + n + "</span></label>";
    }).join("");
    $("secFilters").innerHTML = SECTIONS_PRESENT.map(function (s) {
      var n = DOMAINS.filter(function (d) { return d.sec === s; }).length;
      var sec = window.TSIC_SECTIONS[s];
      return '<label class="chip" title="' + esc(sec.th + " · " + sec.en) + '">' +
        '<input type="checkbox" data-sec="' + s + '" checked> ' + s +
        ' <span class="en">' + n + "</span></label>";
    }).join("");
  }
  function readFilters() {
    state.cats = [].slice.call(document.querySelectorAll("[data-cat]"))
      .filter(function (i) { return i.checked; }).map(function (i) { return i.dataset.cat; });
    state.secs = [].slice.call(document.querySelectorAll("[data-sec]"))
      .filter(function (i) { return i.checked; }).map(function (i) { return i.dataset.sec; });
    renderPool();
  }

  /* --- wiring --- */
  function init() {
    $("totalCount").textContent = DOMAINS.length.toLocaleString("en-US");
    buildFilters();
    renderPool();
    renderSaved();
    renderHistory();

    $("rollBtn").addEventListener("click", function () { roll("both"); });
    document.querySelectorAll("[data-reroll]").forEach(function (b) {
      b.addEventListener("click", function () { roll(b.dataset.reroll); });
    });
    document.querySelectorAll("[data-lock]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.lock;
        state.lock[k] = !state.lock[k];
        b.setAttribute("aria-pressed", String(state.lock[k]));
        b.textContent = state.lock[k] ? "🔒" : "🔓";
      });
    });

    $("starBtn").addEventListener("click", function () {
      if (!state.product || !state.domain) return;
      var e = currentEntry();
      var dup = state.saved.some(function (s) { return s.p === e.p && s.d === e.d && s.code === e.code; });
      if (dup) { flash($("starBtn"), "⭐ เก็บไว้แล้ว"); return; }
      state.saved.unshift(e);
      state.saved = state.saved.slice(0, SAVE_LIMIT);
      persist();
      renderSaved();
      flash($("starBtn"), "⭐ เก็บแล้ว");
    });
    $("savedList").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-del]");
      if (!b) return;
      state.saved.splice(Number(b.dataset.del), 1);
      persist();
      renderSaved();
    });
    $("clearSaved").addEventListener("click", function () {
      state.saved = [];
      persist();
      renderSaved();
    });
    $("copyBtn").addEventListener("click", function () { copyText(briefText(), $("copyBtn")); });
    $("shareBtn").addEventListener("click", function () { copyText(shareUrl(), $("shareBtn")); });

    document.addEventListener("change", function (ev) {
      if (ev.target.matches("[data-cat], [data-sec]")) readFilters();
    });
    document.querySelectorAll("[data-all], [data-none]").forEach(function (b) {
      b.addEventListener("click", function () {
        var group = b.dataset.all || b.dataset.none;
        var on = !!b.dataset.all;
        document.querySelectorAll("[data-" + group + "]").forEach(function (i) { i.checked = on; });
        readFilters();
      });
    });
    $("kw").addEventListener("input", function () {
      state.kw = $("kw").value;
      renderPool();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.target.matches("input, textarea, summary, button")) return;
      if (ev.code === "Space") { ev.preventDefault(); roll("both"); }
      if (ev.key === "1") roll("product");
      if (ev.key === "2") roll("domain");
    });

    restoreFromUrl();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
