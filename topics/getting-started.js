export const topicGettingStarted = {
  id: "getting-started",
  title: "Getting started",
  render: function (container) {
    const setupCode = `
go mod init example.com/mytviewapp
go get github.com/rivo/tview github.com/gdamore/tcell/v2
go run .
`.trim();

    const helloCode = `
package main

import (
    "github.com/gdamore/tcell/v2"
    "github.com/rivo/tview"
)

func main() {
    app := tview.NewApplication()
    app.EnableMouse(true)

    tview.Styles.PrimitiveBackgroundColor = tcell.NewRGBColor(53, 30, 41)

    text := tview.NewTextView()
    text.SetText("Hello tview")
    text.SetBorder(true)
    text.SetTitle("Test")

    if err := app.SetRoot(text, true).SetFocus(text).Run(); err != nil {
        panic(err)
    }
}
`.trim();

    container.innerHTML = `
      <h1>Getting started</h1>
      <p>This guide shows a simple, repeatable way to build tview apps using section functions (header, main, footer) and local styling.</p>

      <h2>Project setup</h2>
      <pre><code>${setupCode}</code></pre>

      <h2>Minimal app pattern</h2>
      <p>Every app follows the same core steps:</p>
      <ul>
        <li>Create an <code>Application</code>.</li>
        <li>Enable the mouse if you want mouse support.</li>
        <li>Optionally set a global background color.</li>
        <li>Build your root layout.</li>
        <li>Set the root and run the app.</li>
      </ul>
      <pre><code>${helloCode}</code></pre>

      <p>Once this works, move on to building a header, main section, and footer with separate functions.</p>
    `;
  }
};
