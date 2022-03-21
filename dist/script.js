function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const def = `#1How it Works? #u h1 u#

#2It is simple 
<nn>

To make #it#u h1 u#it# heading, just type #1 at the start of a new header <nn>
it works for other headings just the same:

#U
#1 - h1
#2 - h2
#3 - h3
#4 - h4

For the reference, look through #it textarea it# on the left

Now, let's look at an ordered list (type #O, hit enter and write an ordered list down)

#O Ordered List:
To make text bold, type # b and b # (without spaces)
Italic - # it and it # respectively 
Underline - # u and u #
Strikethough - # s and s #
Want to write a code? - type #C and write your code down!
And a paragraph tag at last - #P

#C
const textParser = (txt) => parse(txt);
//P.S. b# It's not that simple :))

#Q
this is a Quote

note : hitting Enter key every time, line breaks.<nn>
#b P.S. b# Type < n n > (without spaces) to break line anytime 

#4And a table:

#PJust type #T at the first line and then |> text <| to form a simple table like here, below:

#T
|>header1<||>header2<||>header3<|
|>row1   <||> row1  <||>  row1 <|
|>row2   <||> row2  <||>  row2 <|
|>row3   <||> row3  <||>  row3 <|

#2This is a logo of the finest Editor

#G
"https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png"`;

class Editor extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "hChange",





    e => {
      this.setState({
        textarea: e.target.value });

    });this.state = { textarea: def };this.hChange = this.hChange.bind(this);}
  render() {
    console.log(this.state.textarea);
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", null, "This is a simple ", /*#__PURE__*/React.createElement("code", null, "html"), " Markdown editor"), /*#__PURE__*/
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", null, "Enter some text here to start Editing"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        onChange: this.hChange },
      this.state.textarea)), /*#__PURE__*/

      React.createElement(View, { text: parse(this.state.textarea) }))));



  }}


class View extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        id: "preview",
        className: "output", dangerouslySetInnerHTML: { __html: parse(this.props.text) } }));

  }}


const parse = text => {
  let arr = text.split(/\n\n|<nn>/g);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].slice(0, 2)) {
      case "#1":
        arr[i] = arr[i].replace(/^#1/, "<h1>").concat("</h1>");
        break;
      case "#2":
        arr[i] = arr[i].replace(/^#2/, "<h2>").concat("</h2>");
        break;
      case "#3":
        arr[i] = arr[i].replace(/^#3/, "<h3>").concat("</h3>");
        break;
      case "#4":
        arr[i] = arr[i].replace(/^#4/, "<h4>").concat("</h4>");
        break;
      case "#C":
        arr[i] = arr[i].replace(/^#C/, "<pre><code>").concat("</code></pre>");
        break;
      case "#P":
        arr[i] = arr[i].replace(/^#P/, "<p>").concat("</p>");
        break;
      case "#Q":
        arr[i] = arr[i].replace(/^#Q/, "<blockquote>").concat("</blockquote>");
        break;
      case "#G":
        arr[i] = arr[i].replace(/^#G/, "<img/ src=").concat(">");
        break;
      case "#U":
        arr[i] = arr[i].replace(/^#U/, "<ul>").
        concat("</ul>").
        replace(/\n/g, "<li>");
        break;
      case "#O":
        arr[i] = arr[i].replace(/^#O/, "<ol>").
        concat("</ol>").
        replace(/\n/g, "<li>");
        break;
      case "#T":
        arr[i] = arr[i].replace(/^#T/, "<table><tbody>").
        replace(/\n/g, "<tr>").
        replace(/\<\|/g, "</th>").
        replace(/\|\>/g, "<th>").
        concat("</table></tbody>");
        break;
      default:
        arr[i] = "<span>" + arr[i] + "</span>";
        break;}

  }
  return arr.join("<br/>").replace("#b", "<b>").replace("#u", "<u>").replace("#it", "<i>").replace("#s", "<s>").replace("b#", "</b>").replace("u#", "</u>").replace("it#", "</i>").replace("s#", "</s>");
};
//render//
ReactDOM.render( /*#__PURE__*/React.createElement(Editor, null), document.getElementById('wrap'));