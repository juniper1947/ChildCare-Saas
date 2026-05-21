(function () {
  const appState = {
    currentScreen: "landing",
  };

  const product = {
    brand: "Childcare Operations Cloud",
    program: "Simple software for childcare owners",
    tagline: "Run your childcare center with less stress and more control.",
    description:
      "Keep your child records, staff details, billing, forms, and daily tasks in one easy place, so your team can work faster and your center stays organized.",
    pricing: "One-time setup plus a monthly plan",
  };

  const metrics = [
    { label: "Built for", value: "Owners", note: "Made for childcare owners, operators, and center leaders." },
    { label: "How you earn", value: "Monthly income", note: "Charge a setup fee first, then a monthly plan." },
    { label: "Who uses it", value: "Your team", note: "Admins and staff use it every day to run the center." },
  ];

  const tiers = [
    {
      name: "Starter",
      price: "$299/mo",
      setup: "$1,500 one-time setup",
      note: "A good fit for one center that wants a simple, organized system.",
      items: ["1 center", "Owner and staff logins", "Child and parent records", "Basic reports"],
    },
    {
      name: "Growth",
      price: "$599/mo",
      setup: "$3,000 one-time setup",
      note: "A good fit for a growing business that needs more access and better tracking.",
      items: ["Up to 3 centers", "Different staff access levels", "Billing and form uploads", "Priority support"],
    },
    {
      name: "Multi-Site",
      price: "$1,200+/mo",
      setup: "Custom setup",
      note: "A good fit for groups with several locations and more complex needs.",
      items: ["Multiple locations", "Custom center workflows", "Advanced reports", "Hands-on support"],
    },
  ];

  const toolsRunningService = [
    { title: "Website and dashboard", note: "The main screens your customers use to manage their center." },
    { title: "Login system", note: "Safe sign-in for owners, managers, and staff." },
    { title: "Records storage", note: "Stores children, parents, staff, billing, and daily activity." },
    { title: "File uploads", note: "Keeps forms, documents, receipts, and child files in one place." },
    { title: "Payments", note: "Handles setup fees, monthly billing, and payment reminders." },
    { title: "Email messages", note: "Sends receipts, invites, reminders, and account notices." },
    { title: "Hosting", note: "Keeps the system online so clients can use it anytime." },
    { title: "Usage tracking", note: "Shows which clients are active, growing, or need help." },
  ];

  const recordsManaged = [
    "Business accounts and monthly plans",
    "Centers, rooms, and locations",
    "Staff members and access levels",
    "Children and parent records",
    "Enrollment and attendance details",
    "Invoices, payments, and account status",
    "Uploaded forms and documents",
    "Notes, updates, and activity history",
  ];

  const ownerFlow = [
    "The owner books a demo or contacts you",
    "You show the package and choose the best plan",
    "The owner pays the one-time setup fee",
    "You create their account and prepare the center setup",
    "Their team adds children, staff, billing, and forms",
    "The monthly plan starts automatically",
    "The system sends billing reminders and payment alerts when needed",
  ];

  const clientRecords = [
    { name: "Bright Start Center", status: "Running well", activity: "2 locations, payments healthy" },
    { name: "Little Oaks Academy", status: "Getting started", activity: "Staff and child records being added" },
    { name: "Sunrise Learning Hub", status: "Needs attention", activity: "Monthly payment retry pending" },
    { name: "Happy Steps Childcare", status: "Running well", activity: "Owner checks the dashboard daily" },
  ];

  const operationsTasks = [
    { title: "Add client records", note: "Bring in children, staff, and parent information for the new account." },
    { title: "Set up billing", note: "Turn on the setup payment and monthly plan." },
    { title: "Train the team", note: "Show the owner and staff how to use the main daily screens." },
  ];

  function metricTiles() {
    return metrics
      .map(
        (metric) => `
          <article class="metric">
            <span class="eyebrow">${metric.label}</span>
            <strong>${metric.value}</strong>
            <p>${metric.note}</p>
          </article>
        `
      )
      .join("");
  }

  function tierCards() {
    return tiers
      .map(
        (tier) => `
          <article class="feature-band pricing-tier">
            <span class="eyebrow">${tier.name}</span>
            <h3>${tier.price}</h3>
            <p class="tier-setup">${tier.setup}</p>
            <p>${tier.note}</p>
            <div class="stack-list compact-stack">
              ${tier.items.map((item) => `<div class="stack-item">${item}</div>`).join("")}
            </div>
          </article>
        `
      )
      .join("");
  }

  function stackCards(items) {
    return items.map((item) => `<div class="stack-item">${item}</div>`).join("");
  }

  function toolCards() {
    return toolsRunningService
      .map(
        (item) => `
          <article class="list-card">
            <h4>${item.title}</h4>
            <p>${item.note}</p>
          </article>
        `
      )
      .join("");
  }

  function flowCards() {
    return ownerFlow
      .map(
        (step, index) => `
          <div class="step-item">
            <strong>${index + 1}</strong>
            <span>${step}</span>
          </div>
        `
      )
      .join("");
  }

  function clientRows() {
    return clientRecords
      .map(
        (client) => `
          <tr>
            <td>${client.name}</td>
            <td>${client.status}</td>
            <td>${client.activity}</td>
          </tr>
        `
      )
      .join("");
  }

  function operationsCards() {
    return operationsTasks
      .map(
        (task) => `
          <article class="list-card">
            <h4>${task.title}</h4>
            <p>${task.note}</p>
          </article>
        `
      )
      .join("");
  }

  function landingView() {
    return `
      <section class="hero-section page-shell">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">Childcare software for owners</span>
            <h1>${product.tagline}</h1>
            <p class="lead">${product.description}</p>
            <div class="hero-actions">
              <button class="primary-btn" data-nav="pricing">See plans and pricing</button>
              <button class="ghost-btn" data-nav="payment-flow">See how clients pay</button>
            </div>
            <div class="metric-row">
              ${metricTiles()}
            </div>
          </div>
          <aside class="pricing-panel">
            <span class="eyebrow">What you sell</span>
            <h2>${product.program}</h2>
            <p class="price">${product.pricing}</p>
            <p class="soft-copy">You run the service, your client pays for access, and their team uses it to manage the center every day.</p>
            <div class="stack-list">
              <div class="stack-item">Charge once for setup and training</div>
              <div class="stack-item">Charge every month for continued access</div>
              <div class="stack-item">Offer extra help, more locations, or custom work as add-ons</div>
            </div>
            <button class="primary-btn full-btn" data-nav="backend">See what runs the service</button>
          </aside>
        </div>
      </section>

      <section class="content-section page-shell">
        <div class="section-head">
          <div>
            <span class="eyebrow">Big promise</span>
            <h2>Help childcare owners feel organized, calm, and in control.</h2>
          </div>
          <p>This should feel like a business tool that saves time, reduces confusion, and makes daily work easier for the whole team.</p>
        </div>
        <div class="feature-grid">
          <article class="feature-band">
            <span class="eyebrow">Clear records</span>
            <h3>Keep everything in one place</h3>
            <p>No more jumping between spreadsheets, chats, paper files, and scattered folders.</p>
          </article>
          <article class="feature-band">
            <span class="eyebrow">Easier billing</span>
            <h3>Get paid with less chasing</h3>
            <p>Make setup payments, monthly billing, and payment follow-up much easier to manage.</p>
          </article>
          <article class="feature-band">
            <span class="eyebrow">Stronger daily flow</span>
            <h3>Give the team a simpler routine</h3>
            <p>Let owners and staff know what to do next without needing technical training.</p>
          </article>
        </div>
      </section>
    `;
  }

  function pricingView() {
    return `
      <section class="content-section page-shell">
        <div class="section-head">
          <div>
            <span class="eyebrow">Simple pricing</span>
            <h2>Start with setup, then move to a monthly plan.</h2>
          </div>
          <p>This gives you cash up front for the work and steady monthly income after the account is live.</p>
        </div>
        <div class="feature-grid">
          ${tierCards()}
        </div>
        <div class="section-head pricing-note">
          <p>Extra add-ons can include more locations, custom reports, extra training, premium support, and branded screens.</p>
        </div>
      </section>
    `;
  }

  function backendView() {
    return `
      <section class="workspace-section page-shell">
        <div class="workspace-head">
          <div>
            <span class="eyebrow">What runs the service</span>
            <h2>The tools working behind the scenes</h2>
            <p>You take care of the service and connections in the background while the childcare team uses the simple day-to-day screens.</p>
          </div>
          <div class="toolbar">
            <button class="ghost-btn" data-nav="pricing">Back to pricing</button>
            <button class="primary-btn" data-nav="payment-flow">See how clients pay</button>
          </div>
        </div>
        <div class="workspace-grid">
          <article class="content-panel">
            <div class="section-head compact">
              <div>
                <span class="eyebrow">Main tools</span>
                <h3>What you need to keep the service running</h3>
              </div>
            </div>
            <div class="stack-list">
              ${toolCards()}
            </div>
          </article>
          <aside class="support-column">
            <article class="content-panel">
              <span class="eyebrow">Main records</span>
              <div class="stack-list">
                ${stackCards(recordsManaged)}
              </div>
            </article>
          </aside>
        </div>
      </section>
    `;
  }

  function paymentFlowView() {
    return `
      <section class="content-section page-shell">
        <div class="section-head">
          <div>
            <span class="eyebrow">How clients pay</span>
            <h2>Sell the service once, then bill every month.</h2>
          </div>
          <p>The owner pays you as a business customer. After that, their team adds the records and uses the service for daily work.</p>
        </div>
        <div class="split-stage">
          <article class="hero-copy">
            <span class="eyebrow">Owner journey</span>
            <h3>A simple path from first sale to monthly income.</h3>
            <div class="step-list">
              ${flowCards()}
            </div>
          </article>
          <article class="form-panel">
            <span class="eyebrow">Billing setup</span>
            <div class="stack-list">
              <div class="stack-item">Take the one-time setup payment</div>
              <div class="stack-item">Start the monthly plan automatically</div>
              <div class="stack-item">Send payment reminders when needed</div>
              <div class="stack-item">Warn the client before access is limited for non-payment</div>
            </div>
            <button class="primary-btn full-btn" data-nav="dashboard">Open your owner view</button>
          </article>
        </div>
      </section>
    `;
  }

  function dashboardView() {
    return `
      <section class="workspace-section page-shell">
        <div class="workspace-head">
          <div>
            <span class="eyebrow">Your owner view</span>
            <h2>See who is active, who is still setting up, and who needs follow-up.</h2>
            <p>This is your business view for tracking paying clients, setup progress, and monthly income health.</p>
          </div>
          <div class="toolbar">
            <button class="ghost-btn" data-nav="backend">See service tools</button>
            <button class="primary-btn" data-nav="admin">Open a center account</button>
          </div>
        </div>
        <div class="metric-row">
          <article class="metric">
            <span class="eyebrow">Monthly income goal</span>
            <strong>$5,000+</strong>
            <p>Very possible once a few clients stay on recurring plans.</p>
          </article>
          <article class="metric">
            <span class="eyebrow">New setups</span>
            <strong>3 accounts</strong>
            <p>Example new clients getting their center set up.</p>
          </article>
          <article class="metric">
            <span class="eyebrow">Payment follow-up</span>
            <strong>1 alert</strong>
            <p>One account needs a billing reminder right now.</p>
          </article>
        </div>
        <div class="workspace-grid">
          <article class="content-panel">
            <div class="section-head compact">
              <div>
                <span class="eyebrow">Client list</span>
                <h3>Which businesses are doing well and which need help</h3>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>Business</th>
                  <th>Status</th>
                  <th>Latest note</th>
                </tr>
              </thead>
              <tbody>
                ${clientRows()}
              </tbody>
            </table>
          </article>
          <aside class="support-column">
            <article class="content-panel">
              <span class="eyebrow">To-do list</span>
              <div class="stack-list">
                ${operationsCards()}
              </div>
            </article>
          </aside>
        </div>
      </section>
    `;
  }

  function adminView() {
    return `
      <section class="workspace-section page-shell">
        <div class="workspace-head">
          <div>
            <span class="eyebrow">Center account</span>
            <h2>This is where the owner and staff manage the center day by day.</h2>
            <p>Your client team adds the records here, while you keep the service, payments, and updates running in the background.</p>
          </div>
          <div class="toolbar">
            <button class="ghost-btn">Upload records</button>
            <button class="primary-btn">View monthly plan</button>
          </div>
        </div>
        <div class="workspace-grid">
          <article class="content-panel">
            <div class="section-head compact">
              <div>
                <span class="eyebrow">What the center adds</span>
                <h3>The everyday information their team manages</h3>
              </div>
            </div>
            <div class="stack-list">
              ${stackCards([
                "Children profiles and enrollment details",
                "Parent contacts and approved pickups",
                "Staff accounts and work schedules",
                "Attendance and room assignments",
                "Invoices, payment notes, and account history",
                "Forms, files, and center documents",
              ])}
            </div>
          </article>
          <aside class="support-column">
            <article class="content-panel">
              <span class="eyebrow">What you handle</span>
              <div class="stack-list">
                ${stackCards([
                  "Keep the system online and secure",
                  "Manage logins, billing, and file storage",
                  "Watch for payment issues and account problems",
                  "Send updates and support fixes",
                ])}
              </div>
            </article>
          </aside>
        </div>
      </section>
    `;
  }

  const screens = {
    landing: landingView,
    pricing: pricingView,
    backend: backendView,
    "payment-flow": paymentFlowView,
    dashboard: dashboardView,
    admin: adminView,
  };

  function shell(content) {
    return `
      <div class="app-shell">
        <header class="topbar">
          <div class="page-shell topbar-inner">
            <button class="brand-lockup" data-nav="landing" aria-label="Go to landing page">
              <span class="brand-mark">Built in GPT</span>
              <strong>${product.brand}</strong>
            </button>
            <nav class="topnav" aria-label="Main navigation">
              <button class="nav-btn ${appState.currentScreen === "landing" ? "active" : ""}" data-nav="landing">Overview</button>
              <button class="nav-btn ${appState.currentScreen === "pricing" ? "active" : ""}" data-nav="pricing">Pricing</button>
              <button class="nav-btn ${appState.currentScreen === "backend" ? "active" : ""}" data-nav="backend">How It Runs</button>
              <button class="nav-btn ${appState.currentScreen === "payment-flow" ? "active" : ""}" data-nav="payment-flow">How Clients Pay</button>
              <button class="nav-btn ${appState.currentScreen === "dashboard" ? "active" : ""}" data-nav="dashboard">Your View</button>
              <button class="nav-btn ${appState.currentScreen === "admin" ? "active" : ""}" data-nav="admin">Center View</button>
            </nav>
          </div>
        </header>
        <main>
          ${content}
        </main>
      </div>
    `;
  }

  function bindNavigation() {
    const controls = document.querySelectorAll("[data-nav]");
    controls.forEach((control) => {
      control.addEventListener("click", function () {
        const target = control.getAttribute("data-nav");
        if (!target) return;
        appState.currentScreen = target;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function render() {
    const app = document.getElementById("app");
    const view = screens[appState.currentScreen] || screens.landing;
    app.innerHTML = shell(view());
    bindNavigation();
  }

  render();
})();
