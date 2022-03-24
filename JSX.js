// ------------------------------------
// JSX
// JSX = JavaScript + XML
// JSX biến đổi cú pháp dạng gần như XML về thành Javascript, giúp người lập trình có thể code ReactJS bằng cú pháp của XML
// thay vì sử dụng Javascript. Các XML elements, atributes và children được chuyển đổi thành các đối số truyền vào React.createElement
// JSX cho phép ta viết HTML trên React.
// Nhắc lại về XML: là viết tắt của eXtensible Markup Language, hay còn gọi là ngôn ngữ đánh dấu mở rộng do W3C đề nghị với mục 
// dích tạo ra các ngôn ngữ đánh dấu khác.Đây là một tập hợp con đơn giản có thể mô tả nhiều loại dữ liệu khác nhau nên rất hữu ích 
// trong việc chia sẻ dữ liệu giữa các hệ thống.

// Cú pháp của JSX:
// <JSXElementName JSXAttributesopt>...</JSXElementName>
// Ngoài ra JSX cũng có SelfClosingElement:
// <JSXElementName JSXAttributes/>

// Chú ý: JSX không phải là HTML
// Ví dụ trong một div element, ta định nghĩa một Class container thì ta không viết là 
// <div class="container">...</div> mà phải viết là <div className="container">...</div>
// Ngoài ra HTML tag không cần đóng cũng được nhưng JSX phải có đóng tag

// Nhúng biểu thức trong JSX
// ta có thể nhúng bất kỳ biểu thức JS nào trong JSX bằng cách đóng nó trong dấu ngoặc nhọn.
// Ví dụ:
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    
    const element = (
        <h1>
        Hello, {formatName(user)}!
        </h1>
    );
    
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    
// JSX cũng là biểu thức
// Sau khi biên dịch, biểu thức JSX trở thành các đối tượng JS thông thường.
// Điều này có nghĩa là bạn có thể sử dụng JSX bên trong các câu lệnh If và cho các vòng lắpm gán nó cho các biến, 
// chấp nhận nó như các đối số và trả về nó từ các hàm:
    function getGreeting(user) {
        if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }
    
// Thuộc tính chỉ định với JSX
// Bạn có thể sử dụng dấu ngoặc kép để xác định chuỗi literals như các thuộc tính:
   const element = <div tabIndex="0"></div>;
// Bạn cũng có thể sử dụng dấu ngoặc nhọn để nhúng một biểu thức JavaScript trong một thuộc tính:
   const element = <img src={user.avatarUrl}></img>;
// Không đặt dấu ngoặc kép quanh dấu ngoặc nhọn khi nhúng một biểu thức JavaScript trong một thuộc tính. Nếu không, 
// JSX sẽ coi thuộc tính là một chuỗi chữ chứ không phải là một biểu thức. Bạn nên sử dụng dấu ngoặc kép (cho giá trị chuỗi) 
// hoặc dấu ngoặc nhọn (cho các biểu thức), nhưng không phải cả hai trong cùng một thuộc tính.

// Nếu một thẻ trống, ta có thể đóng nó ngay lập tức với />
    const element = <img src={user.avatarUrl} />;

// JSX có thể chứa children
    const element = (
        <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
        </div>
    );