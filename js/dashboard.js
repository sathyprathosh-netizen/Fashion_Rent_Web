/* ============================================================
   LUXURY FASHION RENTAL — DASHBOARD DATA & LOGIC
   ============================================================ */

const DASHBOARD_DATA = {
    user: {
        name: "Isabelle Laurent",
        tier: "Royale",
        avatar: "IL",
        memberSince: "March 2023",
        totalRentals: 24,
        wishlistCount: 8
    },
    activeRentals: [
        {
            id: "R-2847",
            item: "Velours Noir Gown",
            designer: "Maison Élite",
            rentedOn: "Feb 22, 2026",
            dueDate: "Mar 01, 2026",
            status: "active",
            price: 2800,
            image: "https://images.unsplash.com/photo-1566479179817-2c9c7c3ff49d?w=300&q=80"
        },
        {
            id: "R-2901",
            item: "Cobalt Wrap Dress",
            designer: "Maison Élite",
            rentedOn: "Feb 25, 2026",
            dueDate: "Feb 28, 2026",
            status: "due-soon",
            price: 1900,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80"
        }
    ],
    rentalHistory: [
        {
            id: "R-2803",
            item: "Crimson Plunge Dress",
            designer: "Atelier Doré",
            rentedOn: "Jan 10, 2026",
            returnedOn: "Jan 15, 2026",
            status: "returned",
            price: 3400,
            image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=300&q=80"
        },
        {
            id: "R-2755",
            item: "Violet Couture Gown",
            designer: "House of Véra",
            rentedOn: "Dec 27, 2025",
            returnedOn: "Jan 02, 2026",
            status: "returned",
            price: 5800,
            image: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=300&q=80"
        },
        {
            id: "R-2699",
            item: "Golden Hour Gown",
            designer: "Atelier Doré",
            rentedOn: "Nov 14, 2025",
            returnedOn: "Nov 18, 2025",
            status: "returned",
            price: 6200,
            image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80"
        },
        {
            id: "R-2614",
            item: "Ivory Column Gown",
            designer: "Atelier Doré",
            rentedOn: "Oct 02, 2025",
            returnedOn: "Oct 05, 2025",
            status: "returned",
            price: 3800,
            image: "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=300&q=80"
        }
    ],
    wishlist: [
        {
            id: 6,
            item: "Violet Couture Gown",
            designer: "House of Véra",
            price: 5800,
            availability: "limited",
            image: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=300&q=80"
        },
        {
            id: 11,
            item: "Golden Hour Gown",
            designer: "Atelier Doré",
            price: 6200,
            availability: "limited",
            image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80"
        },
        {
            id: 2,
            item: "Rubis Bridal Cape",
            designer: "House of Véra",
            price: 4200,
            availability: "limited",
            image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=300&q=80"
        }
    ]
};

function renderActiveRental(r) {
    const statusMap = { active: ['active', 'ACTIVE'], 'due-soon': ['due-soon', 'DUE SOON'] };
    const [cls, label] = statusMap[r.status] || ['active', 'ACTIVE'];
    return `
    <div class="dash-rental-card anim-fade-up">
      <div class="drc-img">
        <img src="${r.image}" alt="${r.item}" loading="lazy">
      </div>
      <div class="drc-info">
        <span class="drc-id">${r.id}</span>
        <h4 class="drc-name">${r.item}</h4>
        <span class="drc-designer">${r.designer}</span>
        <div class="drc-dates">
          <span>Rented: <strong>${r.rentedOn}</strong></span>
          <span>Due: <strong>${r.dueDate}</strong></span>
        </div>
      </div>
      <div class="drc-right">
        <span class="status-badge ${cls}">${label}</span>
        <span class="drc-price">₹${r.price.toLocaleString()}</span>
      </div>
    </div>
  `;
}

function renderHistoryRow(r) {
    return `
    <div class="history-row anim-fade-up">
      <div class="hr-img">
        <img src="${r.image}" alt="${r.item}" loading="lazy">
      </div>
      <div class="hr-info">
        <span class="hr-id">${r.id}</span>
        <span class="hr-name">${r.item}</span>
        <span class="hr-designer">${r.designer}</span>
      </div>
      <span class="hr-date">${r.rentedOn}</span>
      <span class="hr-date">${r.returnedOn}</span>
      <span class="hr-price">₹${r.price.toLocaleString()}</span>
      <span class="status-badge returned">RETURNED</span>
    </div>
  `;
}

function renderWishlistCard(w) {
    const av = w.availability === 'available' ? 'available' : 'limited';
    return `
    <div class="wish-card anim-scale">
      <div class="wish-img">
        <img src="${w.image}" alt="${w.item}" loading="lazy">
        <span class="avail-dot ${av}"></span>
      </div>
      <div class="wish-info">
        <span class="wish-designer">${w.designer}</span>
        <h5 class="wish-name">${w.item}</h5>
        <div class="wish-footer">
          <span class="wish-price">₹${w.price.toLocaleString()}<small>/day</small></span>
          <a href="product-detail.html?id=${w.id}" class="btn btn-outline btn-sm">Rent</a>
        </div>
      </div>
    </div>
  `;
}

function initDashboard() {
    const d = DASHBOARD_DATA;

    // Stats
    const el = id => document.getElementById(id);
    if (el('dash-name')) el('dash-name').textContent = d.user.name;
    if (el('dash-tier')) el('dash-tier').textContent = d.user.tier;
    if (el('dash-avatar')) el('dash-avatar').textContent = d.user.avatar;
    if (el('total-rentals')) el('total-rentals').textContent = d.user.totalRentals;
    if (el('wish-count')) el('wish-count').textContent = d.user.wishlistCount;
    if (el('active-count')) el('active-count').textContent = d.activeRentals.length;

    // Active
    const activeGrid = document.getElementById('active-rentals');
    if (activeGrid) {
        activeGrid.innerHTML = d.activeRentals.map(renderActiveRental).join('');
    }
    // History
    const histGrid = document.getElementById('history-list');
    if (histGrid) {
        histGrid.innerHTML = d.rentalHistory.map(renderHistoryRow).join('');
    }
    // Wishlist
    const wishGrid = document.getElementById('wishlist-grid');
    if (wishGrid) {
        wishGrid.innerHTML = d.wishlist.map(renderWishlistCard).join('');
    }

    // Re-trigger scroll animations for dynamically rendered cards
    setTimeout(() => {
        document.querySelectorAll('.anim-fade-up, .anim-scale').forEach((el, i) => {
            setTimeout(() => el.classList.add('in-view'), i * 100);
        });
    }, 200);
}

// Tab switching
function initDashTabs() {
    const tabs = document.querySelectorAll('.dash-tab');
    const panes = document.querySelectorAll('.dash-pane');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById(this.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    initDashTabs();
});
