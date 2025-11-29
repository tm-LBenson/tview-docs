export const topicThemeAndColors = {
  id: "theme-and-colors",
  title: "Theme and colors",
  render: function(container) {
    const themeCode = `
import (
    "github.com/gdamore/tcell/v2"
    "github.com/rivo/tview"
)

func ApplyTheme() {
    tview.Styles.PrimitiveBackgroundColor = tcell.NewRGBColor(0, 0, 0)
    tview.Styles.ContrastBackgroundColor = tcell.NewRGBColor(0, 0, 0)
    tview.Styles.MoreContrastBackgroundColor = tcell.NewRGBColor(0, 0, 0)
    tview.Styles.BorderColor = tcell.NewRGBColor(0, 120, 160)
    tview.Styles.TitleColor = tcell.NewRGBColor(240, 200, 80)
    tview.Styles.GraphicsColor = tcell.NewRGBColor(220, 220, 220)
}

func main() {
    app := tview.NewApplication()
    ApplyTheme()

    box := tview.NewTextView().
        SetText("Themed tview app").
        SetBorder(true)

    if err := app.SetRoot(box, true).SetFocus(box).Run(); err != nil {
        panic(err)
    }
}
`.trim();

    container.innerHTML = `
      <h1>Theme and colors</h1>
      <p>tview uses global styles in <code>tview.Styles</code> for background, borders, titles, and graphics. You can set these once at startup to get a consistent look across widgets.</p>

      <h2>Simple theme function</h2>
      <p>Define a single function that sets your preferred colors, then call it at the start of <code>main</code>.</p>
      <pre><code>${themeCode}</code></pre>

      <h2>Per widget styling</h2>
      <p>Global styles give you a base palette. You can override colors on individual widgets when needed.</p>
      <pre><code>header := tview.NewTextView().
    SetText("My App").
    SetTextAlign(tview.AlignCenter).
    SetBorder(true).
    SetTitle("Header").
    SetBorderColor(tcell.NewRGBColor(0, 120, 160)).
    SetBackgroundColor(tcell.NewRGBColor(0, 0, 0))</code></pre>

      <ul>
        <li>Use global styles for backgrounds and default border colors.</li>
        <li>Use per widget methods for accents or special panels.</li>
        <li>Keep values in RGB so you do not rely on named colors.</li>
      </ul>

      <div class="info-box notes-box">
        <div class="notes-box-title">Your notes</div>
        <p>Record your preferred RGB values here. For example, a dark theme for development and a light theme for demos.</p>
      </div>
    `;
  }
};
