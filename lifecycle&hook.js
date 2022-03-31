// Lifecycle

// Mỗi một component trong React có một vòng đời mà ta có thể theo dõi và thao tác
// trong 3 giai đoạn chính: Mounting, Updating, Unmounting.

// MOUNTING: gắn kết các element vào DOM
// React có 4 phương thức có thể gọi khi mounting một component:
//  1. contructor()
//      - đây là phương thức được gọi đầu tiên, khi component được khởi tạo.
//      - đây là nơi để thiết lập state và các giá trị ban đầu.
//      - phương thức constructor() được gọi cùng với props như một đối số, và ta luôn nên
//          bắt đầu bằng cách gọi super(props) đầu tiên, điều này sẽ khởi tạo phương thức constructor cha
//          và cho phép component kế thừa các phương thức từ cha (React.Component).
//      Ví dụ:
                class Header extends React.Component {
                        constructor(props) {
                            super(props);
                            this.state = {favoritecolor: "red"};
                        }
                    render() {
                        return (
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  2. getDerivedStateFromProps
//      - được gọi ngay trước khi render các element trong DOM.
//      - đây là nơi thiết lập các đối tượng state dựa trên props ban đầu.
//      - nó nhận state như một đối số và trả về một đối tượng với thay đổi state.
//      Ví dụ:
                class Header extends React.Component {
                        constructor(props) {
                            super(props);
                            this.state = {favoritecolor: "red"};
                        }
                    // phương thức getDerivedStateFromProps() cập nhật màu yêu thích dựa trên thuộc tính favcol
                    static getDerivedStateFromProps(props, state) { 
                        return {favoritecolor: props.favcol };
                    }
                    render() {
                        return (
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                        );
                    }
                }
                ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
//  3. render()
//      - phương thức render() là bắt buộc và phương thức xuất HTML ra DOM.
//      Ví dụ:
                class Header extends React.Component {
                    render() {
                        return (
                            <h1>This is the content of the Header component</h1>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  4. componentDidMount
//      - phương thức componentDidMount() được gọi sau khi component được render.
//      Ví dụ:
                class Header extends React.Component {
                        constructor(props) {
                            super(props);
                            this.state = {favoritecolor: "red"};
                        }
                    componentDidMount() {
                        setTimeout(() => {
                            this.setState({favoritecolor: "yellow"})
                        }, 1000)
                    }
                    render() {
                        return (
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));

// UPDATING
// Một component được update mỗi khi có sự thay đổi ở state hoặc props component.
// React có 5 phương thức có thể gọi khi một component được update:
// 1. getDerivedStateFromProps()
//      - đây là phương thức đầu tiên được gọi khi một component được update.
//      - đây vẫn là nơi để thiết lập đối tượng state dựa trên props ban đầu.
//      Ví dụ:
                class Header extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    static getDerivedStateFromProps(props, state) {
                        return {favoritecolor: props.favcol };
                    }
                    changeColor = () => {
                        this.setState({favoritecolor: "blue"});
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
//  2. shouldComponentUpdate
//      - trong phương thức này, ta có thể trả về một giá trị Boolean để chỉ định React có nên tiếp tục render hay không.
//      - giá trị mặc định là true
//      Ví dụ:
                class Header extends React.Component { // dừng component render lại mỗi khi update
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    shouldComponentUpdate() {
                        return false;
                    }
                    changeColor = () => {
                        this.setState({favoritecolor: "blue"});
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  
                class Header extends React.Component { // giống ví dụ trên nhưng ở đây phương thức trả về giá trị true
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    shouldComponentUpdate() {
                        return true;
                    }
                    changeColor = () => {
                        this.setState({favoritecolor: "blue"});
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  3. render()
//      - phương thức được gọi ra khi một component được update, nó render lại HTML ra DOM với những thay đổi mới.
//      Ví dụ:
                class Header extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    changeColor = () => {
                        this.setState({favoritecolor: "blue"});
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <button type="button" onClick={this.changeColor}>Change color</button>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  4. getsnapshotBeforeUpdate
//      - trong phương thức này ta có quyền truy cập vào các props và state trước khi update, nghĩa là
//      ngay sau khi update, ta có thể kiểm tra các giá trị trước khi cập nhật.
//      - nếu phương thức getSnapshotBeforeUpdate() được gọi ra, ta cũng nên bao gồm cả phương thức componentDidUpdate()
//      nếu không thì ta sẽ được lỗi.
//      Ví dụ:
                class Header extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    componentDidMount() {
                        setTimeout(() => {
                            this.setState({favoritecolor: "yellow"})
                        }, 1000)
                    }
                    getSnapshotBeforeUpdate(prevProps, prevState) {
                        document.getElementById("div1").innerHTML =
                        "Before the update, the favorite was " + prevState.favoritecolor;
                    }
                    componentDidUpdate() {
                        document.getElementById("div2").innerHTML =
                        "The updated favorite is " + this.state.favoritecolor;
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <div id="div1"></div>
                            <div id="div2"></div>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));
//  5. componentDidUpdate()
//      - phương thức này được gọi sau khi component được update trong DOM.
//      Ví dụ:
                class Header extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {favoritecolor: "red"};
                    }
                    componentDidMount() {
                        setTimeout(() => {
                            this.setState({favoritecolor: "yellow"})
                        }, 1000)
                    }
                    componentDidUpdate() {
                        document.getElementById("mydiv").innerHTML =
                        "The updated favorite is " + this.state.favoritecolor;
                    }
                    render() {
                        return (
                            <div>
                            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                            <div id="mydiv"></div>
                            </div>
                        );
                    }
                }
                ReactDOM.render(<Header />, document.getElementById('root'));

// UNMOUNTING: được gọi khi một component bị xoá khỏi DOM
// React có một phương thức có teher gọi khi một component được unmounted:
//  1. componentWillUnmount()
//      - phương thức được gọi gọi khi một component sắp bị xoá khỏi DOM.
//      Ví dụ:
                class Container extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {show: true};
                    }
                    delHeader = () => {
                        this.setState({show: false});
                    }
                    render() {
                        let myheader;
                        if (this.state.show) {
                            myheader = <Child />;
                        };
                        return (
                            <div>
                            {myheader}
                            <button type="button" onClick={this.delHeader}>Delete Header</button>
                            </div>
                        );
                    }
                }
                class Child extends React.Component {
                    componentWillUnmount() {
                        alert("The component named Header is about to be unmounted.");
                    }
                    render() {
                        return (
                            <h1>Hello World!</h1>
                        );
                    }
                }
                ReactDOM.render(<Container />, document.getElementById('root'));

// -----------------------------------------------------------------------------------------------------------------

import Hooks from 'react'
// Hook 
    // Hook được thêm vào React ở phiên bản 16.8.
    // Với Hook, ta có thể sử dụng state và các chức năng khác của một React class component mà không cần phải viết một class
    // Hook cho phép ta "hook" vào các tính năng của React như phương thức state và lifecycle.
    // 2 quy tắc của Hooks:
    //      + chỉ gọi Hook bên trong các React components dạng hàm. Không gọi Hooks từ hàm JS bình thường.
    //      + chỉ gọi Hook trên cùng. Không gọi Hook bên trong vòng lặpm điều kiện, hoặc các hàm lồng nhau.


// useState
    // React useState Hook cho phép ta theo dõi state trong một hàm component.

    // cách sử dụng:
            import { useState } from "react";
    // khởi tạo:
    // ta khởi tạo state bằng cách gọi useState trong hàm component.
    // useState chấp nhận state ban đầu và trả về 2 giá trị: state hiện tại và hàm update state.
    // Ví dụ:  
            import { useState } from "react";

            function FavoriteColor() {
                const [color, setColor] = useState(""); // color là state hiện tại, setColor là hàm được sử dụng để update state.
            }
    // đọc state:
            import { useState } from "react";
            import ReactDOM from "react-dom";

            function FavoriteColor() {
                const [color, setColor] = useState("red");
                return <h1>My favorite color is {color}!</h1>
            }
            ReactDOM.render(<FavoriteColor />, document.getElementById('root'));
    // update state:
            import { useState } from "react";
            import ReactDOM from "react-dom";

            function FavoriteColor() {
                const [color, setColor] = useState("red");
                return (
                    <>
                    <h1>My favorite color is {color}!</h1>
                    <button
                        type="button"
                        onClick={() => setColor("blue")}
                    >Blue</button>
                    </>
                )
            }
            ReactDOM.render(<FavoriteColor />, document.getElementById('root'));


// useEffect 
    // cho phép ta thực hiện các event bên cạnh các component.
    // useEffect chấp nhận 2 đối số. Đối số thứ 2 là tuỳ chọn.
    // useEffect(<function>, <dependency>)
    // Ví dụ:
            import { useState, useEffect } from "react";
            import ReactDOM from "react-dom";

            function Counter() {
                const [count, setCount] = useState(0);
                const [calculation, setCalculation] = useState(0);
                useEffect(() => {
                    setCalculation(() => count * 2);
                }, [count]); // <- add the count variable here
                return (
                    <>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount((c) => c + 1)}>+</button>
                    <p>Calculation: {calculation}</p>
                    </>
                );
            }
            ReactDOM.render(<Counter />, document.getElementById('root'));


// Ngoài ra còn có các React Hook khác như useContext, useRef, useReducer, useCallback, useMemo, useImperativeHandle, useLayoutEffect, useDebugValue.

