/* ============================================================
   LUXURY FASHION RENTAL — PRODUCTS DATA & LISTING LOGIC
   ============================================================ */

const PRODUCTS = [
    {
        id: 1,
        name: "Velours Noir Gown",
        designer: "Maison Élite",
        category: "evening",
        collection: "Noir Lumière",
        price: 2800,
        deposit: 8000,
        availability: "available",
        tags: ["Couture", "Floor-length"],
        colors: ["#1a1a2e", "#c9a96e"],
        sizes: ["XS", "S", "M", "L", "XL"],
        fabric: "Italian velvet, hand-embroidered",
        description: "An opera-length velvet gown draped in the purest midnight hue. Hand-pleated bodice with ivory beadwork at the décolletage — a statement in controlled luxury.",
        images: [
            "assets/img/product-velours-noir.png",
            "https://images.unsplash.com/photo-1590649917165-5efb1e88a6e5?w=600&q=80"
        ]
    },
    {
        id: 2,
        name: "Rubis Bridal Cape",
        designer: "House of Véra",
        category: "bridal",
        collection: "Bridal Couture",
        price: 4200,
        deposit: 12000,
        availability: "limited",
        tags: ["Bridal", "Cape"],
        colors: ["#f5f0eb", "#c9929a"],
        sizes: ["S", "M", "L"],
        fabric: "Duchess satin, French chantilly lace",
        description: "For the bride who commands every room without trying. A structural cape over a fitted duchess-satin gown — romance reimagined for the modern empress.",
        images: [
            "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80",
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80"
        ]
    },
    {
        id: 3,
        name: "Onyx Blazer Set",
        designer: "Studio Ren",
        category: "street",
        collection: "Street Luxe SS",
        price: 1600,
        deposit: 5000,
        availability: "available",
        tags: ["Street Luxe", "Set"],
        colors: ["#0b0b0f", "#5b2d8e"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        fabric: "Wool-cashmere blend",
        description: "Power distilled into a single silhouette. An oversized blazer paired with wide-leg trousers — the anthesis of quiet luxury. Zero compromise.",
        images: [
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
        ]
    },
    {
        id: 4,
        name: "Crimson Plunge Dress",
        designer: "Atelier Doré",
        category: "evening",
        collection: "Scarlet Hour",
        price: 3400,
        deposit: 9500,
        availability: "available",
        tags: ["Evening", "Signature"],
        colors: ["#c21a38", "#0b0b0f"],
        sizes: ["XS", "S", "M", "L"],
        fabric: "Silk crepe, hand-draped",
        description: "Pure silk crepe that moves with you — the plunging neckline frames without diminishing. Worn by those who need no introduction.",
        images: [
            "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80",
            "https://images.unsplash.com/photo-1562572159-4efd90758b1d?w=600&q=80"
        ]
    },
    {
        id: 5,
        name: "Sasha Faux Fur Coat",
        designer: "Maison Élite",
        category: "street",
        collection: "Winter Ritual",
        price: 2200,
        deposit: 7000,
        availability: "available",
        tags: ["Outerwear", "Statement"],
        colors: ["#e5c88a", "#c9929a"],
        sizes: ["S", "M", "L", "XL"],
        fabric: "Ethical faux-fur, satin lining",
        description: "Drama in every stride. A floor-sweeping faux-fur coat in champagne cream — the kind of entrance no one forgets.",
        images: [
            "https://images.unsplash.com/photo-1548863227-3af567fc3b27?w=600&q=80",
            "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80"
        ]
    },
    {
        id: 6,
        name: "Violet Couture Gown",
        designer: "House of Véra",
        category: "couture",
        collection: "Amethyst Edit",
        price: 5800,
        deposit: 16000,
        availability: "limited",
        tags: ["Couture", "Runway"],
        colors: ["#5b2d8e", "#c9a96e"],
        sizes: ["XS", "S", "M"],
        fabric: "Duchesse silk, Swarovski crystal",
        description: "A runway-grade creation. Structural silk bodice encrusted with hand-placed crystals cascading into an asymmetric skirt — this is wearable art.",
        images: [
            "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=600&q=80",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
        ]
    },
    {
        id: 7,
        name: "Noir Corset Suit",
        designer: "Studio Ren",
        category: "couture",
        collection: "Architectural Lines",
        price: 3100,
        deposit: 9000,
        availability: "unavailable",
        tags: ["Couture", "Power"],
        colors: ["#0b0b0f", "#c21a38"],
        sizes: ["XS", "S", "M", "L"],
        fabric: "Bonded crepe, boning structure",
        description: "A tailored corset meets structured blazer trousers. Architectural precision meets seductive form — the power suit reinvented for the fashion elite.",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
            "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&q=80"
        ]
    },
    {
        id: 8,
        name: "Ivory Column Gown",
        designer: "Atelier Doré",
        category: "bridal",
        collection: "Bridal Couture",
        price: 3800,
        deposit: 11000,
        availability: "available",
        tags: ["Bridal", "Minimalist"],
        colors: ["#f5f0eb", "#c9a96e"],
        sizes: ["XS", "S", "M", "L", "XL"],
        fabric: "Bias-cut silk satin",
        description: "The less-is-more bridal statement. A bias-cut column of pure silk satin — the architecture of restraint is the ultimate luxury.",
        images: [
            "assets/img/product-ivory-column.png",
            "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&q=80"
        ]
    },
    {
        id: 9,
        name: "Cobalt Wrap Dress",
        designer: "Maison Élite",
        category: "evening",
        collection: "Cobalt & Midnight",
        price: 1900,
        deposit: 5500,
        availability: "available",
        tags: ["Evening", "Chic"],
        colors: ["#1a4a7a", "#0b0b0f"],
        sizes: ["XS", "S", "M", "L", "XL"],
        fabric: "Fluid jersey, draped finish",
        description: "Cobalt that commands. A fluid jersey wrap that molds, flatters, and moves with effortless authority. Day to night, season to season.",
        images: [
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027614b3?w=600&q=80"
        ]
    },
    {
        id: 10,
        name: "Noir Leather Midi",
        designer: "Studio Ren",
        category: "street",
        collection: "Street Luxe SS",
        price: 2100,
        deposit: 6500,
        availability: "available",
        tags: ["Street Luxe", "Edge"],
        colors: ["#0b0b0f", "#4a4458"],
        sizes: ["XS", "S", "M", "L", "XL"],
        fabric: "Vegan leather, satin lining",
        description: "Vegan leather at its most refined. A midi pencil skirt with horn button detailing — rebellious elegance for those who write their own rules.",
        images: [
            "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&q=80"
        ]
    },
    {
        id: 11,
        name: "Golden Hour Gown",
        designer: "Atelier Doré",
        category: "couture",
        collection: "Scarlet Hour",
        price: 6200,
        deposit: 18000,
        availability: "limited",
        tags: ["Couture", "Golden"],
        colors: ["#c9a96e", "#e5c88a"],
        sizes: ["XS", "S", "M", "L"],
        fabric: "Metallic brocade, hand-beaded",
        description: "Gold that doesn't beg for attention. A hand-beaded brocade gown that catches every light — from runway to gala to history.",
        images: [
            "assets/img/product-golden-hour.png",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"
        ]
    },
    {
        id: 12,
        name: "Rouge Strapless Bustier",
        designer: "House of Véra",
        category: "evening",
        collection: "Scarlet Hour",
        price: 2500,
        deposit: 7500,
        availability: "available",
        tags: ["Evening", "Bold"],
        colors: ["#c21a38", "#8a1424"],
        sizes: ["XS", "S", "M", "L"],
        fabric: "Structured taffeta, hand-pleated",
        description: "A scarlet statement. Pleated taffeta bustier with architectural boning — unapologetic femininity in its purest, most powerful form.",
        images: [
            "assets/img/product-rouge-bustier.png",
            "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=600&q=80"
        ]
    }
];

