export const topicLayoutAndFlex = {
  id: "layout-and-flex",
  title: "Layout and Flex",
  render: function(container) {
    const headerMainFooterCode = `
header := tview.NewTextView().
    SetText("My App").
    SetTextAlign(tview.AlignCenter).
    SetBorder(true)

mainArea := tview.NewTextView().
    SetText("Main area").
    SetBorder(true)

footer := tview.NewTextView().
    SetText("Q: quit").
    SetBorder(true)

root := tview.NewFlex().
    SetDirection(tview.FlexRow).
    AddItem(header, 3, 0, false).
    AddItem(mainArea, 0, 1, true).
    AddItem(footer, 1, 0, false)

if err := app.SetRoot(root, true).SetFocus(mainArea).Run(); err != nil {
    panic(err)
}
`.trim();

    const fourPanelCode = `
menu := tview.NewList().
    SetBorder(true).
    SetTitle("Menu")

tableA := tview.NewTable().
    SetBorder(true).
    SetTitle("Table A")

tableB := tview.NewTable().
    SetBorder(true).
    SetTitle("Table B")

actions := tview.NewForm().
    SetBorder(true).
    SetTitle("Actions")

row1 := tview.NewFlex().
    SetDirection(tview.FlexColumn).
    AddItem(menu, 0, 1, true).
    AddItem(tableA, 0, 2, false)

row2 := tview.NewFlex().
    SetDirection(tview.FlexColumn).
    AddItem(tableB, 0, 2, false).
    AddItem(actions, 0, 2, false)

mainArea := tview.NewFlex().
    SetDirection(tview.FlexRow).
    AddItem(row1, 0, 1, true).
    AddItem(row2, 0, 1, false)
`.trim();

    container.innerHTML = `
      <h1>Layout with Flex</h1>
      <p><code>Flex</code> is the primary layout primitive in tview. It arranges child widgets in a row or a column and lets you mix fixed and flexible sizing.</p>

      <h2>Header, main, footer pattern</h2>
      <p>This is a simple pattern for many apps: a header row, a large main row, and a small footer row.</p>
      <pre><code>${headerMainFooterCode}</code></pre>

      <h2>Understanding AddItem</h2>
      <p><code>AddItem(child, fixedSize, proportion, focus)</code> controls how each child is sized.</p>
      <ul>
        <li><code>fixedSize &gt; 0</code> gives the child an exact height or width depending on direction.</li>
        <li><code>fixedSize == 0</code> makes the child flexible. <code>proportion</code> controls how much of the remaining space it gets.</li>
        <li><code>focus</code> indicates if the child can receive focus when the Flex is focused.</li>
      </ul>

      <h2>Four panel layout</h2>
      <p>You can nest Flex containers to create grids such as a 2 by 2 main area.</p>
      <pre><code>${fourPanelCode}</code></pre>

      <p>In this example:</p>
      <ul>
        <li>The top row holds a menu and a primary table.</li>
        <li>The bottom row holds a secondary table and an actions panel.</li>
        <li>Each row is flexible inside <code>mainArea</code>, and each column uses proportions to share space.</li>
      </ul>

      <div class="info-box">
        Start with a single Flex for header, main, footer. Once that feels right, replace the main area with nested Flex containers for more complex layouts.
      </div>

      <div class="info-box notes-box">
        <div class="notes-box-title">Your notes</div>
        <p>Capture layouts you like here. For example, favorite width ratios for menus, tables, or logs.</p>
      </div>
    `;
  }
};
