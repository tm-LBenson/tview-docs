export const topicPagesAndScreens = {
  id: "pages-and-multi-screen",
  title: "Pages and multi-screen apps",
  render: function (container) {
    const pagesCode = `
package main

import (
    "github.com/gdamore/tcell/v2"
    "github.com/rivo/tview"
)

// Main screen: header + main content + actions form + footer in one function.
func NewMainPage(app *tview.Application) tview.Primitive {
    header := tview.NewTextView()
    header.SetText("Main Screen")
    header.SetBorder(true)
    header.SetTitle("Header")

    mainText := tview.NewTextView()
    mainText.SetText("Main content")
    mainText.SetBorder(true)
    mainText.SetTitle("Main")

    actions := tview.NewForm()
    actions.AddButton("Do Something", func() {
        mainText.SetText("Did something on main screen")
    })
    actions.AddButton("Show Info", func() {
        mainText.SetText("Info on main screen")
    })
    actions.SetBorder(true)
    actions.SetTitle("Actions")
    actions.SetButtonsAlign(tview.AlignCenter)

    footer := tview.NewForm()
    footer.AddButton("Exit", func() {
        app.Stop()
    })
    footer.SetBorder(true)
    footer.SetTitle("Footer")
    footer.SetButtonsAlign(tview.AlignCenter)

    mainArea := tview.NewFlex()
    mainArea.SetDirection(tview.FlexRow)
    mainArea.AddItem(mainText, 0, 1, false)
    mainArea.AddItem(actions, 0, 1, true)

    root := tview.NewFlex()
    root.SetDirection(tview.FlexRow)
    root.AddItem(header, 3, 0, false)
    root.AddItem(mainArea, 0, 1, true)
    root.AddItem(footer, 5, 0, false)

    return root
}

// Settings screen: similar structure, different content.
func NewSettingsPage(app *tview.Application) tview.Primitive {
    header := tview.NewTextView()
    header.SetText("Settings")
    header.SetBorder(true)
    header.SetTitle("Header")

    body := tview.NewTextView()
    body.SetText("Settings go here")
    body.SetBorder(true)
    body.SetTitle("Settings")

    form := tview.NewForm()
    form.AddButton("Toggle Option", func() {
        body.SetText("Toggled an option")
    })
    form.AddButton("Back Info", func() {
        body.SetText("Use 'm' to return to main screen")
    })
    form.SetBorder(true)
    form.SetTitle("Settings Actions")
    form.SetButtonsAlign(tview.AlignCenter)

    footer := tview.NewForm()
    footer.AddButton("Exit", func() {
        app.Stop()
    })
    footer.SetBorder(true)
    footer.SetTitle("Footer")
    footer.SetButtonsAlign(tview.AlignCenter)

    settingsArea := tview.NewFlex()
    settingsArea.SetDirection(tview.FlexRow)
    settingsArea.AddItem(body, 0, 1, false)
    settingsArea.AddItem(form, 0, 1, true)

    root := tview.NewFlex()
    root.SetDirection(tview.FlexRow)
    root.AddItem(header, 3, 0, false)
    root.AddItem(settingsArea, 0, 1, true)
    root.AddItem(footer, 5, 0, false)

    return root
}

// BuildRoot creates the Pages container and wires navigation keys.
func BuildRoot(app *tview.Application) tview.Primitive {
    pages := tview.NewPages()

    mainPage := NewMainPage(app)
    settingsPage := NewSettingsPage(app)

    pages.AddPage("main", mainPage, true, true)
    pages.AddPage("settings", settingsPage, true, false)

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

func main() {
    app := tview.NewApplication()
    app.EnableMouse(true)

    tview.Styles.PrimitiveBackgroundColor = tcell.NewRGBColor(53, 30, 41)

    root := BuildRoot(app)

    if err := app.SetRoot(root, true).Run(); err != nil {
        panic(err)
    }
}
`.trim();

    container.innerHTML = `
      <h1>Pages and multi-screen apps</h1>
      <p>Use <code>tview.Pages</code> when you want separate screens, such as a main view and a settings view, and you want to switch between them without rebuilding the UI.</p>

      <h2>Pattern</h2>
      <ul>
        <li>Create one function per screen: for example <code>NewMainPage</code> and <code>NewSettingsPage</code>.</li>
        <li>Inside each page function, build header, main area, footer, and forms however you like.</li>
        <li>Use <code>BuildRoot</code> to create a <code>Pages</code> container, add each page, and wire navigation keys.</li>
        <li>In <code>main</code>, create the application, enable the mouse, set the background color, build the root pages object, and run.</li>
      </ul>

      <h2>Example: main and settings screens</h2>
      <pre><code>${pagesCode}</code></pre>

      <p>In this example:</p>
      <ul>
        <li>Each screen uses the same section pattern: header, main content + form, footer.</li>
        <li>The main function does not know the details of each screen; it only calls <code>BuildRoot</code> and runs the app.</li>
        <li>Keybindings <code>m</code>, <code>s</code>, and <code>q</code> control navigation and exit.</li>
      </ul>
    `;
  }
};