const COLLECTIONS = [
    {
        id: 1, name: "Noir Lumière", season: "Autumn/Winter", count: 14, category: "evening",
        desc: "Darkness elevated — a collection born in shadow, refined in light.",
        image: "https://images.unsplash.com/photo-1566479179817-2c9c7c3ff49d?w=800&q=80"
    },
    {
        id: 2, name: "Bridal Couture", season: "Spring/Summer", count: 9, category: "bridal",
        desc: "For the modern empress who redefines what the word forever means.",
        image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80"
    },
    {
        id: 3, name: "Street Luxe SS", season: "Spring/Summer", count: 18, category: "street",
        desc: "Where couture meets the concrete — power dressing for the urban elite.",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"
    },
    {
        id: 4, name: "Amethyst Edit", season: "Resort", count: 7, category: "couture",
        desc: "Crystal and silk — each piece a wearable sculpture for the discerning few.",
        image: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=800&q=80"
    },
    {
        id: 5, name: "Scarlet Hour", season: "Autumn/Winter", count: 11, category: "evening",
        desc: "The bold and the brave. Crimson editions for those who arrive and conquer.",
        image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=800&q=80"
    },
    {
        id: 6, name: "Architectural Lines", season: "Pre-Fall", count: 8, category: "couture",
        desc: "Structure as seduction. Geometric forms that redefine the body's architecture.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
    },
];

