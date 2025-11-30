export const topicFormsAndLogic = {
  id: "forms-and-logic",
  title: "Forms and logic",
  render: function (container) {
    const mainFormCode = `
func NewMain() (*tview.TextView, *tview.Form, *tview.Flex) {
    m := tview.NewTextView()
    m.SetText("Main content")
    m.SetBorder(true)
    m.SetTitle("Main")

    form := tview.NewForm()
    form.AddButton("Do Something", func() {
        m.SetText("Something.")
    })
    form.AddButton("Another Option", func() {
        m.SetText("Option")
    })
    form.SetBorder(true)
    form.SetTitle("Actions")
    form.SetButtonsAlign(tview.AlignCenter)

    flex := tview.NewFlex()
    flex.SetDirection(tview.FlexRow)
    flex.AddItem(m, 1, 1, false)
    flex.AddItem(form, 0, 5, true)

    return m, form, flex
}
`.trim();

    const footerFormCode = `
func NewFooter(app *tview.Application, main *tview.TextView) *tview.Form {
    form := tview.NewForm()

    form.AddButton("Apply", func() {
        main.SetText("Apply pressed")
    })
    form.AddButton("Cancel", func() {
        main.SetText("Cancel pressed")
    })
    form.AddButton("Defaults", func() {
        main.SetText("Defaults pressed")
    })
    form.AddButton("Exit", func() {
        app.Stop()
    })

    form.SetBorder(true)
    form.SetTitle("Footer")
    form.SetButtonsAlign(tview.AlignCenter)

    return form
}
`.trim();

    const focusCode = `
header := NewHeader()
mainText, mainForm, mainView := NewMain()
footer := NewFooter(app, mainText)

root := tview.NewFlex()
root.SetDirection(tview.FlexRow)
root.AddItem(header, 3, 0, false)
root.AddItem(mainView, 0, 1, false)
root.AddItem(footer, 5, 0, true)

if err := app.SetRoot(root, true).SetFocus(mainForm).Run(); err != nil {
    panic(err)
}
`.trim();

    container.innerHTML = `
      <h1>Forms and logic</h1>
      <p>Forms are a convenient way to build interactive parts of a tview app. They handle button layout, focus, and basic keyboard navigation for you.</p>

      <h2>Using a form as the main action area</h2>
      <p>Build a form inside the main section and wire buttons to update the main content.</p>
      <pre><code>${mainFormCode}</code></pre>

      <ul>
        <li>The form and main TextView live in the same section function.</li>
        <li>The form callbacks update the main TextView directly.</li>
        <li>The section returns both the TextView and the Form so the caller can set initial focus.</li>
      </ul>

      <h2>Using a form in the footer</h2>
      <p>The footer form is another functional area. It can change the main content or exit the app.</p>
      <pre><code>${footerFormCode}</code></pre>

      <ul>
        <li>The footer receives the <code>Application</code> and a reference to the main TextView.</li>
        <li>Each button callback updates the main TextView or calls <code>app.Stop()</code>.</li>
      </ul>

      <h2>Focus pattern</h2>
      <p>After assembling the root layout, set focus to the form you want active first.</p>
      <pre><code>${focusCode}</code></pre>

      <ul>
        <li>Use the form in the main section as the initial focus target.</li>
        <li>The user can navigate buttons with Tab, Shift+Tab, and Enter.</li>
        <li>You can add more forms to other sections and move focus between them if needed.</li>
      </ul>
    `;
  }
};
