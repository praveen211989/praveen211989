/**
 * Praveen Kumar Pandey - Profile Webpage Interactions
 * Android Framework & Systems Specialist Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initArchStack();
  initCompetencyFilters();
  initCopyActions();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('pkp_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', targetTheme);
      localStorage.setItem('pkp_theme', targetTheme);
    });
  }
}

/* ==========================================================================
   2. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
      }
    });
  }
}

/* ==========================================================================
   3. Interactive Android Architecture Stack
   ========================================================================== */
const archData = {
  apps: {
    badge: 'L5 System Apps & Framework',
    title: 'System Applications & Core Framework Services',
    content: `
      <p>Praveen architects and maintains core Android framework components, system services, and device-critical applications:</p>
      <ul>
        <li><strong>NFC System Application:</strong> High-performance Java/Kotlin applications orchestrating NFC interactions, tag dispatch, card emulation routing, and user settings across Samsung portfolios.</li>
        <li><strong>FOTA DM Clients:</strong> Owned carrier-grade Firmware Over-The-Air solutions for tier-1 North American and global carriers at LG Soft.</li>
        <li><strong>SmartCA Framework:</strong> Architecture and maintenance of carrier adaptation framework for multi-region configurations across North America, Europe, and Asia.</li>
        <li><strong>Custom Android SDKs:</strong> Designing stable, backward-compatible API surfaces for internal teams and OEM ecosystem partners.</li>
      </ul>
    `,
    tags: ['Java', 'System Services', 'NFC App', 'FOTA', 'SmartCA', 'Custom SDK']
  },
  ipc: {
    badge: 'L4 IPC & Security Boundary',
    title: 'Binder IPC & SELinux Security Policies',
    content: `
      <p>Hardening communication boundaries and inter-process transactions between privileged system services:</p>
      <ul>
        <li><strong>Binder IPC Transactions:</strong> High-throughput, low-latency inter-process communication handling multi-client NFC dispatch and status callbacks.</li>
        <li><strong>AIDL Interface Design:</strong> Authoring resilient, version-stable AIDL interfaces for modern Android HAL and system services.</li>
        <li><strong>HIDL to AIDL Migration:</strong> Migrated legacy HIDL interfaces to stable AIDL across major Android platform upgrades.</li>
        <li><strong>SELinux Policy Authoring:</strong> Resolving critical platform denial audits (avc denials), defining domain types, and enforcing strict security posture for privileged native daemons.</li>
      </ul>
    `,
    tags: ['Binder IPC', 'AIDL', 'HIDL', 'SELinux Policies', 'te files', 'Security Hardening']
  },
  middleware: {
    badge: 'L3 Native Middleware & Modular APEX',
    title: 'Native C++ Middleware & APEX Modularization',
    content: `
      <p>Engineering low-latency native middleware and decoupling platform dependencies through APEX containers:</p>
      <ul>
        <li><strong>Native C++ NFC Middleware:</strong> Architectural ownership of protocol handlers, transaction managers, Host Card Emulation (HCE), and reader mode dispatchers.</li>
        <li><strong>APEX Containerization:</strong> Architected the transition of NFC stack components into modular APEX packages, slashing OEM technical debt and enabling modular platform updates.</li>
        <li><strong>High-Concurrency Concurrency:</strong> Advanced multithreading, POSIX threads, event loops, and synchronization for jitter-free NFC card transactions.</li>
        <li><strong>Memory & Performance Optimization:</strong> Zero-leak native lifecycle management across millions of deployed consumer units.</li>
      </ul>
    `,
    tags: ['Native C++', 'APEX Containers', 'NFC Middleware', 'POSIX Concurrency', 'HCE', 'Reader Mode']
  },
  hal: {
    badge: 'L2 Hardware Abstraction Layer',
    title: 'AIDL/HIDL HAL & Vendor Silicon Interfaces',
    content: `
      <p>Bridging Android system frameworks with vendor hardware controllers (NFC chips, secure elements):</p>
      <ul>
        <li><strong>HAL Interface Architecture:</strong> Defining and implementing native AIDL/HIDL HAL interfaces to bridge upper-layer middleware with vendor silicon.</li>
        <li><strong>Hardware Bring-up Workflow:</strong> Engineered an automated module bring-up workflow, slashing device bring-up from <strong>2 hours to 10 minutes per model</strong>.</li>
        <li><strong>Multi-Vendor Controller Support:</strong> Interfacing with major silicon vendors (NXP, Samsung LSI, Broadcom) across flagship and mass-tier models.</li>
        <li><strong>Hardware Error Recovery:</strong> Resilient watchdog routines, crash recovery, and automated subsystem reset mechanisms.</li>
      </ul>
    `,
    tags: ['AIDL HAL', 'HIDL Migration', 'Bring-up Automation', 'Vendor Interface', 'Silicon Drivers']
  },
  build: {
    badge: 'L1 Build System & Compliance Verification',
    title: 'Soong Build Engine, CTS/VTS & Mobly Automation',
    content: `
      <p>Governing the compilation toolchain and automated compliance across Android platform generations:</p>
      <ul>
        <li><strong>Modern Android Build Systems:</strong> Authoring and optimizing Soong (<code>Android.bp</code>) and legacy Make (<code>Android.mk</code>) build system configurations for libraries, APEX modules, and tests.</li>
        <li><strong>Mobly Automation Framework:</strong> Designed and deployed a Mobly-based self-verification framework, automating 2 hours of manual testing down to <strong>30 minutes</strong>.</li>
        <li><strong>Platform Compliance:</strong> Ensuring 100% pass rates for CTS (Compatibility Test Suite), CTS-Verifier, and VTS (Vendor Test Suite) on every OS version bump.</li>
        <li><strong>AI LLM Acceleration:</strong> Integrating Claude, Codex, and Gemini into triage pipelines to analyze build logs, parse stack traces, and synthesize test cases.</li>
      </ul>
    `,
    tags: ['Soong (Android.bp)', 'Android.mk', 'CTS', 'CTS-Verifier', 'VTS', 'Mobly Automation', 'AI Acceleration']
  }
};