/* ── Render helpers ── */
function renderProductCard(p) {
    const availClass = p.availability;
    const availLabel = p.availability === 'available' ? 'Available' :
        p.availability === 'limited' ? 'Limited' : 'Rented Out';
    return `
    <article class="product-card card anim-fade-up" data-category="${p.category}" data-id="${p.id}">
      <div class="card-shimmer-over"></div>
      <div class="card-img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <div class="card-overlay">
          <span class="tag tag-gold">${p.tags[0]}</span>
        </div>
        <div class="card-avail">
          <span class="avail-dot ${availClass}"></span>
          <span>${availLabel}</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-designer">${p.designer}</span>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-footer">
          <div class="card-price">
            <span class="price-num">₹${p.price.toLocaleString()}</span>
            <span class="price-unit">/day</span>
          </div>
          <a href="product-detail.html?id=${p.id}" class="btn btn-outline btn-sm">View</a>
        </div>
      </div>
    </article>
  `;
}

function renderCollectionCard(c) {
    return `
    <article class="collection-card anim-scale" data-category="${c.category}">
      <div class="col-img-wrap">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <div class="col-overlay"></div>
      </div>
      <div class="col-content">
        <span class="col-season">${c.season}</span>
        <h3 class="col-name">${c.name}</h3>
        <p class="col-desc">${c.desc}</p>
        <div class="col-meta">
          <span>${c.count} Pieces</span>
          <a href="products.html?collection=${c.id}" class="btn btn-outline btn-sm">Explore</a>
        </div>
      </div>
    </article>
  `;
}

/* ── Filter logic ── */
function initFilters(gridSelector, cardSelector, btnSelector, attrName) {
    const grid = document.querySelector(gridSelector);
    const btns = document.querySelectorAll(btnSelector);
    if (!grid || !btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            const cards = grid.querySelectorAll(cardSelector);
            cards.forEach(card => {
                const match = filter === 'all' || card.dataset[attrName] === filter;
                card.style.transition = 'opacity .4s, transform .4s';
                if (match) {
                    card.style.opacity = '1';
                    card.style.transform = '';
                    card.style.display = '';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(.95)';
                    setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 400);
                }
            });
        });
    });
}

/* ── Export ── */
window.LUXE = window.LUXE || {};
window.LUXE.PRODUCTS = PRODUCTS;
window.LUXE.COLLECTIONS = COLLECTIONS;
window.LUXE.renderProductCard = renderProductCard;
window.LUXE.renderCollectionCard = renderCollectionCard;
window.LUXE.initFilters = initFilters;
