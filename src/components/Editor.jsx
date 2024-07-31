import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";

import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

import { Controlled as ControlledEditorComponent } from "react-codemirror2";

const Editor = ({ language, value, setEditorState }) => {
  const [theme, setTheme] = useState("dracula");
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };

  const themeArray = ["dracula", "material", "mdn-like", "the-matrix", "night"];

  return (
    <div className="editor-container">
      <div style={{ marginBottom: "10px" }}>
        <label for="cars">Choose a theme: </label>
        <select
          name="theme"
          onChange={(el) => {
            setTheme(el.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option value={theme}>{theme}</option>
          ))}
        </select>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};

export default Editor;
/* 

Todo:
1. Import CSS from CodeMirror
2. Import Controlled from react-codemirror2
3. Rename controlled component to ControlledEditorComponent
4. Editor component takes props {language, value, setEditorState}
5. Declare editor functional component
6. onHandleChange function to track editor value change
7. Editor component returns a div with ControlledEditorComponent
8. value = {value} is the content of the editor
9. Options object function from CodeMirror

*/
