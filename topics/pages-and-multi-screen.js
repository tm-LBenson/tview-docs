export const topicPagesAndScreens = {
  id: "pages-and-multi-screen",
  title: "Pages and multi screen apps",
  render: function(container) {
    const pagesCode = `
func buildMainPage(app *tview.Application) tview.Primitive {
    header := buildHeader("Main")
    mainArea := buildMainPanels(app)
    footer := buildFooter()

    root := tview.NewFlex().
        SetDirection(tview.FlexRow).
        AddItem(header, 3, 0, false).
        AddItem(mainArea, 0, 1, true).
        AddItem(footer, 1, 0, false)

    return root
}

func buildSettingsPage(app *tview.Application) tview.Primitive {
    header := buildHeader("Settings")
    form := tview.NewForm().
        SetBorder(true).
        SetTitle("Settings")
    footer := buildFooter()

    root := tview.NewFlex().
        SetDirection(tview.FlexRow).
        AddItem(header, 3, 0, false).
        AddItem(form, 0, 1, true).
        AddItem(footer, 1, 0, false)

    return root
}

func buildRoot(app *tview.Application) tview.Primitive {
    mainPage := buildMainPage(app)
    settingsPage := buildSettingsPage(app)

    pages := tview.NewPages().
        AddPage("main", mainPage, true, true).
        AddPage("settings", settingsPage, true, false)

    app.SetInputCapture(func(event *tcell.EventKey) *tcell.EventKey {
        if event.Key() == tcell.KeyRune {
            switch event.Rune() {
            case 'm':
                pages.SwitchToPage("main")
            case 's':
                pages.SwitchToPage("settings")
            case 'q', 'Q':
                app.Stop()
                return nil
            }
        }
        return event
    })

    return pages
}
`.trim();

    container.innerHTML = `
      <h1>Pages and multi screen apps</h1>
      <p><code>Pages</code> lets you stack complete screens and switch between them. This works well for main versus settings, dashboards versus detail screens, or modal dialogs over a base layout.</p>

      <h2>Defining pages</h2>
      <p>Create one function per screen that returns a complete layout.</p>
      <pre><code>${pagesCode}</code></pre>

      <ul>
        <li>Each page builder creates its own header, content, and footer.</li>
        <li><code>Pages</code> holds both layouts and switches between them.</li>
        <li>Global input handling in <code>SetInputCapture</code> changes the active page.</li>
      </ul>

      <div class="info-box">
        Start with a single page. When your app needs a second major screen, introduce <code>Pages</code> and move your existing layout into its own builder function.
      </div>

      <div class="info-box notes-box">
        <div class="notes-box-title">Your notes</div>
        <p>List the common screens you use in your own apps, such as dashboards, log viewers, or options pages.</p>
      </div>
    `;
  }
};
