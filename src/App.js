// Heavily inspired by Code-pen
// Code by Yatt-code

import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Editor from "./components/Editor";

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className="App">
      <p>Welcome to the edior</p>
      <div className="tab-button-container">
        <Button
          title="HTML"
          onClick={() => {
            onTabClick("html");
          }}
        />
        <Button
          title="CSS"
          onClick={() => {
            onTabClick("css");
          }}
        />
        <Button
          title="JavaScript"
          onClick={() => {
            onTabClick("js");
          }}
        />
      </div>
      <div className="editor-container">
        {openedEditor === "html" ? (
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            setEditorState={setCss}
          />
        ) : (
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            setEditorState={setJs}
          />
        )}
      </div>
      <div>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;

/* 

Todo:
1. useState hook to manage openedEditor state
2. HTML as default state
3. Every button instance, two props {title, onClick} passed
4. onClick props takes a function that calls onTabClick function with editorName as argument
5. Give condition to display editor based on openedEditor state

*/
