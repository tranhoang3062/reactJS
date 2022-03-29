// Props

// Là một object được truyền vào trong một components, mỗi components sẽ nhận vào Props và trả về react element.

// Props để gửi dữ liệu đến component.

// Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các commponents.

// Props là bất biến (không thay đổi được)

// Khi một components cha truyền cho component con một Props thì components con chỉ có thể đọc và không có quyền chỉnh
// sửa nó bên phía components cha.

// Truyền Props trong các components
// ta có thể truyền dữ liệu từ một component với nhau bằng cách truyền như một attributes trong HTML element
    <Welcome tenProps1="A" tenProps2="B">Giá trị của props.children</Welcome>
// giả sử ta muốn truyền cho component có tên Welcome các giá trị như:
    const App = () => <Welcome name="Nguyễn Trí" age=18 gender=1>Xin chào Freetuts.net</Welcome>


// Nhận Props trong components

//Nhận giá trị của props trong class component bằng this.props
    import React, { Component } from "react";
    class Welcome extends Component { 
    render() {
        console.log(this.props) //Giá trị của props
        return (
        <div>
            <h1>Xin chào {this.props.name} !</h1>
        </div>
        );
    }
    }
    export default Welcome; 

// Nhận props trong functional components bằng cách
// chỉ định tham số trong function.
    import React from "react";
    const Welcome = (props) => {
        console.log(props) //Giá trị của props
        return (
            <div>
            <h1>Xin chào {props.name} !</h1>
            </div>
        );
    };
    export default Welcome;



// --------------------------------------------------------
// State

// Là một object có thể sử dụng để chứa dữ liệu hoặc thông tin về components.

// State chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như
// nhấp và nút, nhập một số văn bản, nhấn một số phím,...

// State có thể được thay đổi bất cứ khi nào mong muốn.

// Khác với Props bạn có thể truyền Props sang các components khác nhau thì State chỉ tồn tại trong phạm vi
// của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.

// Khởi tạo một state:
    this.state = { name : 'Hoang' }
// Lấy giá trị một state bằng cách gọi this.state:
    console.log(this.state.name)

// React.Component là lớp cơ sở cho tất cả các lớp component cơ bản khác trong ReactJS. Bất cứ khi nào một 
// lớp kế thừa lớp React.Component, hàm tạo (Constructor) của nó sẽ tự động gán thuộc tính state cho lớp với 
// giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè hàm tạo (Constructor).

// Trong nhiều trường hợp chúng ta cần cập nhật state. Để làm điều đó, chúng ta phải sử dụng phương thức setState
// và chúng ta không thể gán trực tiếp như thế này this.state = {'key': 'value'}.

// Demo 
    import React from "react";
    
    class App extends React.Component {
        constructor(props) {
            super(props);
            //Chỉ định một state
            this.state = { index: 1 };
        }
        render() {
            return (
            <div>
                <p>Giá trị {this.state.index}</p>
                <button
                onClick={() => {
                    this.setState({
                    index: this.state.index + 1
                    })
                }}
                >
                Tăng
                </button>
                <button
                onClick={() => {
                    this.setState({
                    index: this.state.index -1
                    })
                }}
                >
                Giảm
                </button>
            </div>
            );
        }
    }
    export default App;


// -----------------------------------------
// Sự khác nhau giữa Props và State

        // State 
        // Dữ liệu chỉ nằm trong phạm vi của một component. 
        // Nó được sở hữu bởi một components cụ thể mà chỉ là của component đó thôi.
        // Và mỗi khi State thay đổi thì component cũng phải thay đổi theo.

        // Props
        // Dữ liệu đường truyền từ component cha cho component con, component con khi nhận được 
        // sẽ chỉ được đọc mà không thể thay đổi dữ liệu đó.
