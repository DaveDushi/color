const emailTemplate = (colors) => {
  let rows = colors
    .map(
      (color) => `
        <tr>
            <td>
                <div class="color-box" style="background-color: ${color};" data-hex="${color}"></div>
            </td>
            <td>
                <span class="color-hex">${color}</span>
            </td>
        </tr>
    `
    )
    .join("");

  return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .color-box {
                    width: 50px;
                    height: 50px;
                    display: inline-block;
                    margin-right: 10px;
                    position: relative;
                }
                .color-box:hover::after {
                    content: attr(data-hex);
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: white;
                    border: 1px solid black;
                    padding: 2px 5px;
                    font-size: 12px;
                    white-space: nowrap;
                }
                .color-hex {
                    font-weight: bold;
                    user-select: text; /* Makes the text selectable for copying */
                }
            </style>
        </head>
        <body>
            <h1>Color Palette</h1>
            <table>
                ${rows}
            </table>
        </body>
        </html>
    `;
};

export default emailTemplate;
