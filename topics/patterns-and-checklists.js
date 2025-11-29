export const topicPatternsAndChecklists = {
  id: "patterns-and-checklists",
  title: "Patterns and checklist",
  render: function(container) {
    const checklist = `
1. Create a folder, run go mod init, and add tview and tcell.
2. Write a minimal hello world with a single TextView and Run.
3. Add a simple ApplyTheme function and call it in main.
4. Switch to a header, main, footer Flex layout.
5. Replace the main area with nested Flex containers for multiple panels.
6. Add behavior with closures and local variables where needed.
7. Add global keybindings using SetInputCapture.
8. When needed, introduce Pages and a function per screen.
9. Split large sections into helper functions or files for readability.
`.trim();

    container.innerHTML = `
      <h1>Patterns and checklist</h1>
      <p>This section is a quick reference you can follow each time you build a new tview app.</p>

      <h2>Standard flow for a new app</h2>
      <pre><code>${checklist}</code></pre>

      <h2>Common layout patterns</h2>
      <ul>
        <li>Header plus main plus footer with <code>FlexRow</code>.</li>
        <li>Two columns with menu and content using <code>FlexColumn</code>.</li>
        <li>Four panel views using nested Flex containers.</li>
        <li>Multi screen apps using <code>Pages</code> for main and settings.</li>
      </ul>

      <h2>When to introduce helper functions</h2>
      <ul>
        <li>Create one builder function per major screen when you have more than one screen.</li>
        <li>Extract a helper when a section of layout or behavior becomes hard to read inline.</li>
        <li>Keep simple widgets inline if they are only used once.</li>
      </ul>

      <h2>State guidance</h2>
      <ul>
        <li>Let widgets manage their own selection and focus by default.</li>
        <li>Use local variables plus closures for simple app data such as modes or filters.</li>
        <li>Introduce a struct to hold shared state only when many widgets and pages need to coordinate.</li>
      </ul>

      <div class="info-box notes-box">
        <div class="notes-box-title">Your notes</div>
        <p>Adapt this checklist to your workflow. Add reminders for logging, testing, or profiling steps you often forget.</p>
      </div>
    `;
  }
};