function initArchStack() {
  const layers = document.querySelectorAll('.arch-layer');
  const badgeEl = document.getElementById('detailBadge');
  const titleEl = document.getElementById('detailTitle');
  const bodyEl = document.getElementById('detailBody');

  if (!layers.length || !badgeEl || !titleEl || !bodyEl) return;

  function updateLayer(layerKey) {
    const data = archData[layerKey];
    if (!data) return;

    // Update active layer UI
    layers.forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-layer') === layerKey);
    });

    // Animate content swap
    badgeEl.textContent = data.badge;
    titleEl.textContent = data.title;
    
    let tagsHtml = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
    bodyEl.innerHTML = `${data.content}<div class="detail-tags">${tagsHtml}</div>`;
  }

  layers.forEach(layer => {
    layer.addEventListener('click', () => {
      const key = layer.getAttribute('data-layer');
      updateLayer(key);
    });
  });
}

/* ==========================================================================
   4. Competency Filtering
   ========================================================================== */
function initCompetencyFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.comp-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Copy to Clipboard with Toast Notification
   ========================================================================== */
function initCopyActions() {
  const copyElements = document.querySelectorAll('.copy-action');
  const toast = document.getElementById('toast');

  if (!copyElements.length || !toast) return;

  let toastTimer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  copyElements.forEach(el => {
    el.addEventListener('click', async () => {
      const textToCopy = el.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied "${textToCopy}"!`);
        } catch (e) {
          showToast('Failed to copy');
        }
        document.body.removeChild(textarea);
      }
    });
  });
}

/* ==========================================================================
   6. Scroll Spy for Navigation Links
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
}
