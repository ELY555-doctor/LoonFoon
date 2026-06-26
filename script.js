const categories = [
  {
    id: "fish",
    name: "酸菜鱼",
    english: "Signature Fish Pots",
    items: [
      ["龍鳯酸菜鱼", "LoonFoon Pickled Mustard Fish"],
      ["沸腾椒麻鱼", "Boiling Fish with Green Sichuan Peppercorns"],
      ["红颜番茄鱼", "Tomato Fish Pot"],
      ["香辣美蛙鱼", "Spicy Bullfrog Fish Pot"],
      ["飘香肥肠鱼", "Fish Pot with Pork Intestines"]
    ]
  },
  {
    id: "entree",
    name: "Entree",
    english: "Cold Dishes & Starters",
    items: [
      ["夫妻肺片", "Sliced Beef & Tripe in Chilli Sauce"],
      ["尖叫手撕鸡", "Cold Shredded Chicken"],
      ["香辣拌牛肉", "Spicy Beef Slices in Garlic Sauce & Chilli Oil"],
      ["凉拌木耳", "Fungus Salad", ["veg"]],
      ["五香花生", "Five Spice Peanut", ["veg"]],
      ["蒜泥拍黄瓜", "Smashed Cucumber with Garlic Sesame Oil", ["veg"]],
      ["泡椒无骨鸭掌", "Duck Feet without Bones"],
      ["剁椒豆花皮蛋", "Preserved Egg with Chilli"],
      ["川北凉粉", "Bean Jelly with Chilli Oil"],
      ["香干海带丝", "Seaweed Salad", ["veg"]]
    ]
  },
  {
    id: "main",
    name: "Main Dish",
    english: "House Main Dishes",
    items: [
      ["豪华海鲜鲍鱼毛血旺", "Mao Xue Wang with Abalone"],
      ["青花椒薄切牛舌", "Sliced Beef Tongue with Green Sichuan Peppercorns"],
      ["和牛粒麻婆豆腐", "Mapo Tofu with Wagyu Beef Cubes"],
      ["梅干菜五花肉", "Braised Pork Belly with Preserved Mustard Greens"],
      ["干锅肥肠", "Dry Pot Pork Intestines"],
      ["啃香脆皮猪手", "Fried Pork Trotters"],
      ["干锅猪蹄", "Dry Pot Pork Trotters"],
      ["魔芋烧鸭", "Stir Fried Duck"],
      ["咸蛋黄焗排骨", "Pork Ribs with Salted Egg Yolk"],
      ["咸蛋黄鸡翅", "Fried Chicken Wings with Salted Egg Yolk"],
      ["咸蛋黄虾仁豆腐", "Tofu Prawn with Salted Egg Yolk"],
      ["酸辣鸡胗", "Spicy and Sour Chicken Gizzards"],
      ["辣子鸡", "Stir Fried Spicy Chicken"],
      ["探花丁香骨", "Fried Pork Ribs"],
      ["孜然小羊排", "Fried Lamb with Cumin"],
      ["孜然洋葱羊肉", "Cumin Lamb with Onions"]
    ]
  },
  {
    id: "non-spicy",
    name: "Non-Spicy List",
    english: "Mild & House Specials",
    items: [
      ["酸甜菠萝鸭", "Sweet Sour Duck"],
      ["沙爹羊肉", "Satay Lamb"],
      ["沙爹牛肉", "Satay Beef"],
      ["蒙古牛肉", "Mongolian Beef"],
      ["蜜糖鸡", "Honey Chicken"],
      ["菠萝咕咾肉", "Sweet & Sour Pork with Pineapple"],
      ["腰果鸡丁", "Cashew Chicken"],
      ["宫保鸡丁", "Kong Bao Chicken"],
      ["宫保虾球", "Kong Bao Prawn"],
      ["龍鳯海鲜炒饭", "LoonFoon Seafood Fried Rice"],
      ["猪肉白菜水饺", "Pork Dumpling"],
      ["手作春卷", "Vegan Spring Rolls", ["veg"]],
      ["黑椒牛仔骨", "Black Pepper Beef Short Ribs"],
      ["虾片", "Prawn Crackers"]
    ]
  },
  {
    id: "vegetables",
    name: "Vegetables",
    english: "Vegetable Dishes",
    items: [
      ["干煸四季豆", "Fried Green Beans with Minced Pork and Chilli"],
      ["香菇上海青", "Stir Fried Bok Choy with Mushroom", ["veg"]],
      ["清炒菜心", "Stir Fried Choy Sum with Garlic", ["veg"]],
      ["干锅花菜", "Dry Pot Cauliflower with Bacon"],
      ["虾皮油麦菜", "Sauteed Romaine Lettuce with Garlic"],
      ["酸辣土豆丝", "Hot Sour Shredded Potato", ["veg"]],
      ["干锅鹿茸菌", "Dry Pot Velvet Mushroom with Bacon"],
      ["清炒莴笋", "Stir Fried Asparagus Lettuce", ["veg"]]
    ]
  },
  {
    id: "staple",
    name: "Staple Food",
    english: "Rice, Noodles & Snacks",
    items: [
      ["小米海参羹", "Sea Cucumber Congee with Millet"],
      ["龍鳯海鲜炒饭", "LoonFoon Seafood Fried Rice"],
      ["龍鳯牛肉炒饭", "LoonFoon Beef Fried Rice"],
      ["龍鳯鸡肉炒饭", "LoonFoon Chicken Fried Rice"],
      ["龍鳯素炒饭", "LoonFoon Vege Fried Rice", ["veg"]],
      ["虾片", "Prawn Crackers"],
      ["龍鳯金牌米饭", "Steam Rice", ["veg"]],
      ["鸡丝凉面", "Stirred Cold Noodle with Chicken Slices"],
      ["牛肉炒面", "Beef Fried Noodle"],
      ["川味香辣牛肉面", "LoonFoon Spicy Beef Noodles with Soup"],
      ["鲜汤牛肉面", "LoonFoon Special Beef Noodles with Soup"],
      ["番茄鸡蛋面", "Tomato Egg Noodle Soup", ["veg"]],
      ["鲜肉馄饨", "Pork Wonton with Soup"],
      ["红油抄手", "Sichuan Spicy Wonton with Red Oil"],
      ["肉松炸虾球", "Fried Shrimp Balls"],
      ["现炸小酥肉", "Deep Fried Pork"],
      ["手作春卷", "Vegan Spring Rolls", ["veg"]],
      ["脆皮鲜奶", "Fried Milk Rolls", ["veg"]],
      ["紫米脆滋粑", "Crispy Brown Rice Cake", ["veg"]],
      ["黄金小馒头", "Fried Bun with Condensed Milk", ["veg"]],
      ["沾汤油条", "Fried Dough Stick", ["veg"]]
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    english: "Desserts & Beverages",
    items: [
      ["网红椰子冻", "Coconut Panna Cotta", ["veg"]],
      ["冰柠茶", "Ice Lemon Tea", ["veg"]],
      ["可乐", "Coke", ["veg"]],
      ["零度可乐", "Coke Zero", ["veg"]],
      ["雪碧", "Lemonade", ["veg"]],
      ["Solo", "Solo", ["veg"]],
      ["解腻酸梅汤", "Plum Drink", ["veg"]],
      ["百香果汁", "Passionfruit Drink", ["veg"]],
      ["椰子水", "Coconut Drink", ["veg"]],
      ["椰树椰汁", "Coconut Milk", ["veg"]],
      ["可尔必思", "Calpis", ["veg"]],
      ["豆奶", "Soy Milk", ["veg"]],
      ["佳人冰粉", "Sugar Ice Jelly with Pawpaw", ["veg"]],
      ["北冰洋", "Bei Bing Yang", ["veg"]],
      ["王老吉", "Wang Lao Ji", ["veg"]],
      ["蜂蜜柚子", "Honey Pomelo", ["veg"]],
      ["蜜桃乌龙", "Peach Oolong Tea", ["veg"]],
      ["气泡水", "Sparkling Water", ["veg"]]
    ]
  }
];

const fishOptions = {
  ingredients: [
    ["花刀小鲍鱼", "Abalone"],
    ["肥牛卷", "Beef Slice"],
    ["千页豆腐", "Qianye Tofu"],
    ["金针菇", "Enoki Mushroom"],
    ["龙口粉丝", "Longkou Vermicelli"],
    ["腐竹", "Dried Bean Curd"],
    ["大白菜", "Chinese Cabbage"],
    ["鹌鹑蛋", "Quail Egg"],
    ["鸭血", "Duck Blood"],
    ["午餐肉", "Luncheon Meat"],
    ["另加酸菜", "Extra Sichuan Pickles"],
    ["土豆片", "Potato Slices"],
    ["魔芋丝", "Konjac Knot"],
    ["宽粉", "Wide Vermicelli"],
    ["竹笋", "Bamboo Shoot"],
    ["海带结", "Kelp"]
  ],
  sizes: [
    ["medium", "中份", "两人份"],
    ["large", "大份", "3-4人份"],
    ["feast", "土豪份", "4-5人份"]
  ]
};

const spiceLevels = {
  "龍鳯酸菜鱼": 1,
  "沸腾椒麻鱼": 2,
  "香辣美蛙鱼": 3,
  "飘香肥肠鱼": 2,
  "夫妻肺片": 1,
  "尖叫手撕鸡": 1,
  "香辣拌牛肉": 1,
  "豪华海鲜鲍鱼毛血旺": 1,
  "梅干菜五花肉": 1,
  "干锅肥肠": 1,
  "魔芋烧鸭": 1,
  "剁椒豆花皮蛋": 1,
  "辣子鸡": 1,
  "干锅花菜": 1,
  "酸辣土豆丝": 1,
  "鸡丝凉面": 1,
  "红油抄手": 1
};

const tags = {
  veg: { label: "Vegetarian", className: "tag--veg" }
};

const tabs = document.querySelector("#categoryTabs");
const list = document.querySelector("#categoryList");
const search = document.querySelector("#menuSearch");
const resultCount = document.querySelector("#resultCount");
const clearSearch = document.querySelector("#clearSearch");

const allItemsCount = categories.reduce((sum, category) => sum + category.items.length, 0);

function hashText(text) {
  return Array.from(text).reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 17);
}

