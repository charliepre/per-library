document.addEventListener("DOMContentLoaded", () => {
  const menuMarkup = `
    <button
      class="menu-button"
      type="button"
      aria-label="メニューを開く"
      aria-controls="side-menu"
      aria-expanded="false"
    >
      <span class="menu-button-line"></span>
      <span class="menu-button-line"></span>
      <span class="menu-button-line"></span>
    </button>

    <div class="menu-overlay" aria-hidden="true"></div>

    <aside
      id="side-menu"
      class="side-menu"
      aria-label="サイトメニュー"
      aria-hidden="true"
    >
      <div class="side-menu-header">
        <div>
          <h2 class="side-menu-title">
            Charlie's Educational Materials
          </h2>

          <p class="side-menu-subtitle">
            SITE MENU
          </p>
        </div>

        <button
          class="menu-close-button"
          type="button"
          aria-label="メニューを閉じる"
        >
          ×
        </button>
      </div>

      <nav class="side-menu-nav">
        <ul class="menu-list">
          <li>
            <a class="menu-link" href="index.html">
              <span class="menu-link-ja">ホーム</span>
              <span class="menu-link-en" lang="en">Home</span>
            </a>
          </li>

          <li>
            <p class="menu-section-label">
              EDUCATIONAL MATERIALS
            </p>

            <ul class="menu-sublist">
              <li>
                <a class="menu-link" href="university-entrance-exam.html">
                  <span class="menu-link-ja">大学受験関連</span>
                  <span class="menu-link-en" lang="en">
                    University Entrance Examination
                  </span>
                </a>
              </li>

              <li>
                <a class="menu-link" href="university-math.html">
                  <span class="menu-link-ja">大学数学</span>
                  <span class="menu-link-en" lang="en">
                    University Mathematics
                  </span>
                </a>
              </li>

              <li>
                <a class="menu-link" href="other.html">
                  <span class="menu-link-ja">その他</span>
                  <span class="menu-link-en" lang="en">
                    Other Materials
                  </span>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <p class="menu-section-label">
              ARTICLES AND SUPPORT
            </p>

            <ul class="menu-sublist">
              <li>
                <a class="menu-link" href="articles.html">
                  <span class="menu-link-ja">記事</span>
                  <span class="menu-link-en" lang="en">Articles</span>
                </a>
              </li>

              <li>
                <a class="menu-link" href="report-error.html">
                  <span class="menu-link-ja">誤り・不具合の報告</span>
                  <span class="menu-link-en" lang="en">
                    Report an Error
                  </span>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a class="menu-link" href="terms.html">
              <span class="menu-link-ja">著作権・利用条件</span>
              <span class="menu-link-en" lang="en">
                Copyright and Terms of Use
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `;

  document.body.insertAdjacentHTML("afterbegin", menuMarkup);

  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".menu-close-button");
  const sideMenu = document.querySelector(".side-menu");
  const overlay = document.querySelector(".menu-overlay");

  if (!menuButton || !closeButton || !sideMenu || !overlay) {
    return;
  }

  const openMenu = () => {
    sideMenu.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    sideMenu.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");

    closeButton.focus();
  };

  const closeMenu = () => {
    sideMenu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    sideMenu.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");

    menuButton.focus();
  };

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sideMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  sideMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("is-open");
      overlay.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
});
