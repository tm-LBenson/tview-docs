export const topicStateAndEvents = {
  id: "state-and-events",
  title: "State and events",
  render: function(container) {
    const listCode = `
menu := tview.NewList().
    SetBorder(true).
    SetTitle("Menu")

details := tview.NewTextView().
    SetBorder(true).
    SetTitle("Details")

items := []string{"Item A", "Item B", "Item C"}

for _, name := range items {
    itemName := name
    menu.AddItem(itemName, "", 0, func() {
        details.SetText("Selected: " + itemName)
    })
}
`.trim();

    const keyCode = `
app.SetInputCapture(func(event *tcell.EventKey) *tcell.EventKey {
    if event.Key() == tcell.KeyRune {
        switch event.Rune() {
        case 'q', 'Q':
            app.Stop()
            return nil
        case 'm':
            app.SetFocus(menu)
        case 'd':
            app.SetFocus(details)
        }
    }
    return event
})
`.trim();

    container.innerHTML = `
      <h1>State and events</h1>
      <p>tview widgets manage a lot of state internally. The current selection in a list, the text in an input field, and the focus position are all stored in each widget. You only add your own state when you need to connect user actions to your domain data.</p>

      <h2>Closures as callbacks</h2>
      <p>You pass functions as callbacks into widgets. When those functions use variables from the outer scope, they are closures.</p>
      <pre><code>${listCode}</code></pre>
      <ul>
        <li>The list stores its own selection index internally.</li>
        <li>The callback uses <code>itemName</code>, captured from the outer loop, to update the details panel.</li>
        <li>You do not need a separate selected index variable in this case.</li>
      </ul>

      <h2>Application level key handling</h2>
      <p>Use <code>SetInputCapture</code> on the application to add global keybindings.</p>
      <pre><code>${keyCode}</code></pre>
      <ul>
        <li><code>q</code> quits the app.</li>
        <li><code>m</code> moves focus to the menu.</li>
        <li><code>d</code> moves focus to the details panel.</li>
      </ul>

      <h2>When to track your own state</h2>
      <ul>
        <li>When you have domain data that lives outside widgets, such as slices of records.</li>
        <li>When a user action in one widget should update multiple widgets.</li>
        <li>When you want to remember choices across pages.</li>
      </ul>
      <p>Start with local variables and closures. Introduce a struct only when you have to coordinate many widgets or pages.</p>

      <div class="info-box notes-box">
        <div class="notes-box-title">Notes</div>
        <p>List examples of app specific state here, such as filters, selected IDs, or modes you often use.</p>
      </div>
    `;
  }
};