function dishImage(chinese, english, categoryId) {
  const hash = hashText(`${chinese}${english}${categoryId}`);
  const palettes = [
    ["#9f1f1a", "#f4b254", "#2f6f4f", "#fff2cf"],
    ["#7c1813", "#e3a52e", "#6c8d3f", "#f6e6c9"],
    ["#b74a20", "#f1d26b", "#3d7b5e", "#fff7e6"],
    ["#8f2520", "#d77832", "#225f52", "#ead7b7"],
    ["#c53d2b", "#f7cc79", "#7fa24e", "#fff0d8"]
  ];
  const [soup, highlight, garnish, plate] = palettes[hash % palettes.length];
  const dots = Array.from({ length: 18 }, (_, index) => {
    const x = 28 + ((hash >> (index % 12)) + index * 37) % 294;
    const y = 28 + ((hash >> ((index + 3) % 12)) + index * 29) % 172;
    const r = 4 + ((hash + index * 11) % 13);
    const color = index % 3 === 0 ? garnish : index % 3 === 1 ? highlight : "#f8ead2";
    return `<ellipse cx="${x}" cy="${y}" rx="${r + 10}" ry="${Math.max(4, r - 1)}" fill="${color}" opacity="${0.72 - (index % 4) * 0.08}" transform="rotate(${(hash + index * 19) % 180} ${x} ${y})"/>`;
  }).join("");
  const steam = categoryId === "drinks" ? "" : `
    <path d="M78 62c-18-22 12-24-3-48" stroke="#fff8ea" stroke-width="5" fill="none" opacity=".45" stroke-linecap="round"/>
    <path d="M150 55c-16-18 12-26-1-42" stroke="#fff8ea" stroke-width="4" fill="none" opacity=".35" stroke-linecap="round"/>
    <path d="M230 62c-18-20 14-26 0-45" stroke="#fff8ea" stroke-width="4" fill="none" opacity=".4" stroke-linecap="round"/>
  `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 232" role="img" aria-label="${chinese} close-up dish image">
      <defs>
        <radialGradient id="plate" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="${plate}"/>
          <stop offset="72%" stop-color="#d7b992"/>
          <stop offset="100%" stop-color="#765036"/>
        </radialGradient>
        <radialGradient id="soup" cx="45%" cy="40%" r="62%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="58%" stop-color="${soup}"/>
          <stop offset="100%" stop-color="#4a1510"/>
        </radialGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="0.45"/>
        </filter>
      </defs>
      <rect width="360" height="232" fill="#302017"/>
      <rect width="360" height="232" fill="${garnish}" opacity=".18"/>
      <ellipse cx="180" cy="126" rx="158" ry="88" fill="url(#plate)"/>
      <ellipse cx="180" cy="118" rx="132" ry="68" fill="url(#soup)"/>
      <ellipse cx="120" cy="86" rx="54" ry="17" fill="#fff8df" opacity=".8" transform="rotate(-14 120 86)"/>
      <ellipse cx="218" cy="142" rx="62" ry="18" fill="#f7d7a6" opacity=".72" transform="rotate(18 218 142)"/>
      ${dots}
      <circle cx="${70 + (hash % 210)}" cy="${62 + (hash % 92)}" r="10" fill="#d9251d" opacity=".85"/>
      <circle cx="${90 + (hash % 188)}" cy="${88 + (hash % 72)}" r="7" fill="#f6d36c" opacity=".82"/>
      ${steam}
      <ellipse cx="180" cy="196" rx="130" ry="12" fill="#180d09" opacity=".24" filter="url(#soft)"/>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function itemMatches(item, query) {
  if (!query) return true;
  return `${item[0]} ${item[1]}`.toLowerCase().includes(query);
}

function pepperMarkup(level = 0) {
  if (!level) return "";
  return `
    <span class="peppers" aria-label="${level} chilli spice level">
      ${Array.from({ length: level }, () => `<span class="pepper-icon" aria-hidden="true"></span>`).join("")}
    </span>
  `;
}

function tagMarkup(tagIds = []) {
  if (!tagIds.length) return "";
  return `
    <div class="tags">
      ${tagIds.map((tagId) => `<span class="tag ${tags[tagId].className}">${tags[tagId].label}</span>`).join("")}
    </div>
  `;
}

function dishTitleMarkup(item, categoryId) {
  const [chinese, english] = item;
  const pepper = pepperMarkup(spiceLevels[chinese]);

  if (categoryId === "non-spicy") {
    return `
      <h3 class="dish__english dish__english--primary">
        <span>${english}</span>
        ${pepper}
      </h3>
      <p class="dish__chinese dish__chinese--secondary">${chinese}</p>
    `;
  }

  return `
    <h3 class="dish__chinese">
      <span>${chinese}</span>
      ${pepper}
    </h3>
    <p class="dish__english">${english}</p>
  `;
}

function renderFishCustomizer() {
  return `
    <section class="fish-customizer" aria-label="酸菜鱼选择">
      <div class="option-section">
        <div class="option-heading">
          <h3>选择 Ingredients</h3>
          <span>酸菜鱼加配菜</span>
        </div>
        <div class="option-grid">
          ${fishOptions.ingredients.map(([chinese, english]) => `
            <label class="option-chip">
              <input type="checkbox">
              <span>${chinese}</span>
              <small>${english}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="option-section option-section--compact">
        <div class="option-heading">
          <h3>选择分量</h3>
          <span>Serving size</span>
        </div>
        <div class="size-options">
          ${fishOptions.sizes.map(([value, chinese, english], index) => `
            <label class="size-card">
              <input type="radio" name="fish-size" value="${value}" ${index === 0 ? "checked" : ""}>
              <span>${chinese}</span>
              <small>${english}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="option-section option-section--compact">
        <div class="option-heading">
          <h3>升级鲈鱼片</h3>
          <span>Barramundi fillet upgrade</span>
        </div>
        <label class="upgrade-toggle">
          <input type="checkbox">
          <span>选择升级鲈鱼片</span>
        </label>
      </div>
    </section>
  `;
}

function renderTabs(activeId = "all") {
  const tabData = [{ id: "all", name: "All", english: "All Menu" }, ...categories];

  tabs.innerHTML = tabData.map((category) => `
    <button class="tab" type="button" data-category="${category.id}" aria-selected="${category.id === activeId}">
      ${category.name}
    </button>
  `).join("");
}

function renderMenu(activeId = "all") {
  const query = search.value.trim().toLowerCase();
  let visibleCount = 0;

  const visibleCategories = categories
    .filter((category) => activeId === "all" || category.id === activeId)
    .map((category) => {
      const items = category.items.filter((item) => itemMatches(item, query));
      visibleCount += items.length;
      return { ...category, items };
    })
    .filter((category) => category.items.length);

  if (!visibleCategories.length) {
    list.innerHTML = `<div class="empty-state">No dishes found. Try another keyword.</div>`;
  } else {
    list.innerHTML = visibleCategories.map((category) => `
      <article class="category-section" id="${category.id}">
        <div class="category-heading">
          <div>
            <h2>${category.name}</h2>
            <span>${category.english}</span>
          </div>
          <span class="category-count">${category.items.length} items</span>
        </div>
        ${category.id === "fish" ? renderFishCustomizer() : ""}
        <div class="dish-grid">
          ${category.items.map((item) => `
            <article class="dish">
              <img class="dish__image" src="${dishImage(item[0], item[1], category.id)}" alt="${item[0]} close-up dish image" loading="lazy">
              <div class="dish__body">
                <div>
                  ${dishTitleMarkup(item, category.id)}
                </div>
                ${tagMarkup(item[2])}
              </div>
            </article>
          `).join("")}
        </div>
      </article>
    `).join("");
  }

  resultCount.textContent = query || activeId !== "all"
    ? `${visibleCount} of ${allItemsCount} dishes shown`
    : `${allItemsCount} dishes`;
}

let activeCategory = "all";

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderTabs(activeCategory);
  renderMenu(activeCategory);
});

search.addEventListener("input", () => renderMenu(activeCategory));

clearSearch.addEventListener("click", () => {
  search.value = "";
  activeCategory = "all";
  renderTabs(activeCategory);
  renderMenu(activeCategory);
  search.focus();
});

renderTabs();
renderMenu();
