# ============================================================
# Polgün Waterparks — Eski URL'ler İçin Redirect Yapılandırması
# ============================================================
# Bu dosyayı sunucunuzun yapılandırmasına ekleyin.
# Sunucu tipinize göre aşağıdan uygun olanı seçin.
#
# ÖNEMLİ: Siteniz bir SPA (Single Page Application) olduğu için
# iki katmanlı çözüm gerekiyor:
#   1. Sunucu tarafı redirect (bu dosya)
#   2. React Router redirect (App.jsx'e zaten eklendi)
# ============================================================


# ─────────────────────────────────────────────────
# SEÇENEK 1: NGINX
# ─────────────────────────────────────────────────
# nginx.conf veya site config dosyanıza ekleyin:

# server {
#     listen 80;
#     server_name www.polgunwaterparks.com polgunwaterparks.com;
#
#     root /var/www/polgunwaterparks/dist;
#     index index.html;
#
#     # --- Eski URL'leri 301 redirect ile yönlendir ---
#     location ~ ^/(tr|en|es|ru|ar|fr|zh)/ {
#         return 301 /;
#     }
#
#     # --- SPA fallback (tüm route'lar index.html'e) ---
#     location / {
#         try_files $uri $uri/ /index.html;
#     }
# }


# ─────────────────────────────────────────────────
# SEÇENEK 2: APACHE (.htaccess)
# ─────────────────────────────────────────────────
# dist/ klasörünün içine .htaccess dosyası olarak koyun:

# RewriteEngine On
#
# # Eski dil-prefixli URL'leri ana sayfaya 301 redirect
# RewriteRule ^(tr|en|es|ru|ar|fr|zh)/.* / [R=301,L]
#
# # SPA fallback
# RewriteCond %{REQUEST_FILENAME} !-f
# RewriteCond %{REQUEST_FILENAME} !-d
# RewriteRule . /index.html [L]


# ─────────────────────────────────────────────────
# SEÇENEK 3: NETLIFY (_redirects)
# ─────────────────────────────────────────────────
# public/ klasörüne _redirects dosyası olarak koyun:

# /tr/*    /    301!
# /en/*    /    301!
# /es/*    /    301!
# /ru/*    /    301!
# /ar/*    /    301!
# /fr/*    /    301!
# /zh/*    /    301!
# /*       /index.html   200


# ─────────────────────────────────────────────────
# SEÇENEK 4: VERCEL (vercel.json)
# ─────────────────────────────────────────────────
# Proje kökünde vercel.json:

# {
#   "redirects": [
#     { "source": "/tr/:path*", "destination": "/", "permanent": true },
#     { "source": "/en/:path*", "destination": "/", "permanent": true },
#     { "source": "/es/:path*", "destination": "/", "permanent": true },
#     { "source": "/ru/:path*", "destination": "/", "permanent": true },
#     { "source": "/ar/:path*", "destination": "/", "permanent": true },
#     { "source": "/fr/:path*", "destination": "/", "permanent": true },
#     { "source": "/zh/:path*", "destination": "/", "permanent": true }
#   ],
#   "rewrites": [
#     { "source": "/((?!api|uploads|assets).*)", "destination": "/index.html" }
#   ]
# }
