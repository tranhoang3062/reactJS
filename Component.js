// component
// Là một khối code độc lập để phân chia các UI (giao diện người dùng) thành các phần nhỏ riêng lẻ để
// dễ dàng quản lý và tái sử dụng.


// Khởi tạo một react component
// Trước khi thực hiện viết components, chúng ta nên khởi tạo một thư mục có tên components trong thư mục src
// để chứa tất cả các component trong dự án.
// React có 2 loại component là Funtional(Stateless) và Class(Stateful)
// lưu ý: Đặt tên cho component phải viết hoa dạng Pascal case.
// Để khởi tạo Component ta sẽ có nhiều cách như sau:
//      + dùng let, const trong JS ES6 hoặc var ở các phiên bản JS thấp hơn
//      + dùng function
//      + dùng class trong JS ES6

    import React, { Component } from 'react';
    // VD1
    let Tab_let = () => {
        return (
          <div>Khởi tạo bằng let</div>
        );
    };
      
    // VD2
    const Tab_const = () => {
        return (
          <div>Khởi tạo bằng const</div>
        );
    };
      
    // VD3 - const hoặc let đều được
    const Tab_shorthand = () => (
        <div>Cách tắt khi dùng Arrow Function</div>
        );
      
    // VD4
    function Tab_function() {
        return (
          <div>Khởi tạo bằng Function</div>
        );
    }
      
    // VD5
    class Tab_class extends Component {
        render() {
          return (
            <div>Khởi tạo bằng Class</div>
          );
        }
    }

// Truyền tham số từ ngoài vào React Component
// Tham số của React Component được gọi là «property».  Những ngôn ngữ markup như XML, HTML gọi tham số truyền vào là «attribute»
// Trong các tài liệu tiếng Anh, «property» thường dùng trong ngữ cảnh ngôn ngữ JavaScript, còn «attribute» thường dùng với ngôn ngữ markup XML, HTML.
// Có sự khác nhau giữa  Attribute của JSX là có thể nhận vào bất kỳ kiểu dữ liệu nào mà một biến JavaScript có thể chứa, nhưng attribute của HTML và XML chỉ có một kiểu dữ liệu chuỗi (string).
// Khi truyền dữ liệu kiểu string cho React Component thì phải có cặp ngoặc nháy "...", nếu truyền kiểu dữ liệu khác, hoặc truyền biến, thì phải đặt trong cặp ngoặc móc {...}.
// Chú ý: JSX attribute phải được viết ở dạng camel case.
// Ví dụ: 
    function SalaryInput () {
        const holderText = 'Enter your salary';
        return (
        <NumberInput
            label="Salary"
            placeholder={holderText}
            readonly={false}
            decimalDigits={2}
        />
        );
    }
// Truyền kiểu dữ liệu nào vào thẻ HTML thì đều được xem như là string.
// Tham số kiểu boolean có giá trị true có thể được viết rút gọn, nhưng giá trị false thì phải viết ở dạng đầy đủ



// Nhận tham số từ bên trong React Component

// Với Funtional component
// Function Component nhận được tham số dưới dạng một object gồm các key và value được truyền vào từ JSX.
// Ví dụ: 
    const NumberInput = (props) => {
        console.log(props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
        return (...);
    };

// Với Class component
// Class Component nhận tham số qua property tên là props. Truy cập đến nó bằng cú pháp this.props.
// Ví dụ:
    class NumberInput extends React.Component {
        render() {
        console.log(this.props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
        return (...);
        }
    }

// Phân tách tham số (Argument destructuring)
// Object Destructuring là một cú pháp có trong JavaScript ES6, chúng ta có thể sử dụng nó để lấy ra những property mà mình muốn.

// Sử dụng default Props
// React cho phép chúng ta đặt giá trị mặc định cho props với default Props, nếu nó không được truyền từ bên ngoài vào.
// Ưu điểm của cách này so với default value của destructuring là không cần phải khai báo nhiều lần mỗi khi cần destructure một props.
    function NumberInput(props) {
        const { placeholder: holder, readonly=false } = props;
        return (
        <input placeholder={holder} readonly={readonly} />
        );
    }
    NumberInput.defaultProps = {
        readonly: false,
        decimalDigits: 4
    }
    class NumberInput extends React.Component {
        static defaultProps = {
        readonly: false,
        decimalDigits: 4
        };
        render() {
        const { placeholder: holder, readonly=false } = this.props;
        return (
            <input placeholder={holder} readonly={readonly} />
        );
        }
    }

// Không được gán đè props
// Props là tham số từ bên ngoài truyền vào cho component, nên React không cho phép gán đè giá trị khác cho props.
// Đoạn mã sau sẽ gây lỗi:
    function NumberInput(props) {
        props.readonly = true;
        return (...   );
    }