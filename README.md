# React + TypeScript + Vite

## Installation

Hướng dẫn cài đặt dự án ở máy local:

1. Clone the repository:

```bash
git clone https://github.com/nothings0/booking.git

```

2. Chuyển hướng tới thư mục dự án:

```bash
cd booking

```

3. Cài đặt các package cần thiết:

```bash
npm install

**./src:**

    .
    ├── components              # Chứa các thành phần giao điện của ứng dụng
    ├── constants               # Những hằng số liên quan
    ├── contexts                # Global State
    ├── helpers                 # Các hàm tiện ích
    ├── hooks                   # Customhook
    ├── layouts                 # Khung giao diện ứng dụng
    ├── pages                   # Các trang của ứng dụng
    ├── routers                 # Định tuyến của ứng dụng
    ├── utils                   # Các module hỗ trợ
    ├── index.css               # File css chính
    ├── main.jsx                # File root

**./src/components ( Atomic Desgin ):**

    .
    ├── ui                      # Chứa các phần tử nhỏ nhất (Button, Label, Input ,...)
    ├── common                  # Chứa các phần tử đơn gỉản kết hợp gồm 2 - 3 UI (Loading, Pagination, Float Button, ...)