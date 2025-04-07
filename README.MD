# VencordStuffs
Z's Repo of Custom CSS & JS plugins for vencord to make the user experience better.
## Plugins
### CSS
* **BetterMediaPlayer**: Make Vencord's plugin for spotify control more visually appealing. Inspired by the AndroidMediaPlayer CSS by tom2k, AkiraSimplex.
  ```css
  @import(https://raw.githubusercontent.com/zcraftelite9495/VencordStuffs/refs/heads/main/BetterMediaPlayer.plugin.css)
  ```
* **BetterUserPanel**: Make the User Panel collapse when not hovered. Inspired by code from the.rabbit.disabler & prt.scr. Requires ThemeAttributes.
  ```css
  @import(https://raw.githubusercontent.com/zcraftelite9495/VencordStuffs/refs/heads/main/BetterUserPanel.plugin.css)
  ```
* **MessageBubbles**: Formats your discord messages as message bubbles. Inspired by SelfMessages & Discord 11's Message Bubbles.
  ```css
  @import(https://raw.githubusercontent.com/zcraftelite9495/VencordStuffs/refs/heads/main/MessageBubbles.plugin.css)

  :root {
  --selfMessageColor: #a10c6585; // Color of the messages you send
  --defaultMessageColor: #580b3d85; // Color of other messages
  }
  ```