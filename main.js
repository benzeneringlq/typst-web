import { EditorView, basicSetup } from "codemirror";

new EditorView({
  doc: "Hello CodeMirror 6!\nVite without Vue!",
  extensions: [basicSetup],
  parent: document.getElementById("editor")
});

