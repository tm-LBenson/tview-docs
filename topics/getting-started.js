export const topicGettingStarted = {
  id: "getting-started",
  title: "Getting started",
  render: function(container) {
    const helloCode = `
package main

import (
    "github.com/rivo/tview"
)

func main() {
    app := tview.NewApplication()
    box := tview.NewTextView().
        SetText("Hello tview").
        SetBorder(true)
    if err := app.SetRoot(box, true).SetFocus(box).Run(); err != nil {
        panic(err)
    }
}
`.trim();

    const setupCode = `
go mod init example.com/mytviewapp
go get github.com/rivo/tview github.com/gdamore/tcell/v2
go run .
`.trim();

    container.innerHTML = `
      <h1>Getting started with tview</h1>
      <p>This guide is for building terminal user interfaces in Go using tview. It focuses on simple patterns you can reuse for many different apps.</p>

      <h2>Project setup</h2>
      <p>Create a new folder and initialize a Go module.</p>
      <pre><code>${setupCode}</code></pre>

      <h2>Hello world</h2>
      <p>The smallest useful tview app creates an Application, a single widget, sets it as the root, and runs the app.</p>
      <pre><code>${helloCode}</code></pre>
      <p>This proves your module, imports, and terminal setup are working before you build more complex layouts.</p>

      <h2>Core mental model</h2>
      <ul>
        <li><code>tview.Application</code> owns the event loop and the tcell screen.</li>
        <li>A <code>Primitive</code> is any widget or container that can be drawn and can receive input.</li>
        <li>You build a tree of primitives, choose one as the root, and give it to the application.</li>
        <li>Layouts are built with containers like <code>Flex</code>, <code>Grid</code>, and <code>Pages</code>.</li>
      </ul>

      <div class="info-box">
        Use this topic as a quick reminder of how to start a fresh tview project. Once the hello world runs, move on to theme, layout, and interactions.
      </div>

      <div class="info-box notes-box">
        <div class="notes-box-title">Your notes</div>
        <p>Add your own setup steps here. For example, your preferred Go version, Makefile commands, or a standard project layout.</p>
      </div>
    `;
  }
};
