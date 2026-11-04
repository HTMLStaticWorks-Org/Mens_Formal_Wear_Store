/**
 * VESTARO – PREMIUM MEN'S FORMAL WEAR STORE
 * Main Application Controller (ES6 + jQuery + GSAP + Swiper + AOS + Lucide)
 */

(function ($) {
  "use strict";

  const STORAGE_KEYS = {
    BAG: "vestaro_shopping_bag_v1",
    WISHLIST: "vestaro_wishlist_v1"
  };

  // Fallback studio SVG data URI so no product image ever appears broken
  window.getVestaroFallbackImg = function (label) {
    const safeText = (label || "VESTARO SARTORIAL").replace(/["'<>]/g, "");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
      <rect width="600" height="750" fill="#F5F1E9"/>
      <rect x="30" y="30" width="540" height="690" fill="none" stroke="#B99A65" stroke-width="2"/>
      <path d="M220,180 L300,320 L380,180 L450,230 L420,560 L180,560 L150,230 Z" fill="#25272B" stroke="#B99A65" stroke-width="2"/>
      <path d="M265,180 L300,285 L335,180" fill="#FFFFFF"/>
      <text x="300" y="635" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#111214" letter-spacing="3">${safeText.slice(0, 28)}</text>
      <text x="300" y="668" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#B99A65" letter-spacing="4">VESTARO TAILORING</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  };

  window.formatINR = function (amount) {
    return "₹" + Number(amount || 0).toLocaleString("en-IN");
  };

  // State Management
  let shoppingBag = [];
  let wishlist = [];
  let cardSelections = {}; // { productId: { size: 'M', color: 'White' } }

  function loadStorage() {
    try {
      const savedBag = localStorage.getItem(STORAGE_KEYS.BAG);
      shoppingBag = savedBag ? JSON.parse(savedBag) : [];
    } catch (e) {
      shoppingBag = [];
    }
    try {
      const savedWish = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      wishlist = savedWish ? JSON.parse(savedWish) : [];
    } catch (e) {
      wishlist = [];
    }
  }

  function saveBag() {
    try {
      localStorage.setItem(STORAGE_KEYS.BAG, JSON.stringify(shoppingBag));
    } catch (e) {}
    updateBagUI();
  }

  function saveWishlist() {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {}
  }

  // Toast Notification
  window.showVestaroToast = function (message) {
    let $toast = $("#vestaroToast");
    if (!$toast.length) {
      $("body").append(`
        <div id="vestaroToast" class="vestaro-toast" role="status" aria-live="polite">
          <i data-lucide="check-circle-2" style="color:#B99A65;width:20px;height:20px;"></i>
          <span id="vestaroToastText" style="font-size:0.86rem;font-weight:500;"></span>
        </div>
      `);
      $toast = $("#vestaroToast");
      if (window.lucide) window.lucide.createIcons();
    }
    $("#vestaroToastText").text(message);
    $toast.addClass("show");
    clearTimeout(window._vestaroToastTimer);
    window._vestaroToastTimer = setTimeout(() => {
      $toast.removeClass("show");
    }, 3200);
  };

  // WhatsApp URL builder
  window.buildWhatsAppURL = function (customMessage) {
    const phone = (window.VESTARO_CONFIG && window.VESTARO_CONFIG.whatsappNumber) || "919820000000";
    const text = encodeURIComponent(customMessage || "Hello VESTARO Concierge, I would like to enquire about your formalwear collection.");
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Render Reusable Product Card
  window.renderProductCard = function (product) {
    const sel = cardSelections[product.id] || {
      size: product.sizes[1] || product.sizes[0] || "M",
      color: (product.colors[0] && product.colors[0].name) || "Classic"
    };
    cardSelections[product.id] = sel;

    const isWished = wishlist.includes(product.id);

    const badgesHtml = `
      <div class="product-badges">
        ${product.isNew ? '<span class="badge-vestaro badge-new">New Arrival</span>' : ""}
        ${product.discountPercent ? `<span class="badge-vestaro badge-sale">Save ${product.discountPercent}%</span>` : ""}
      </div>
    `;

    const swatchesHtml = (product.colors || [])
      .map(
        (c) => `
        <button type="button"
          class="color-swatch-dot ${sel.color === c.name ? "active" : ""}"
          style="background-color:${c.hex};"
          title="${c.name}"
          aria-label="Select color ${c.name}"
          data-action="select-card-color"
          data-product-id="${product.id}"
          data-color="${c.name}">
        </button>`
      )
      .join("");

    const sizesHtml = (product.sizes || [])
      .map(
        (s) => `
        <button type="button"
          class="size-pill-mini ${sel.size === s ? "active" : ""}"
          data-action="select-card-size"
          data-product-id="${product.id}"
          data-size="${s}">
          ${s}
        </button>`
      )
      .join("");

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-img-stage">
          ${badgesHtml}
          <button type="button"
            class="wishlist-btn ${isWished ? "active" : ""}"
            aria-label="Add ${product.name} to Wishlist"
            data-action="toggle-wishlist"
            data-product-id="${product.id}">
            <i data-lucide="heart" style="width:16px;height:16px;"></i>
          </button>
          <a href="#quickview" data-action="quick-view" data-product-id="${product.id}" class="d-flex align-items-center justify-content-center w-100 h-100">
            <img src="${product.image}"
                 alt="${product.name}"
                 loading="lazy"
                 onerror="this.onerror=null;this.src=window.getVestaroFallbackImg('${product.name.replace(/'/g, "")}');" />
          </a>
        </div>
        <div class="product-card-body">
          <span class="product-brand-meta">${product.brand} • ${product.fit}</span>
          <h3 class="product-card-title">
            <a href="#quickview" data-action="quick-view" data-product-id="${product.id}">${product.name}</a>
          </h3>
          <p class="product-short-desc">${product.shortDesc}</p>
          <div class="product-price-wrap">
            <span class="price-current">${window.formatINR(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${window.formatINR(product.originalPrice)}</span>` : ""}
            ${product.discountPercent ? `<span class="price-discount">-${product.discountPercent}%</span>` : ""}
          </div>
          <div class="product-swatches" aria-label="Available Colors">
            ${swatchesHtml}
          </div>
          <div class="product-sizes-pills" aria-label="Available Sizes">
            ${sizesHtml}
          </div>
          <div class="product-card-actions">
            <button type="button" class="btn-card-action btn-card-quickview" data-action="quick-view" data-product-id="${product.id}">
              <i data-lucide="eye" style="width:14px;height:14px;"></i> Quick View
            </button>
            <button type="button" class="btn-card-action btn-card-addbag" data-action="add-to-bag" data-product-id="${product.id}">
              <i data-lucide="shopping-bag" style="width:14px;height:14px;"></i> Add to Bag
            </button>
          </div>
        </div>
      </article>
    `;
  };

  // Shopping Bag Operations
  window.addToShoppingBag = function (productId, size, color, qty) {
    const product = (window.VESTARO_PRODUCTS || []).find((p) => p.id === productId);
    if (!product) return;

    const chosenSize = size || (cardSelections[productId] && cardSelections[productId].size) || product.sizes[0] || "M";
    const chosenColor = color || (cardSelections[productId] && cardSelections[productId].color) || (product.colors[0] && product.colors[0].name) || "Classic";
    const quantity = Math.max(1, parseInt(qty || 1, 10));

    const existingIndex = shoppingBag.findIndex(
      (item) => item.productId === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      shoppingBag[existingIndex].qty += quantity;
    } else {
      shoppingBag.push({
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        size: chosenSize,
        availableSizes: product.sizes,
        color: chosenColor,
        qty: quantity
      });
    }

    saveBag();
    window.showVestaroToast(`Added "${product.name}" (${chosenSize}, ${chosenColor}) to Shopping Bag.`);
  };

  function updateBagUI() {
    const totalCount = shoppingBag.reduce((acc, item) => acc + item.qty, 0);
    $(".js-bag-count").text(totalCount);

    const $container = $("#bagItemsContainer");
    const $subtotal = $("#bagSubtotalAmount");
    const $total = $("#bagTotalAmount");

    if (!$container.length) return;

    if (shoppingBag.length === 0) {
      $container.html(`
        <div class="text-center py-5">
          <i data-lucide="shopping-bag" style="width:48px;height:48px;color:#B99A65;margin:0 auto 1rem auto;"></i>
          <h4 class="serif-heading mb-2">Your Shopping Bag is Empty</h4>
          <p class="text-muted small mb-4">Explore our formal shirts, Italian wool suits, and tailored trousers.</p>
          <a href="products.html" class="btn-vestaro btn-vestaro-dark">Explore Collection</a>
        </div>
      `);
      $subtotal.text("₹0");
      $total.text("₹0");
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let subtotal = 0;
    const rowsHtml = shoppingBag
      .map((item, idx) => {
        const lineTotal = item.price * item.qty;
        subtotal += lineTotal;
        const sizeOptions = (item.availableSizes || ["S", "M", "L", "XL", "XXL"])
          .map((s) => `<option value="${s}" ${s === item.size ? "selected" : ""}>Size: ${s}</option>`)
          .join("");

        return `
          <div class="bag-item-row">
            <div class="bag-item-thumb">
              <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src=window.getVestaroFallbackImg('${item.name.replace(/'/g, "")}');" />
            </div>
            <div>
              <div class="d-flex justify-content-between align-items-start gap-2">
                <h5 class="serif-heading mb-1" style="font-size:1.05rem;text-align:left;">${item.name}</h5>
                <button type="button" class="btn btn-sm p-0 text-muted" data-action="remove-bag-item" data-index="${idx}" aria-label="Remove item">
                  <i data-lucide="trash-2" style="width:15px;height:15px;"></i>
                </button>
              </div>
              <div class="small text-muted mb-2" style="font-size:0.75rem;">${item.brand} • Color: ${item.color}</div>
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <select class="form-select form-select-sm" style="width:auto;font-size:0.74rem;border-radius:0;" data-action="change-bag-size" data-index="${idx}">
                  ${sizeOptions}
                </select>
                <div class="d-inline-flex align-items-center border">
                  <button type="button" class="btn btn-sm px-2 py-0" data-action="dec-bag-qty" data-index="${idx}">-</button>
                  <span class="px-2 small fw-semibold">${item.qty}</span>
                  <button type="button" class="btn btn-sm px-2 py-0" data-action="inc-bag-qty" data-index="${idx}">+</button>
                </div>
                <span class="fw-bold small">${window.formatINR(lineTotal)}</span>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    $container.html(rowsHtml);
    $subtotal.text(window.formatINR(subtotal));
    $total.text(window.formatINR(subtotal));
    if (window.lucide) window.lucide.createIcons();
  }

  // Inject Shared Drawers & Modals (Shopping Bag, Quick View & Size Guide, Search Overlay)
  function injectSharedModals() {
    if ($("#vestaroBagDrawer").length) return;

    const modalsMarkup = `
      <!-- Shopping Bag Off-Canvas Drawer -->
      <div id="vestaroBagBackdrop" class="bag-drawer-backdrop"></div>
      <aside id="vestaroBagDrawer" class="bag-drawer" aria-label="Shopping Bag">
        <div class="bag-drawer-header">
          <div class="d-flex align-items-center gap-2">
            <i data-lucide="shopping-bag" style="color:#B99A65;width:20px;height:20px;"></i>
            <span class="serif-heading" style="font-size:1.35rem;letter-spacing:0.06em;">Your Shopping Bag (<span class="js-bag-count">0</span>)</span>
          </div>
          <button type="button" class="btn btn-sm text-light p-1" id="closeBagDrawerBtn" aria-label="Close Shopping Bag">
            <i data-lucide="x" style="width:22px;height:22px;"></i>
          </button>
        </div>
        <div id="bagItemsContainer" class="bag-drawer-body"></div>
        <div class="bag-drawer-footer">
          <div class="d-flex justify-content-between mb-1 small text-muted">
            <span>Subtotal</span>
            <span id="bagSubtotalAmount" class="fw-semibold text-dark">₹0</span>
          </div>
          <div class="d-flex justify-content-between mb-2 small text-muted">
            <span>Complimentary Sartorial Packaging</span>
            <span class="text-success fw-semibold">FREE</span>
          </div>
          <div class="d-flex justify-content-between mb-3 pt-2 border-top">
            <span class="fw-bold">Estimated Total</span>
            <span id="bagTotalAmount" class="fw-bold" style="font-size:1.15rem;">₹0</span>
          </div>
          <div class="p-2 mb-3 small" style="background:rgba(185,154,101,0.14);border-left:3px solid #B99A65;font-size:0.74rem;color:#25272B;">
            <strong>Note on Payment:</strong> Direct online payment gateway is not integrated on this static showcase unless a live payment provider is configured. Complete your order seamlessly via our WhatsApp Sartorial Concierge below.
          </div>
          <div class="d-grid gap-2">
            <button type="button" id="whatsappBagCheckoutBtn" class="btn-vestaro btn-vestaro-whatsapp w-100">
              <i data-lucide="message-circle" style="width:16px;height:16px;"></i> WhatsApp Order Enquiry
            </button>
            <button type="button" id="continueShoppingBtn" class="btn-vestaro btn-vestaro-outline-dark w-100">
              Continue Shopping
            </button>
          </div>
        </div>
      </aside>

      <!-- Global Search Overlay -->
      <div id="vestaroSearchOverlay" class="search-overlay-modal" role="dialog" aria-label="Product Search">
        <div class="container" style="max-width:960px;">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <span class="eyebrow-tag mb-0">VESTARO CATALOGUE SEARCH</span>
            <button type="button" id="closeSearchOverlayBtn" class="header-icon-btn" aria-label="Close Search">
              <i data-lucide="x" style="width:22px;height:22px;"></i>
            </button>
          </div>
          <div class=" position-relative mb-4">
            <input type="search" id="globalSearchInput" class="form-control-vestaro" style="font-size:1.15rem;padding:1.1rem 1.35rem;background:#25272B;color:#F5F1E9;border-color:#B99A65;" placeholder="Search by product name, category (e.g., Shirts, Suits, Blazers) or brand..." autocomplete="off" />
          </div>
          <div id="globalSearchResults" class="row g-3"></div>
        </div>
      </div>

      <!-- Product Details & Quick View Modal -->
      <div class="modal fade" id="vestaroQuickViewModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content rounded-0 border-0" style="background:#F5F1E9;">
            <div class="modal-header border-bottom" style="background:#111214;color:#F5F1E9;">
              <h5 class="modal-title serif-heading" id="qvModalTitle" style="font-size:1.4rem;letter-spacing:0.05em;">Product Details</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4" id="qvModalBody"></div>
          </div>
        </div>
      </div>
    `;

    $("body").append(modalsMarkup);
    if (window.lucide) window.lucide.createIcons();
  }

  // Open Quick View / Product Details Modal
  window.openProductDetailsModal = function (productId) {
    const product = (window.VESTARO_PRODUCTS || []).find((p) => p.id === productId);
    if (!product) return;

    const sel = cardSelections[product.id] || {
      size: product.sizes[1] || product.sizes[0] || "M",
      color: (product.colors[0] && product.colors[0].name) || "Classic"
    };
    cardSelections[product.id] = sel;

    const galleryList = product.gallery && product.gallery.length ? product.gallery : [product.image];
    const thumbsHtml = galleryList
      .map(
        (imgUrl, i) => `
        <button type="button" class="border p-1 bg-white js-qv-thumb ${i === 0 ? "border-dark" : ""}" style="width:68px;height:82px;" data-img="${imgUrl}">
          <img src="${imgUrl}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;" onerror="this.onerror=null;this.src=window.getVestaroFallbackImg('${product.name.replace(/'/g, "")}');" />
        </button>`
      )
      .join("");

    const sizesButtons = (product.sizes || [])
      .map(
        (s) => `
        <button type="button" class="size-pill-mini px-3 py-2 js-qv-size ${sel.size === s ? "active" : ""}" data-size="${s}">
          ${s}
        </button>`
      )
      .join("");

    const colorsButtons = (product.colors || [])
      .map(
        (c) => `
        <button type="button" class="d-inline-flex align-items-center gap-2 px-3 py-1 border bg-white small js-qv-color ${sel.color === c.name ? "border-dark fw-bold" : ""}" data-color="${c.name}">
          <span style="width:14px;height:14px;border-radius:50%;background:${c.hex};border:1px solid #999;display:inline-block;"></span>
          ${c.name}
        </button>`
      )
      .join("");

    const waEnquiryText = `Hello VESTARO Concierge, I would like to enquire about:\n• Product: ${product.name}\n• Brand: ${product.brand}\n• Price: ${window.formatINR(product.price)}\n• Preferred Size: ${sel.size}\n• Color: ${sel.color}`;

    const modalHtml = `
      <div class="row g-4 align-items-start" data-qv-product-id="${product.id}">
        <div class="col-lg-6">
          <div class="bg-white border p-3 mb-3 d-flex align-items-center justify-content-center" style="aspect-ratio:4/5;">
            <img id="qvMainImage" src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;" onerror="this.onerror=null;this.src=window.getVestaroFallbackImg('${product.name.replace(/'/g, "")}');" />
          </div>
          <div class="d-flex gap-2 justify-content-center flex-wrap">
            ${thumbsHtml}
          </div>
        </div>
        <div class="col-lg-6">
          <span class="eyebrow-tag text-start">${product.brand} • ${product.category}</span>
          <h2 class="serif-heading mb-2" style="font-size:2rem;text-align:left;">${product.name}</h2>
          <div class="d-flex align-items-center gap-3 mb-3">
            <span class="fs-4 fw-bold">${window.formatINR(product.price)}</span>
            ${product.originalPrice ? `<span class="text-muted text-decoration-line-through">${window.formatINR(product.originalPrice)}</span>` : ""}
            ${product.discountPercent ? `<span class="badge-vestaro badge-sale">Save ${product.discountPercent}%</span>` : ""}
          </div>
          <p class="text-muted mb-3">${product.description}</p>
          <div class="p-3 bg-white border mb-3 small">
            <div class="mb-1"><strong>Fabric Specification:</strong> ${product.fabric}</div>
            <div><strong>Sartorial Fit:</strong> ${product.fit} — Tailored for balanced shoulder expression and clean drape.</div>
          </div>

          <div class="mb-3">
            <label class="fw-semibold small text-uppercase d-block mb-2">Select Colour: <span id="qvSelectedColorLabel" class="text-muted">${sel.color}</span></label>
            <div class="d-flex flex-wrap gap-2">${colorsButtons}</div>
          </div>

          <div class="mb-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <label class="fw-semibold small text-uppercase">Select Size: <span id="qvSelectedSizeLabel" class="text-muted">${sel.size}</span></label>
              <button class="btn btn-link btn-sm p-0 text-decoration-underline text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#qvSizeGuideCollapse">
                View Charles Tyrwhitt / VESTARO Size Guide
              </button>
            </div>
            <div class="d-flex flex-wrap gap-2">${sizesButtons}</div>
            <div class="collapse mt-3" id="qvSizeGuideCollapse">
              <div class="table-responsive bg-white border p-2 small">
                <table class="table table-sm mb-0 text-center">
                  <thead>
                    <tr style="background:#111214;color:#F5F1E9;">
                      <th>Size</th>
                      <th>Collar (in / cm)</th>
                      <th>Chest (in / cm)</th>
                      <th>Waist (in / cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>S</td><td>15" / 38cm</td><td>38" / 96cm</td><td>30" / 76cm</td></tr>
                    <tr><td>M</td><td>15.5" / 39.5cm</td><td>40" / 102cm</td><td>32" / 81cm</td></tr>
                    <tr><td>L</td><td>16" / 41cm</td><td>42" / 107cm</td><td>34" / 86cm</td></tr>
                    <tr><td>XL</td><td>16.5" / 42cm</td><td>44" / 112cm</td><td>36" / 91cm</td></tr>
                    <tr><td>XXL</td><td>17.5" / 44.5cm</td><td>46" / 117cm</td><td>38" / 97cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="mb-4 d-flex align-items-center gap-3">
            <label class="fw-semibold small text-uppercase">Quantity:</label>
            <div class="d-inline-flex align-items-center border bg-white">
              <button type="button" class="btn btn-sm px-3 py-1" id="qvQtyMinus">-</button>
              <input type="number" id="qvQtyInput" value="1" min="1" max="10" class="form-control form-control-sm border-0 text-center" style="width:52px;" />
              <button type="button" class="btn btn-sm px-3 py-1" id="qvQtyPlus">+</button>
            </div>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <button type="button" id="qvAddToBagConfirm" class="btn-vestaro btn-vestaro-dark flex-grow-1" data-product-id="${product.id}">
              <i data-lucide="shopping-bag" style="width:16px;height:16px;"></i> Add to Shopping Bag
            </button>
            <a id="qvWhatsappLink" href="${window.buildWhatsAppURL(waEnquiryText)}" target="_blank" rel="noopener" class="btn-vestaro btn-vestaro-whatsapp flex-grow-1">
              <i data-lucide="message-circle" style="width:16px;height:16px;"></i> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    `;

    $("#qvModalTitle").text(product.name);
    $("#qvModalBody").html(modalHtml);
    if (window.lucide) window.lucide.createIcons();

    const modalEl = document.getElementById("vestaroQuickViewModal");
    if (modalEl && window.bootstrap) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  };

  // Products Catalogue Page Controller
  function initProductsCataloguePage() {
    const $grid = $("#catalogueProductGrid");
    if (!$grid.length) return;

    const params = new URLSearchParams(window.location.search);
    const initialCategory = params.get("category") || "All";
    const initialBrand = params.get("brand") || "All";
    const initialSearch = params.get("q") || "";

    let filterState = {
      category: initialCategory,
      brand: initialBrand,
      size: "All",
      color: "All",
      fit: "All",
      maxPrice: 45000,
      search: initialSearch,
      sortBy: "popular"
    };

    // Render Category Pills Bar
    const $pillsBar = $("#catalogueCategoryPills");
    if ($pillsBar.length && window.VESTARO_CATEGORIES) {
      $pillsBar.html(
        window.VESTARO_CATEGORIES.map(
          (cat) => `
          <button type="button" class="cat-filter-pill ${filterState.category === cat ? "active" : ""}" data-cat="${cat}">
            ${cat}
          </button>`
        ).join("")
      );
    }

    // Set initial UI controls
    if (filterState.brand !== "All") {
      $("#filterBrandSelect").val(filterState.brand);
    }
    if (filterState.search) {
      $("#catalogueSearchInput").val(filterState.search);
    }

    function applyFiltersAndRender() {
      let list = [...(window.VESTARO_PRODUCTS || [])];

      if (filterState.category !== "All") {
        list = list.filter(
          (p) =>
            p.category === filterState.category ||
            (p.subCategories && p.subCategories.includes(filterState.category))
        );
      }

      if (filterState.brand !== "All") {
        list = list.filter((p) => p.brand === filterState.brand);
      }

      if (filterState.size !== "All") {
        list = list.filter((p) => p.sizes && p.sizes.includes(filterState.size));
      }

      if (filterState.color !== "All") {
        list = list.filter(
          (p) => p.colors && p.colors.some((c) => c.name.toLowerCase() === filterState.color.toLowerCase())
        );
      }

      if (filterState.fit !== "All") {
        list = list.filter((p) => p.fit === filterState.fit);
      }

      list = list.filter((p) => p.price <= filterState.maxPrice);

      if (filterState.search.trim() !== "") {
        const q = filterState.search.trim().toLowerCase();
        list = list.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.shortDesc.toLowerCase().includes(q)
        );
      }

      // Sorting
      if (filterState.sortBy === "price-asc") {
        list.sort((a, b) => a.price - b.price);
      } else if (filterState.sortBy === "price-desc") {
        list.sort((a, b) => b.price - a.price);
      } else if (filterState.sortBy === "newest") {
        list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      } else {
        list.sort((a, b) => b.popularity - a.popularity);
      }

      $("#catalogueCountLabel").text(`Showing ${list.length} Sartorial Pieces`);

      if (list.length === 0) {
        $grid.html(`
          <div class="col-12">
            <div class="bg-white border p-5 text-center">
              <h3 class="serif-heading mb-2">No Matching Sartorial Pieces Found</h3>
              <p class="text-muted mb-4">Try broadening your filters or resetting your search criteria.</p>
              <button type="button" id="emptyResetFiltersBtn" class="btn-vestaro btn-vestaro-dark">Reset All Filters</button>
            </div>
          </div>
        `);
        return;
      }

      $grid.html(
        list.map((product) => `<div class="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">${window.renderProductCard(product)}</div>`).join("")
      );
      if (window.lucide) window.lucide.createIcons();
    }

    // Event bindings for Catalogue Filters
    $(document).on("click", ".cat-filter-pill", function () {
      const cat = $(this).data("cat");
      filterState.category = cat;
      $(".cat-filter-pill").removeClass("active");
      $(this).addClass("active");
      $("#filterCategorySelect").val(cat);
      applyFiltersAndRender();
    });

    $("#filterCategorySelect").on("change", function () {
      filterState.category = $(this).val();
      $(".cat-filter-pill").removeClass("active");
      $(`.cat-filter-pill[data-cat="${filterState.category}"]`).addClass("active");
      applyFiltersAndRender();
    });

    $("#filterBrandSelect").on("change", function () {
      filterState.brand = $(this).val();
      applyFiltersAndRender();
    });

    $("#filterFitSelect").on("change", function () {
      filterState.fit = $(this).val();
      applyFiltersAndRender();
    });

    $(document).on("click", ".js-filter-size-btn", function () {
      $(".js-filter-size-btn").removeClass("active");
      $(this).addClass("active");
      filterState.size = $(this).data("size");
      applyFiltersAndRender();
    });

    $(document).on("click", ".js-filter-color-btn", function () {
      $(".js-filter-color-btn").removeClass("active");
      $(this).addClass("active");
      filterState.color = $(this).data("color");
      applyFiltersAndRender();
    });

    $("#filterPriceRange").on("input change", function () {
      const val = parseInt($(this).val(), 10);
      filterState.maxPrice = val;
      $("#filterPriceValue").text(window.formatINR(val));
      applyFiltersAndRender();
    });

    $("#catalogueSearchInput").on("input", function () {
      filterState.search = $(this).val();
      applyFiltersAndRender();
    });

    $("#catalogueSortSelect").on("change", function () {
      filterState.sortBy = $(this).val();
      applyFiltersAndRender();
    });

    $(document).on("click", "#resetCatalogueFiltersBtn, #emptyResetFiltersBtn", function () {
      filterState = {
        category: "All",
        brand: "All",
        size: "All",
        color: "All",
        fit: "All",
        maxPrice: 45000,
        search: "",
        sortBy: "popular"
      };
      $(".cat-filter-pill").removeClass("active");
      $('.cat-filter-pill[data-cat="All"]').addClass("active");
      $("#filterCategorySelect").val("All");
      $("#filterBrandSelect").val("All");
      $("#filterFitSelect").val("All");
      $(".js-filter-size-btn").removeClass("active");
      $('.js-filter-size-btn[data-size="All"]').addClass("active");
      $(".js-filter-color-btn").removeClass("active");
      $('.js-filter-color-btn[data-color="All"]').addClass("active");
      $("#filterPriceRange").val(45000);
      $("#filterPriceValue").text("₹45,000");
      $("#catalogueSearchInput").val("");
      $("#catalogueSortSelect").val("popular");
      applyFiltersAndRender();
    });

    applyFiltersAndRender();
  }

  // Home 2 Sections Dynamic Injection (New Arrivals & Trending Swiper)
  function initHome2Showcases() {
    const $newArrivalsGrid = $("#home2NewArrivalsGrid");
    if ($newArrivalsGrid.length && window.VESTARO_PRODUCTS) {
      const arrivals = window.VESTARO_PRODUCTS.filter((p) => p.isNew).slice(0, 6);
      $newArrivalsGrid.html(
        arrivals.map((p) => `<div class="col-md-6 col-lg-4">${window.renderProductCard(p)}</div>`).join("")
      );
    }

    const $trendingWrapper = $("#home2TrendingSwiperWrapper");
    if ($trendingWrapper.length && window.VESTARO_PRODUCTS) {
      const trending = window.VESTARO_PRODUCTS.filter((p) => p.isTrending);
      $trendingWrapper.html(
        trending.map((p) => `<div class="swiper-slide h-auto">${window.renderProductCard(p)}</div>`).join("")
      );

      if (window.Swiper) {
        new Swiper("#home2TrendingSwiper", {
          slidesPerView: 1.15,
          spaceBetween: 20,
          grabCursor: true,
          navigation: {
            nextEl: ".swiper-btn-next-vestaro",
            prevEl: ".swiper-btn-prev-vestaro"
          },
          pagination: {
            el: ".swiper-pagination-vestaro",
            clickable: true
          },
          breakpoints: {
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 24 },
            1400: { slidesPerView: 4, spaceBetween: 24 }
          }
        });
      }
    }
  }

  // Contact Form Validation
  function initContactForm() {
    const $form = $("#vestaroContactForm");
    if (!$form.length) return;

    $form.on("submit", function (e) {
      e.preventDefault();
      const fullName = $("#contactFullName").val().trim();
      const email = $("#contactEmail").val().trim();
      const phone = $("#contactPhone").val().trim();
      const subject = $("#contactSubject").val().trim();
      const message = $("#contactMessage").val().trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9+\-\s()]{7,18}$/;

      if (fullName.length < 2) {
        window.showVestaroToast("Please enter your full name.");
        $("#contactFullName").focus();
        return;
      }
      if (!emailRegex.test(email)) {
        window.showVestaroToast("Please enter a valid email address.");
        $("#contactEmail").focus();
        return;
      }
      if (!phoneRegex.test(phone)) {
        window.showVestaroToast("Please enter a valid phone number.");
        $("#contactPhone").focus();
        return;
      }
      if (!subject) {
        window.showVestaroToast("Please select or enter a subject.");
        $("#contactSubject").focus();
        return;
      }
      if (message.length < 10) {
        window.showVestaroToast("Please enter a detailed message (at least 10 characters).");
        $("#contactMessage").focus();
        return;
      }

      const waBody = `Hello VESTARO Flagship Concierge,\n• Name: ${fullName}\n• Email: ${email}\n• Phone: ${phone}\n• Subject: ${subject}\n• Message: ${message}`;
      $("#contactSuccessAlert").removeClass("d-none").html(`
        <div class="p-4 border" style="background:#111214;color:#F5F1E9;border-color:#B99A65 !important;">
          <h4 class="serif-heading text-center mb-2" style="color:#B99A65;">Thank You, ${fullName}. Your Enquiry Has Been Validated.</h4>
          <p class="small text-center mb-3" style="color:#D9D7D2;">
            Please note: As this is a static frontend showcase without an active mail server backend, no automated email has been dispatched. You may instantly send your formatted enquiry to our store team via WhatsApp below:
          </p>
          <div class="text-center">
            <a href="${window.buildWhatsAppURL(waBody)}" target="_blank" rel="noopener" class="btn-vestaro btn-vestaro-gold">
              <i data-lucide="message-circle" style="width:16px;height:16px;"></i> Send Directly via WhatsApp
            </a>
          </div>
        </div>
      `);
      if (window.lucide) window.lucide.createIcons();
      $form[0].reset();
    });
  }

  // Animations (GSAP + ScrollTrigger + AOS)
  function initAnimations() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (window.AOS) {
      window.AOS.init({
        duration: prefersReducedMotion ? 0 : 800,
        once: true,
        offset: 60,
        easing: "ease-out-cubic"
      });
    }

    if (prefersReducedMotion || !window.gsap) return;

    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Subtle Hero Editorial Text Reveal
    const heroReveals = document.querySelectorAll(".gsap-hero-reveal");
    if (heroReveals.length) {
      gsap.fromTo(
        heroReveals,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.15
        }
      );
    }
  }

  // Document Ready Initialization
  $(function () {
    loadStorage();
    injectSharedModals();
    initProductsCataloguePage();
    initHome2Showcases();
    initContactForm();
    updateBagUI();

    // Header Sticky Scroll Transition
    const $header = $(".site-header");
    function checkScroll() {
      if ($(window).scrollTop() > 40) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
    }
    $(window).on("scroll", checkScroll);
    checkScroll();

    // Mobile Hamburger Drawer Open/Close
    $(document).on("click", "#openMobileMenuBtn", function () {
      $("#mobileNavDrawer, #mobileNavBackdrop").addClass("open");
      $(this).attr("aria-expanded", "true");
    });

    $(document).on("click", "#closeMobileMenuBtn, #mobileNavBackdrop", function () {
      $("#mobileNavDrawer, #mobileNavBackdrop").removeClass("open");
      $("#openMobileMenuBtn").attr("aria-expanded", "false");
    });

    // Shopping Bag Drawer Open/Close
    $(document).on("click", ".js-open-bag", function (e) {
      e.preventDefault();
      $("#mobileNavDrawer, #mobileNavBackdrop").removeClass("open");
      $("#vestaroBagDrawer, #vestaroBagBackdrop").addClass("open");
    });

    $(document).on("click", "#closeBagDrawerBtn, #continueShoppingBtn, #vestaroBagBackdrop", function () {
      $("#vestaroBagDrawer, #vestaroBagBackdrop").removeClass("open");
    });

    // Global Search Overlay Open/Close & Filtering
    $(document).on("click", ".js-open-search", function (e) {
      e.preventDefault();
      $("#mobileNavDrawer, #mobileNavBackdrop").removeClass("open");
      $("#vestaroSearchOverlay").addClass("open");
      setTimeout(() => $("#globalSearchInput").trigger("focus"), 150);
      renderGlobalSearchResults("");
    });

    $(document).on("click", "#closeSearchOverlayBtn", function () {
      $("#vestaroSearchOverlay").removeClass("open");
    });

    function renderGlobalSearchResults(query) {
      const q = (query || "").trim().toLowerCase();
      const list = (window.VESTARO_PRODUCTS || [])
        .filter(
          (p) =>
            !q ||
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q)
        )
        .slice(0, 6);

      const $res = $("#globalSearchResults");
      if (!list.length) {
        $res.html(`<div class="col-12 text-center text-light py-4">No matching products found for "${query}".</div>`);
        return;
      }

      $res.html(
        list
          .map(
            (p) => `
          <div class="col-md-6 col-lg-4">
            <div class="p-3 d-flex gap-3 align-items-center" style="background:#25272B;border:1px solid rgba(185,154,101,0.3);">
              <img src="${p.image}" alt="${p.name}" style="width:64px;height:80px;object-fit:contain;background:#F5F1E9;padding:4px;" onerror="this.onerror=null;this.src=window.getVestaroFallbackImg('${p.name.replace(/'/g, "")}');" />
              <div class="flex-grow-1">
                <div class="small" style="color:#B99A65;font-size:0.68rem;">${p.brand}</div>
                <h6 class="serif-heading text-light mb-1" style="font-size:1.05rem;text-align:left;">${p.name}</h6>
                <div class="small text-light fw-bold mb-2">${window.formatINR(p.price)}</div>
                <button type="button" class="btn btn-sm py-1 px-2 rounded-0" style="background:#B99A65;color:#111214;font-size:0.7rem;font-weight:600;" data-action="quick-view" data-product-id="${p.id}">
                  View Details
                </button>
              </div>
            </div>
          </div>`
          )
          .join("")
      );
    }

    $(document).on("input", "#globalSearchInput", function () {
      renderGlobalSearchResults($(this).val());
    });

    // Escape key closes overlays
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        $("#mobileNavDrawer, #mobileNavBackdrop").removeClass("open");
        $("#vestaroBagDrawer, #vestaroBagBackdrop").removeClass("open");
        $("#vestaroSearchOverlay").removeClass("open");
      }
    });

    // Product Card Interactive Delegated Listeners
    $(document).on("click", '[data-action="select-card-size"]', function () {
      const pid = $(this).data("product-id");
      const size = $(this).data("size");
      cardSelections[pid] = cardSelections[pid] || {};
      cardSelections[pid].size = size;
      $(this).closest(".product-sizes-pills").find(".size-pill-mini").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", '[data-action="select-card-color"]', function () {
      const pid = $(this).data("product-id");
      const color = $(this).data("color");
      cardSelections[pid] = cardSelections[pid] || {};
      cardSelections[pid].color = color;
      $(this).closest(".product-swatches").find(".color-swatch-dot").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", '[data-action="toggle-wishlist"]', function () {
      const pid = $(this).data("product-id");
      const idx = wishlist.indexOf(pid);
      if (idx > -1) {
        wishlist.splice(idx, 1);
        $(this).removeClass("active");
        window.showVestaroToast("Removed from your Sartorial Wishlist.");
      } else {
        wishlist.push(pid);
        $(this).addClass("active");
        window.showVestaroToast("Saved to your Sartorial Wishlist.");
      }
      saveWishlist();
    });

    $(document).on("click", '[data-action="add-to-bag"]', function () {
      const pid = $(this).data("product-id");
      window.addToShoppingBag(pid);
    });

    $(document).on("click", '[data-action="quick-view"]', function (e) {
      e.preventDefault();
      $("#vestaroSearchOverlay").removeClass("open");
      const pid = $(this).data("product-id");
      window.openProductDetailsModal(pid);
    });

    // Quick View Modal Internal Interactions
    $(document).on("click", ".js-qv-thumb", function () {
      const imgUrl = $(this).data("img");
      $("#qvMainImage").attr("src", imgUrl);
      $(".js-qv-thumb").removeClass("border-dark");
      $(this).addClass("border-dark");
    });

    $(document).on("click", ".js-qv-size", function () {
      const size = $(this).data("size");
      const pid = $(this).closest("[data-qv-product-id]").data("qv-product-id");
      $(".js-qv-size").removeClass("active");
      $(this).addClass("active");
      $("#qvSelectedSizeLabel").text(size);
      if (pid) {
        cardSelections[pid] = cardSelections[pid] || {};
        cardSelections[pid].size = size;
      }
    });

    $(document).on("click", ".js-qv-color", function () {
      const color = $(this).data("color");
      const pid = $(this).closest("[data-qv-product-id]").data("qv-product-id");
      $(".js-qv-color").removeClass("border-dark fw-bold");
      $(this).addClass("border-dark fw-bold");
      $("#qvSelectedColorLabel").text(color);
      if (pid) {
        cardSelections[pid] = cardSelections[pid] || {};
        cardSelections[pid].color = color;
      }
    });

    $(document).on("click", "#qvQtyMinus", function () {
      const $inp = $("#qvQtyInput");
      const v = Math.max(1, parseInt($inp.val() || 1, 10) - 1);
      $inp.val(v);
    });

    $(document).on("click", "#qvQtyPlus", function () {
      const $inp = $("#qvQtyInput");
      const v = Math.min(10, parseInt($inp.val() || 1, 10) + 1);
      $inp.val(v);
    });

    $(document).on("click", "#qvAddToBagConfirm", function () {
      const pid = $(this).data("product-id");
      const size = $("#qvSelectedSizeLabel").text();
      const color = $("#qvSelectedColorLabel").text();
      const qty = parseInt($("#qvQtyInput").val() || 1, 10);
      window.addToShoppingBag(pid, size, color, qty);
    });

    // Shopping Bag Item Controls
    $(document).on("click", '[data-action="inc-bag-qty"]', function () {
      const idx = $(this).data("index");
      if (shoppingBag[idx]) {
        shoppingBag[idx].qty += 1;
        saveBag();
      }
    });

    $(document).on("click", '[data-action="dec-bag-qty"]', function () {
      const idx = $(this).data("index");
      if (shoppingBag[idx]) {
        if (shoppingBag[idx].qty > 1) {
          shoppingBag[idx].qty -= 1;
        } else {
          shoppingBag.splice(idx, 1);
        }
        saveBag();
      }
    });

    $(document).on("click", '[data-action="remove-bag-item"]', function () {
      const idx = $(this).data("index");
      if (shoppingBag[idx]) {
        shoppingBag.splice(idx, 1);
        saveBag();
      }
    });

    $(document).on("change", '[data-action="change-bag-size"]', function () {
      const idx = $(this).data("index");
      const newSize = $(this).val();
      if (shoppingBag[idx]) {
        shoppingBag[idx].size = newSize;
        saveBag();
      }
    });

    // WhatsApp Checkout from Shopping Bag
    $(document).on("click", "#whatsappBagCheckoutBtn", function () {
      if (!shoppingBag.length) {
        window.showVestaroToast("Your Shopping Bag is currently empty.");
        return;
      }
      let total = 0;
      const lines = shoppingBag.map((item, i) => {
        const sub = item.price * item.qty;
        total += sub;
        return `${i + 1}. ${item.name} (${item.brand}) | Size: ${item.size} | Color: ${item.color} | Qty: ${item.qty} | ${window.formatINR(sub)}`;
      });
      const message = `Hello VESTARO Sartorial Concierge,\nI would like to place an order enquiry for the following items in my Shopping Bag:\n\n${lines.join("\n")}\n\nEstimated Total: ${window.formatINR(total)}\nPlease assist me with availability and payment confirmation.`;
      window.open(window.buildWhatsAppURL(message), "_blank", "noopener");
    });

    // Newsletter Footer Subscription UI
    $(document).on("submit", ".js-newsletter-form", function (e) {
      e.preventDefault();
      const email = $(this).find('input[type="email"]').val().trim();
      if (!email) return;
      window.showVestaroToast("Welcome to The VESTARO Sartorial Journal.");
      this.reset();
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
    initAnimations();
  });
})(jQuery);

