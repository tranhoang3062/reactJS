// -------------------
// DOM
// DOM được viết đầy đủ là Document Object Model - Mô hình Đối tượng Tài liệu
// Là một giao diện lập trình ứng dụng (API)
// Được dùng để truy xuất các tài liệu dạng HTML và XML, có dạng một cây cấu trúc dữ liệu,
// và thông thường mô hình DOM độc lập với hệ điều hành và dựa theo kỹ thuật lập trình hướng đối tượng để mô tả tài liệu
// Gồm 3 thành phần:
//     + Element: các thẻ như html, head, title,...
//     + Atribute: href, src, id, class,...
//     + Text: gồm các văn bản
// --------------------
// Virtual DOM
// Là một Object chứa các thông tin cần thiết để tạo ra một DOM.
// Hiểu một cách đơn giản, V-DOM giống như một bản vẽ, nó chứa toàn bộ các thông tin cần thiết để tạo nên
// một DOM, chúng ta có thể tạo, sửa, thao tác trên đó mà không cần tác động trực tiếp vào các phần tử DOM trên View.
// React chia VDOM thành 5 loại chính:
//     + ReactElement: có 4 tính chất là type, props, key và ref. Không có hàm thực hiện.
//     + ReactElement Factory: là hàm để tự động tạo ra các ReactElement.
//     + ReactNode: có thể là ReactElement, string(ReactText), number(ReactText), mảng các ReactNodes(ReactFragement)
//     + ReactComponent: là một JS Class (hoặc constructor function)
//     + ReactComponent Class