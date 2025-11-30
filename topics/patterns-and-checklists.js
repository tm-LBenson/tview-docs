export const topicPatternsAndChecklist = {
  id: "patterns-and-checklist",
  title: "Patterns and checklist",
  render: function (container) {
    const checklist = `
1. Create a new Go module and add tview and tcell.
2. In main, create an Application and enable the mouse.
3. Optionally set a global PrimitiveBackgroundColor.
4. Write a function for each main section:
   - NewHeader() returns a header primitive.
   - NewMain() returns main content, main form, and a Flex that contains them.
   - NewFooter() returns a footer form that can update main content or exit.
5. Style each section locally inside its builder function.
6. Inside sections, use Flex to arrange content (TextView, Form, tables, etc.).
7. Build a root Flex in main that stacks header, main, and footer.
8. Set the root on the Application and set focus to the main form.
9. Run the app.
`.trim();

    container.innerHTML = `
      <h1>Patterns and checklist</h1>
      <p>This checklist describes the section-based workflow for building tview apps.</p>

      <h2>Standard workflow</h2>
      <pre><code>${checklist}</code></pre>

      <h2>Design principles</h2>
      <ul>
        <li>One function per main section (header, main, footer).</li>
        <li>Each section is responsible for styling its own widgets.</li>
        <li>Use Flex inside sections to lay out content instead of a global theme file.</li>
        <li>Use forms for functional parts so wiring callbacks and navigation stays simple.</li>
        <li>Keep the root layout thin: just assemble section primitives and set focus.</li>
      </ul>
    `;
  }
};
