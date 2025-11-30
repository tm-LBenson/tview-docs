export const topicButtonsAndActions = {
  id: "buttons-and-actions",
  title: "Buttons and actions",
  render: function (container) {
    const basicButtonCode = `
status := tview.NewTextView()
status.SetBorder(true)
status.SetTitle("Status")

btn := tview.NewButton("Run")
btn.SetBorder(true)

btn.SetSelectedFunc(func() {
    status.SetText("Button clicked")
})
`.trim();

    const styledButtonCode = `
btn := tview.NewButton("Run")
btn.SetBorder(true)

style := tcell.StyleDefault
style = style.Background(tcell.NewRGBColor(120, 30, 30))
style = style.Foreground(tcell.NewRGBColor(255, 255, 255))
btn.SetStyle(style)

active := tcell.StyleDefault
active = active.Background(tcell.NewRGBColor(160, 40, 40))
active = active.Foreground(tcell.NewRGBColor(255, 255, 255))
active = active.Bold(true)
btn.SetActivatedStyle(active)
`.trim();

    const centeredButtonCode = `
btn := tview.NewButton("Run")
btn.SetBorder(true)

wrapper := tview.NewFlex()
wrapper.SetDirection(tview.FlexRow)
wrapper.AddItem(tview.NewBox(), 0, 1, false)
wrapper.AddItem(btn, 3, 0, true)
wrapper.AddItem(tview.NewBox(), 0, 1, false)

menuCol := tview.NewFlex()
menuCol.SetDirection(tview.FlexRow)
menuCol.AddItem(wrapper, 0, 1, true)
`.trim();

    container.innerHTML = `
      <h1>Buttons and actions</h1>
      <p>Buttons display a label and run a callback when activated. The label is centered inside the button's box by default.</p>

      <h2>Creating a button and callback</h2>
      <p>Use a <code>Button</code> when you want a clear, focused action the user can trigger with Enter or Space.</p>
      <pre><code>${basicButtonCode}</code></pre>
      <ul>
        <li>The string passed to <code>NewButton</code> is the label.</li>
        <li><code>SetSelectedFunc</code> attaches the function that runs when the button is activated.</li>
        <li>The label is centered inside the button box automatically.</li>
      </ul>

      <h2>Styling buttons</h2>
      <p>Use <code>SetStyle</code> for the normal look and <code>SetActivatedStyle</code> for the focused/active look.</p>
      <pre><code>${styledButtonCode}</code></pre>
      <ul>
        <li><code>SetStyle</code> controls the default background and foreground.</li>
        <li><code>SetActivatedStyle</code> controls how the button looks when focused and activated.</li>
        <li>Use RGB colors so you are not tied to named colors.</li>
      </ul>

      <h2>Centering a button vertically in a column</h2>
      <p>To center a button inside a column, wrap it in a Flex row and add flexible spacers above and below. An odd fixed height like <code>3</code> or <code>5</code> often looks visually centered.</p>
      <pre><code>${centeredButtonCode}</code></pre>
      <ul>
        <li>The wrapper Flex gets height from its parent.</li>
        <li>The empty boxes above and below use proportions to share remaining space.</li>
        <li>The button gets a small fixed height so it sits in the middle.</li>
      </ul>
    `;
  }
};
