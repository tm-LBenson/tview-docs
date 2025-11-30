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

    tview.Styles.PrimaryTextColor = tcell.NewRGBColor(230, 230, 230)
    tview.Styles.SecondaryTextColor = tcell.NewRGBColor(200, 200, 200)
    tview.Styles.TertiaryTextColor = tcell.NewRGBColor(150, 150, 150)
}

func main() {
    ApplyTheme()

    app := tview.NewApplication()

    box := tview.NewTextView().
        SetText("Themed tview app").
        SetBorder(true)

    if err := app.SetRoot(box, true).SetFocus(box).Run(); err != nil {
        panic(err)
    }
}
`.trim();
