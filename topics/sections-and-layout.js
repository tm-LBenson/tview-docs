export const topicSectionsAndLayout = {
  id: "sections-and-layout",
  title: "Sections and layout",
  render: function (container) {
    const sectionsCode = `
package main

import (
    "github.com/gdamore/tcell/v2"
    "github.com/rivo/tview"
)

func NewHeader() *tview.TextView {
    h := tview.NewTextView()
    h.SetText("Header")
    h.SetBorder(true)
    h.SetTitle("Header")
    return h
}

func NewMain() (*tview.TextView, *tview.Form, *tview.Flex) {
    m := tview.NewTextView()
    m.SetText("Main content")

    form := tview.NewForm()
    form.AddButton("Do Something", func() {
        m.SetText("Something.")
    })
    form.AddButton("Another Option", func() {
        m.SetText("Option")
    })

    flex := tview.NewFlex()
    flex.SetDirection(tview.FlexRow)
    flex.AddItem(m, 1, 1, false)
    flex.AddItem(form, 0, 5, true)

    return m, form, flex
}

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

    form.SetFieldTextColor(tcell.Color101)
    form.SetBorder(true)
    form.SetTitle("Footer")
    form.SetButtonsAlign(tview.AlignCenter)

    return form
}

func main() {
    app := tview.NewApplication()
    app.EnableMouse(true)

    tview.Styles.PrimitiveBackgroundColor = tcell.NewRGBColor(53, 30, 41)

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
}
`.trim();

    container.innerHTML = `
      <h1>Sections and layout</h1>
      <p>The main pattern is to build one function per section: header, main, and footer. Each function styles its own widgets and returns a single primitive you can plug into the root layout.</p>

      <h2>Section builder functions</h2>
      <ul>
        <li><code>NewHeader</code> creates and styles the header area.</li>
        <li><code>NewMain</code> builds the main area and returns its text view, form, and Flex.</li>
        <li><code>NewFooter</code> builds a footer form that can update the main area or exit the app.</li>
      </ul>

      <pre><code>${sectionsCode}</code></pre>

      <h2>Layout flow</h2>
      <ul>
        <li>Each section function is responsible for styling its own widgets.</li>
        <li>The main function creates the application, enables the mouse, and sets a global background color.</li>
        <li>The root Flex stacks header, main, and footer in a column.</li>
        <li>The main section builds its own Flex internally, so you can add more content later without changing the root layout.</li>
      </ul>
    `;
  }
};
