# saki2fifty's portfolio

A game development and 3D art portfolio hosted with GitHub Pages.

Website address: https://saki2fifty.github.io/

## What is here?

- `index.html` contains the homepage text, project descriptions, and links.
- `styles.css` controls colors, typography, and desktop/mobile layouts.
- `script.js` opens project screenshots in an accessible image viewer.
- `assets/images/` contains the project screenshots and Blender images.
- `.nojekyll` tells GitHub to publish the files directly.

## Publishing settings

In this repository on GitHub, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save.

## Making changes

1. Open `index.html` on GitHub and click the pencil icon to edit it.
2. Change the text you want visitors to see.
3. Click **Commit changes** and save the change to `main`.
4. GitHub Pages will publish the update automatically. Allow a few minutes.

You can also open `index.html` in a browser on your computer to preview it. No installations or build commands are needed.

## Project sources

Descriptions were checked against these repository snapshots on October 18, 2026:

- **LenzForge Studio:** [main at b35ea77](https://github.com/saki2fifty/LenzForge/tree/b35ea77c0c42fe394d7bbbc60e369cadc6cf1d8d). Purpose and features come from the README; the stack also uses `requirements.txt` and `toolchain.json`. Screenshots come from `docs/images/showcase/`.
- **F.O.R.G.E.:** [forge/windows-build at 0306248](https://github.com/saki2fifty/F.O.R.G.E./tree/030624824de9066a66581e899aa9034fdd3c2ccd). Purpose and features come from the README, with stack details from `docs/dependencies.md` and development status from `docs/status.md`. Screenshots come from `docs/images/readme/` and show validation scenes, not a released game.
- **Blender:** the two original turret screenshots supplied by the portfolio owner. Images remain unmodified; page layouts crop them visually, and the image viewer displays the originals.
- **Godot Engine logo:** copyright 2017 Andrea Calabró, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The unmodified dark-background SVG is copied from LenzForge's `docs/images/godot-logo-dark.svg`; see the [official press kit](https://godotengine.org/press/) and `assets/godot-logo-license.txt`.

The F.O.R.G.E. repository button goes to the repository home, so it remains useful after the branch is merged. The development snapshot link points to the reviewed commit and remains independent of the branch name.

## Updating the portfolio

Edit the relevant project section in `index.html` when capabilities or stacks change. Replace or add screenshots in `assets/images/`, keeping descriptive alternative text and captions. No build step, third-party scripts, or external font service is required. With JavaScript disabled, image links still open the original screenshots.
