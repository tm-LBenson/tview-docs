export const topicLayoutAndFlex = {
  id: "layout-and-flex",
  title: "Layout and Flex",
  render: function (container) {
    const headerMainFooterCode = `
header := tview.NewTextView()
header.SetText("My App")
header.SetTextAlign(tview.AlignCenter)
header.SetBorder(true)

mainArea := tview.NewTextView()
mainArea.SetText("Main area")
mainArea.SetBorder(true)

footer := tview.NewTextView()
footer.SetText("Q: quit")
footer.SetBorder(true)

root := tview.NewFlex()
root.SetDirection(tview.FlexRow)
root.AddItem(header, 3, 0, false)
root.AddItem(mainArea, 0, 1, true)
root.AddItem(footer, 1, 0, false)

if err := app.SetRoot(root, true).SetFocus(mainArea).Run(); err != nil {
    panic(err)
}
`.trim();

    const fourPanelCode = `
menu := tview.NewList()
menu.SetBorder(true)
menu.SetTitle("Menu")

tableA := tview.NewTable()
tableA.SetBorder(true)
tableA.SetTitle("Table A")

tableB := tview.NewTable()
tableB.SetBorder(true)
tableB.SetTitle("Table B")

actions := tview.NewForm()
actions.SetBorder(true)
actions.SetTitle("Actions")

row1 := tview.NewFlex()
row1.SetDirection(tview.FlexColumn)
row1.AddItem(menu, 0, 1, true)
row1.AddItem(tableA, 0, 2, false)

row2 := tview.NewFlex()
row2.SetDirection(tview.FlexColumn)
row2.AddItem(tableB, 0, 2, false)
row2.AddItem(actions, 0, 2, false)

mainArea := tview.NewFlex()
mainArea.SetDirection(tview.FlexRow)
mainArea.AddItem(row1, 0, 1, true)
mainArea.AddItem(row2, 0, 1, false)
`.trim();

    container.innerHTML = `
      <h1>Layout with Flex</h1>
      <p><code>Flex</code> is the primary layout primitive in tview. It arranges child widgets in a row or a column and lets you mix fixed and flexible sizing.</p>

      <h2>Header, main, footer pattern</h2>
      <p>This is a simple pattern for many apps: a header row, a large main row, and a small footer row.</p>
      <pre><code>${headerMainFooterCode}</code></pre>

      <h2>Understanding AddItem</h2>
      <p><code>AddItem(child, fixedSize, proportion, focus)</code> controls how each child is sized:</p>
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
        Start with a single Flex for header, main, footer. Once that feels right, replace the main area with nested Flex containers for panels.
      </div>
    `;
  }
};
