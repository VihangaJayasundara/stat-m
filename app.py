"""
Streamlit wrapper for the Customer Retention Intelligence Dashboard.

This app reads the pre-built Vite production bundle from ./dist/,
inlines all CSS and JS assets into a self-contained HTML string,
and renders it inside a full-height Streamlit component.

No project source files are modified — this file is a deployment shim only.
"""

import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

# ---------------------------------------------------------------------------
# Page config — minimal chrome so the dashboard fills the full viewport
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title="Customer Priorities & Revenue Opportunities | Executive Decision Support",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ---------------------------------------------------------------------------
# Hide Streamlit chrome (header, footer, padding) so the embedded app
# fills the viewport like a standalone web app.
# ---------------------------------------------------------------------------
st.markdown(
    """
    <style>
        /* Remove default Streamlit top padding */
        .block-container { padding: 0 !important; max-width: 100% !important; }
        /* Hide Streamlit toolbar / footer */
        header[data-testid="stHeader"] { display: none !important; }
        footer { display: none !important; }
        #MainMenu { display: none !important; }
        /* Ensure iframe fills viewport */
        iframe { border: none !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

# ---------------------------------------------------------------------------
# Load built assets from dist/
# ---------------------------------------------------------------------------
DIST_DIR = Path(__file__).parent / "dist"
ASSETS_DIR = DIST_DIR / "assets"


def _load_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


# Find the built CSS and JS files (Vite adds a hash to filenames)
css_files = sorted(ASSETS_DIR.glob("*.css"))
js_files = sorted(ASSETS_DIR.glob("*.js"))

if not css_files or not js_files:
    st.error(
        "Could not find built assets in `./dist/assets/`. "
        "Please run `npm run build` in the project root first."
    )
    st.stop()

css_content = "\n".join(_load_text(f) for f in css_files)
js_content = "\n".join(_load_text(f) for f in js_files)

# ---------------------------------------------------------------------------
# Build a fully self-contained HTML document by inlining CSS + JS.
# The original index.html references assets via absolute paths which don't
# work inside Streamlit's sandboxed iframe, so we inline them directly.
# ---------------------------------------------------------------------------
html_document = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Customer Priorities &amp; Revenue Opportunities - Executive Decision Support Dashboard for Customer Retention &amp; Revenue Prioritization." />
  <title>Customer Priorities &amp; Revenue Opportunities | Executive Decision Support</title>
  <style>
{css_content}
  </style>
</head>
<body>
  <div class="app-shell">
    <!-- Dark Executive Sidebar -->
    <aside id="sidebar" class="sidebar" role="complementary" aria-label="Business Filters"></aside>

    <!-- Main Content Canvas -->
    <main id="main-content" class="main-content" role="main"></main>
  </div>

  <script type="module">
{js_content}
  </script>
</body>
</html>"""

# ---------------------------------------------------------------------------
# Render — use a tall fixed height so the full dashboard is visible.
# scrolling=True lets the user scroll within the iframe if needed.
# ---------------------------------------------------------------------------
components.html(html_document, height=900, scrolling=True)
